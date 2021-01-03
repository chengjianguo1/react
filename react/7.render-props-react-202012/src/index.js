import React from './react';
import ReactDOM from './react-dom';
function withTracker(OldComponent){
  return class extends React.Component{
    constructor(props){
      super(props);
      this.state = {x:0,y:0};
    }
    handleMouseMove = (event)=>{
      this.setState({
        x:event.clientX,
        y:event.clientY
      });
    }
    render(){
      return (
        <div onMouseMove={this.handleMouseMove}>
          <OldComponent {...this.state}/>
        </div>
      )
    }
  }
}
function Show(props){
  return (
    <div>
         <h1>移动鼠标</h1>
         <p>当前的鼠标位置x:{props.x}y:{props.y}</p>
    </div>
  )
}
const MouseTracker= withTracker(Show);
ReactDOM.render(<MouseTracker/>,document.getElementById('root'));

/* ReactDOM.render(<MouseTracker>
  {
    props=>(
    <div>
         <h1>移动鼠标</h1>
         <p>当前的鼠标位置x:{props.x}y:{props.y}</p>
    </div>)
  }
</MouseTracker>,document.getElementById('root')); */
