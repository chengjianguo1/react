import React from './react';
import ReactDOM from './react-dom';
class Counter extends React.Component{
  ulRef=React.createRef()//{current:null}
  state = {list:[]}
  //它会在DOM更新前执行，可以用来获取更新前的一些DOM信息
  getSnapshotBeforeUpdate(){
    //如何拿到真实DOM 通过scrollHeight获取内容高度 
    return this.ulRef.current.scrollHeight;
  }
  componentDidUpdate(prevProps,prevState,scrollHeight){
    console.log('ul本次添加了', (this.ulRef.current.scrollHeight-scrollHeight)+'px');
  }
  handleClick = ()=>{
    let list = this.state.list;
    list.push(list.length);
    this.setState({list});
  }
  render(){
    return (
      <div>
        <button onClick={this.handleClick}>+</button>
        <ul ref={this.ulRef}>
          {
            this.state.list.map((item,index)=><li key={index}>{index}</li>)
          }
        </ul>
      </div>
    )
  }

}
let element = <Counter/>;
console.log(element);
ReactDOM.render(element,document.getElementById('root'));
