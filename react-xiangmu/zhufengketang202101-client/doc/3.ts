//const classnames = require('classnames');

function classnames(config:any){
  return Object.keys(config).filter((key:string)=>{
    return  config[key]
  }).join(' ');
}
const className = classnames({
  active:true,
  onlyOne:false,
  ok:true
});
console.log(className);
