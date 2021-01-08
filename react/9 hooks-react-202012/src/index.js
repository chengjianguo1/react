import React from './react';
import ReactDOM from './react-dom';
/**
 * react优化的最重要策略是减少组件的刷新
 * 希望组件的属性不变的话就不要刷新
 * 类组件的话PureComponent
 * useCallback
 * useMemo
 */

function Child({data,handleClick}){
  console.log('Child render');
  return <button onClick={handleClick}>{data.number}</button>
}
//返回组件要有一个功能，属性变了重新渲染，不变，不更新
let MemoChild= React.memo(Child);
function App(){
  console.log('App render');
  const [name,setName] = React.useState('zhufeng');
  const [number,setNumber] = React.useState(0);
  //缓存对象useMemo will only recompute the memoized value when one of the deps has changed.
  const data = React.useMemo(()=>({number}),[number]);
  //缓存函数的话 will return a memoized version of the callback that only changes if one of the inputs has changed.
  const handleClick = React.useCallback(()=>setNumber(number+1),[number]);
  return (
    <div>
      <input type="text" value={name} onChange={event=>setName(event.target.value)}/>
      <MemoChild data={data} handleClick={handleClick}/>
    </div>
  )
}
ReactDOM.render(<App/>,document.getElementById('root'));
/**
 * 其实因为在原版代码里，每一个组件都有自己的index和数组
 * 在原版代码它是把这个放到fiber里了
 * useReducer 会有 初始化器
 * 
 */