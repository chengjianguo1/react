import { createDOM } from './react-dom';
//更新队列
export let updateQueue = {
    isBatchingUpdate: false,//当前是否处于批量更新模式,默认值是false
    updaters: new Set(),
    batchUpdate() {//批量更新
        for (let updater of this.updaters) {
            updater.updateClassComponent();
        }
        this.isBatchingUpdate = false;
    }
}
class Updater {
    constructor(classInstance) {
        this.classInstance = classInstance;//类组件的实例
        this.pendingStates = [];//等待生效的状态,可能是一个对象，也可能是一个函数
        this.callbacks = [];
    }
    addState(partialState, callback) {
        this.pendingStates.push(partialState);///等待更新的或者说等待生效的状态
        if (typeof callback === 'function')
            this.callbacks.push(callback);//状态更新后的回调
        if (updateQueue.isBatchingUpdate) {//如果当前的批量模式。先缓存updater
            // todo 这里去重了  updaters: new Set(),
            updateQueue.updaters.add(this);//本次setState调用结束 
        } else {
            this.updateClassComponent();//直接更新组件
        }
    }
    updateClassComponent() {
        let { classInstance, pendingStates, callbacks } = this;
        // 如果有等待更新的状态对象的话
        if (pendingStates.length > 0) {
            classInstance.state = this.getState();//计算新状态
            classInstance.forceUpdate();
            callbacks.forEach(callback => callback());
            callbacks.length = 0;
        }
    }
    getState() {//如何计算最新的状态
        let { classInstance, pendingStates } = this;
        let { state } = classInstance;
        pendingStates.forEach((nextState) => {
            //如果pendingState是一个函数的话，传入老状态，返回新状态，再进行合并
            if (typeof nextState === 'function') {
                nextState = nextState(state);
            }
            state = { ...state, ...nextState };
        });
        pendingStates.length = 0;//清空数组

        return state;
    }
}
class Component {
    static isReactComponent = true
    constructor(props) {
        this.props = props;
        this.state = {};
        this.updater = new Updater(this);
    }
    setState(partialState, callback) {
        this.updater.addState(partialState, callback);
    }
    forceUpdate() { // 更新组件
        let newVdom = this.render();
        updateClassComponent(this, newVdom);
    }
}
//TODO 更新类组件
function updateClassComponent(classInstance, newVdom) {
    let oldDOM = classInstance.dom;//取出这个类组件上次渲染出来的真实DOM
    let newDOM = createDOM(newVdom);
    oldDOM.parentNode.replaceChild(newDOM, oldDOM);
    classInstance.dom = newDOM;
}
//Component.isReactComponent = true
export default Component;