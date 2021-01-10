import {addEvent} from './event';
import {REACT_TEXT} from './constants';
/**
 * 1.把vdom虚拟DOM变成真实DOM dom
 * 2.把虚拟DOM上的属性更新或者说同步到dom上
 * 3.把此虚拟DOM的儿子们也都变成真实DOM挂载到自己的dom上 dom.appendChild
 * 4.把自己挂载到容器上
 * @param {*} vdom 要渲染的虚拟DOM 
 * @param {*} container 要把虚拟DOM转换真实DOM并插入到哪个容器中中去
 */
function render(vdom,parentDOM,nextDOM,oldDOM){
    if(vdom){
        let newDOM = createDOM(vdom);
        if(oldDOM){
            parentDOM.replaceChild(newDOM,oldDOM);
        }else{
            if(nextDOM)//button
            parentDOM.insertBefore(newDOM,nextDOM);
            else
                parentDOM.appendChild(newDOM);//不能写死appendChild
            }
    }
   
}
/**
 * 把虚拟DOM变成真实DOM
 * @param {*} vdom 虚拟DOM
 */
export function createDOM(vdom){
    //否则 它就是一个虚拟DOM对象了,也就是React元素
    let {type,props}= vdom;
    let dom;
    if(type === REACT_TEXT){
        dom = document.createTextNode(props.content);
    }else if(typeof type === 'function'){//自定义的函数组件
        if(type.isReactComponent){//说明这是一个类组件
            return mountClassComponent(vdom);
        }else{//否则说明是一个函数组件
            return mountFunctionComponent(vdom);
        }
    }else{//原生组件
        dom = document.createElement(type);
    }
    //使用虚拟DOM的属性更新刚创建出来的真实DOM的属性
    updateProps(dom,{},props);
    //在这处理props.children属性
    //如果只有一个儿子，并且这个儿子是一个文本
   if(typeof props.children ==='object' && props.children.type){
        //把儿子变成真实DOM插到自己身上
        render(props.children,dom);
    //如果儿子是一个数的话，说明儿子不止一个
    }else if(Array.isArray(props.children)){
        reconcileChildren(props.children,dom);
    }
    //把真实DOM作为一个dom属性放在虚拟DOM。为以后更新做准备
    //当根据一个vdom创建出来一个真实DOM之后，真实DOM挂载到vdom.dom属性上
    vdom.dom = dom;
    return dom;
}
/**
 * 把一个类型为自定义函数组件的虚拟DOM转换为真实DOM并返回
 * @param {*} vdom 类型为自定义函数组件的虚拟DOM
 */
function mountFunctionComponent(vdom){
    let {type,props}= vdom;
    let oldRenderVdom = type(props);
    vdom.oldRenderVdom=oldRenderVdom;
    return createDOM(oldRenderVdom);
}
/**
 * 1.创建类组件的实例
 * 2.调用类组件实例的render方法获得返回的虚拟DOM(React元素)
 * 3.把返回的虚拟DOM转成真实DOM进行挂载
 * @param {*} vdom 类型为类组件的虚拟DOM
 */
function mountClassComponent(vdom){
    //解构类的定义和类的属性对象
    let {type,props}= vdom;
    //创建类的实例
    let classInstance = new type(props);
    //让这个类组件的虚拟DOM的classInstance属性指向这个类组件的实例
    vdom.classInstance=classInstance;
    if(classInstance.componentWillMount){
        classInstance.componentWillMount();
    }
    //调用实例的render方法返回要渲染的虚拟DOM对象
    let oldRenderVdom = classInstance.render();
    //把这个将要渲染的虚拟dom添加到类的实例上
    classInstance.oldRenderVdom=vdom.oldRenderVdom=oldRenderVdom;
    //根据虚拟DOM对象创建真实DOM对象
    let dom =  createDOM(oldRenderVdom);
    if(classInstance.componentDidMount){
        classInstance.componentDidMount();
       // dom.componentDidMount=classInstance.componentDidMount.bind(classInstance);
    }
    //为以后类组件的更新,把真实DOM挂载到了类的实例上
    //classInstance.dom = dom;
    return dom;
}
/**
 * 
 * @param {*} childrenVdom 儿子们的虚拟DOM
 * @param {*} parentDOM 父亲的真实DOM
 */
function reconcileChildren(childrenVdom,parentDOM){
  for(let i=0;i<childrenVdom.length;i++){
      let childVdom = childrenVdom[i];
      render(childVdom,parentDOM);
  }
}
/**
 * 使用虚拟DOM的属性更新刚创建出来的真实DOM的属性
 * @param {*} dom 真实DOM
 * @param {*} newProps 新属性对象 
 */
function updateProps(dom,oldProps,newProps){
  for(let key in newProps){
      if(key === 'children') continue;//单独处理,不在此处处理
      if(key === 'style'){
        let styleObj = newProps.style;
        for(let attr in styleObj){
            dom.style[attr]=styleObj[attr];
        }
      }else if(key.startsWith('on')){
        //给真实DOM加属性的话 onclick
        //dom[key.toLocaleLowerCase()]=newProps[key];
        addEvent(dom,key.toLocaleLowerCase(),newProps[key]);
      }else{//在JS中 dom.className='title'
          dom[key]= newProps[key];
      }
  }
}
/**
 * 对当前组件的进行DOM-DIFF
 * @param {*} parentDOM  当前组件挂载父真实DOM节点
 * @param {*} oldVdom 上一次老的虚拟DOM
 * @param {*} newVdom 这一次新的虚拟DOM
 */
export function compareTwoVdom(parentDOM,oldVdom,newVdom,nextDOM){
  //老的虚拟DOM和新的虚拟DOM都是null
  if(!oldVdom && !newVdom){
  //如果老的虚拟DOM有，新的虚拟DOM没有  
  }else if(oldVdom && !newVdom){
    let currentDOM = findDOM(oldVdom);//先找到此虚拟DOM对应的真实DOM
    if(currentDOM)//parentDOM=div#root currentDOM div#sub-counter
         parentDOM.removeChild(currentDOM);
    if(oldVdom.classInstance&&oldVdom.classInstance.componentWillUnmount){
        oldVdom.classInstance.componentWillUnmount();
    }     
  //如果老的是个null，新的有值  ,新建DOM节点并且插件
  }else if(!oldVdom && newVdom){
    render(newVdom,parentDOM,nextDOM);
  //老的有新的也有,但是类型不同
  }else if(oldVdom &&newVdom && (oldVdom.type !== newVdom.type)){
    render(newVdom,parentDOM,nextDOM,findDOM(oldVdom))
    if(oldVdom.classInstance&&oldVdom.classInstance.componentWillUnmount){
        oldVdom.classInstance.componentWillUnmount();
    }  
  //如果新的有，老的也有，并且类型也一样 ,就可以复用老的DOM节点，进行深度的DOM-diff
  //更新自己的属性，另一方面要深度比较儿子们  
  }else{
      //Counter组件更新的时候oldVdom newVdom {type:'div'}
    //如果能走到这，类型一定是一样的
    updateElement(oldVdom,newVdom);
  }
}
/**
 * 深度比较这二个虚拟DOM
 * @param {*} oldVdom 老的虚拟DOM
 * @param {*} newVdom 新的虚拟DOM
 */
function updateElement(oldVdom,newVdom){
    if(oldVdom.type === REACT_TEXT){//文件节点
        let currentDOM = newVdom.dom = oldVdom.dom;//复用老的真实DOM节点
        currentDOM.textContent = newVdom.props.content;//直接修改老的DOM节点的文件就可以了
    }else if(typeof oldVdom.type === 'string'){//说明是个原生组件 div
        let currentDOM = newVdom.dom = oldVdom.dom;//复用老的DIV的真实DOM div#counter
        updateProps(currentDOM,oldVdom.props,newVdom.props);//更新自己的属性
        //更新儿子们 只有原生的组件 div span才会去深度对比
        updateChildren(currentDOM,oldVdom.props.children,newVdom.props.children);
    }else if(typeof oldVdom.type === 'function'){
        if(oldVdom.type.isReactComponent){
            updateClassComponent(oldVdom,newVdom);//老的和新的都是类组件，进行类组件更新
        }else{
            updateFunctionComponent(oldVdom,newVdom);//老的和新的都是函数组件，进行函数数组更新
        }
    }
}
function updateFunctionComponent(oldVdom,newVdom){
    let parentDOM=findDOM(oldVdom).parentNode;//div#counter
    let {type,props}= newVdom;//FunctionCounter {count:2,children:[div]}
    let oldRenderVdom=oldVdom.oldRenderVdom;//老的渲染出来的vdom div#counter-function>0
    let newRenderVdom = type(props);//新的vdom div#counter-function>2
    compareTwoVdom(parentDOM,oldRenderVdom,newRenderVdom);
    newVdom.oldRenderVdom = newRenderVdom;
}
/**
 * 如果老的虚拟DOM节点和新的虚拟DOM节点都是类组件的话，走这个更新逻辑
 * @param {*} oldVdom 老的虚拟DOM节点
 * @param {*} newVdom 新的虚拟DOM节点
 */
function updateClassComponent(oldVdom,newVdom){
    let classInstance = newVdom.classInstance = oldVdom.classInstance;//类的实例需要复用。类的实例不管更新多少只有一个
    newVdom.oldRenderVdom=oldVdom.oldRenderVdom;//上一次的这个类组件的渲染出来的虚拟DOM
    if(classInstance.componentWillReceiveProps){//组件将要接收到新的属性
        classInstance.componentWillReceiveProps();
    }
    //触发组件的更新，要把新的属性传过来
    classInstance.updater.emitUpdate(newVdom.props);

}
/**
 * 深度比较它的儿子们
 * @param {*} parentDOM 父DOM点
 * @param {*} oldVChildren 老的儿子们 p2 ChildCounter button+
 * @param {*} newVChildren 新的儿子们 p4 null button+
 */
function updateChildren(parentDOM,oldVChildren,newVChildren){
    //因为children可能是对象，也可能是数组,为了方便按索引比较，全部格式化为数组
    oldVChildren = Array.isArray(oldVChildren)?oldVChildren:[oldVChildren];
    newVChildren = Array.isArray(newVChildren)?newVChildren:[newVChildren];
    let maxLength = Math.max(oldVChildren.length,newVChildren.length);
    for(let i=0;i<maxLength;i++){
        //在儿子们里查找，找索引是大于当前索引的
        let nextDOM = oldVChildren.find((item,index)=>index>i&&item&&item.dom);
        compareTwoVdom(parentDOM,oldVChildren[i],newVChildren[i],nextDOM&&nextDOM.dom);
    }
}
/**
 * 查找此虚拟DOM对应的真实DOM
 * @param {*} vdom 
 */
function findDOM(vdom){
    let {type}= vdom;
    let dom;
    if(typeof type === 'function'){//如果是组件的话
        dom=findDOM(vdom.oldRenderVdom);
    }else{///普通的字符串，那说明它是一个原生组件。dom指向真实DOM
        dom=vdom.dom;
    }
    return dom;
}
const ReactDOM = {render}
export default ReactDOM;