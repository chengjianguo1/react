

export function loadMore(element:HTMLDivElement,callback:Function){
    function _loadMore(){
        let clientHeight = element.clientHeight;//容器的高度
        let scrollTop = element.scrollTop;//内容向上卷去的高度
        let scrollHeight = element.scrollHeight;//内容的高度
        if(clientHeight + scrollTop + 10>=scrollHeight){
            callback();
        }
    }
    element.addEventListener('scroll',debounce(_loadMore,100));
}
//防抖
export function debounce(callback:Function,wait:number){
  var timeout:any;
  return function(){
      if(timeout)clearTimeout(timeout);
      timeout = setTimeout(callback,wait);
  }
}