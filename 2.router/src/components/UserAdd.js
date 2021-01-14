import React from 'react';
import {UserAPI} from '../utils';
class UserList extends React.Component{
   state={name:''}
   nameRef = React.createRef()
   handleSubmit = (event)=>{
    event.preventDefault();//不要让表单刷新
    //let name = this.nameRef.current.value;
    UserAPI.add({id:Date.now()+'',name:this.state.name});
    this.props.history.push('/user/list');
   }
   render(){
       return (
           <form onSubmit={this.handleSubmit}>
               <input value={this.state.name} onChange={(event)=>this.setState({name:event.target.value})} />
               <button type="submit">提交</button>
           </form>
       )
   }
}
export default UserList;
/**
 * 受控组件   原生的输入组件它的值受状态控制
 * 非受控组件 原生的输入组件的值不受状态控制
 * 
 *  You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.
 */