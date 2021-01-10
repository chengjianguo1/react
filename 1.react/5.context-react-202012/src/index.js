import React from './react';
import ReactDOM from './react-dom';
import PersonContext from './context';
function getStyle(color){
  return {border:`5px solid ${color}`,padding:'5px',margin:'5px'}
}
class Person extends React.Component{
  state = {color:'red'}
  changeColor=(color)=>this.setState({color})
  render(){
    let contextValue = {name:'Person',color:this.state.color,changeColor:this.changeColor};
    return (
      <PersonContext.Provider value={contextValue}>
        <div style={{...getStyle(this.state.color),width:'200px'}}>
          Person
          <Head/>
          <Body/>
        </div>
      </PersonContext.Provider>
    )
  }
}
class Head extends React.Component{
  static contextType = PersonContext;
  render(){
    return (
      <div  style={getStyle(this.context.color)}>
      Head
      <Eye/>
    </div>

    )
  }
}
class Eye extends React.Component{
  static contextType = PersonContext;
  render(){
    console.log('Eye',this.context);
    return (
      <div  style={getStyle(this.context.color)}>
          Eye
      </div>
    )
  }
}
class Body extends React.Component{
  static contextType = PersonContext;
  render(){
    return (
      <div  style={getStyle(this.context.color)}>
        Body
        <Hand/>
      </div>
    )
  }
}
function Hand(){
  return (
    <PersonContext.Consumer>
      {
        contextValue=>(
          <div  style={getStyle(contextValue.color)}>
            Hand
            <button onClick={()=>contextValue.changeColor('red')}>变红</button>
            <button onClick={()=>contextValue.changeColor('green')}>变绿</button>
          </div>
        )
      }
    </PersonContext.Consumer>
  )
}  
/* 
class Hand extends React.Component{
  static contextType = PersonContext;
  render(){
    return (
      <div  style={getStyle(this.context.color)}>
        Hand
        <button onClick={()=>this.context.changeColor('red')}>变红</button>
        <button onClick={()=>this.context.changeColor('green')}>变绿</button>
      </div>
    )
  }
} */

ReactDOM.render(<Person/>,document.getElementById('root'));
