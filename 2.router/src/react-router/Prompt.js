import React from 'react';
import RouterContext from './RouterContext';
import Lifecycle from './Lifecycle';
/**
 * 
 * @param {*} when 布尔值表示要不要阻止跳转
 * @param {*} message 它是一个函数，表示要阻止的时候显示什么的提示信息
 */
// todo UserAdd.js 中用到了
function Prompt({ when, message }) {
    return (
        <RouterContext.Consumer>
            {/* value = {location, history, match} */}
            {
                value => {
                    if (!when) return null;
                    return (
                        // todo lifecycleInstance 是谁？
                        // todo 答案在 Lifecycle中， Lifecycle => this.props.onMount&&this.props.onMount(this);
                        // lifecycleInstance 就是 Lifecycle 的实例
                        <Lifecycle
                            onMount={lifecycleInstance => {
                                lifecycleInstance.release = value.history.block(message);
                            }}
                            onUnmount={lifecycleInstance => lifecycleInstance.release()}
                        />
                    )
                }
            }
        </RouterContext.Consumer>
    )
}
// class ClassPrompt extends React.Component {
//     static contextType = RouterContext;
//     componentDidMount() {
//         this.release = this.context.history.block(this.props.message);
//     }
//     componentWillUnmount() {
//         console.log('componentWillUnmount');
//         this.release();
//     }
//     render() {
//         return null;
//     }
// }
export default Prompt;