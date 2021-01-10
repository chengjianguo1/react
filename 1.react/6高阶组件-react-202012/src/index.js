import React from './react';
import ReactDOM from './react-dom';
/**
 * 反向继承
 */
class Button extends React.Component{
  state = {name:'张三'}
  componentWillMount(){
    console.log('Button componentWillMount');
  }
  componentDidMount(){
    console.log('Button componentDidMount');
  }
  render(){
    console.log('Button render');
    return <button name={this.state.name} title={this.props.title}/>
  }
}
//一般来说，子类继续父类，先执行父类的方法，还是先执行子类的方法呢？
const wrap = Button=>{
  return class WrapButton extends Button{
    state = {number:0}
    componentWillMount(){
      console.log('WrapButton componentWillMount');
      //通过super可以调用父类的方法
      super.componentWillMount();
    }
    componentDidMount(){
      console.log('WrapButton componentDidMount');
      super.componentDidMount();
    }
    add = ()=>{
      this.setState({number:this.state.number+1});
    }
    render(){
      console.log('WrapButton render');
      let superRenderElement = super.render();
      let renderElement = React.cloneElement(superRenderElement,{
        onClick:this.add
      },this.state.number);
      return renderElement;
    }
  }
}
let WrapButton= wrap(Button);

ReactDOM.render(<WrapButton title="标题"/>,document.getElementById('root'));

/*
uper是什么，  
136****2778
老师你写在后面  肯定打印在后面啊 
古德猫宁
有什么应用场景 
136****2778
你把super写在上面  
136****2778
就是先父后子了 
Tony
super值得是button.prototype 
*/