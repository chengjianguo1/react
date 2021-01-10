新开一个webview一样 
MR.tony
不出栈？ 
666
不是两个栈结构吗 
09:53
古德猫宁
队列感觉也可以呢 
MR.tony
3出栈了？ 
天道酬勤
放到2上面 
yy
这种browser路由是不是需要后端配合使用，跳转到哪个页面？ 不需要
前端路由跟后端无关，完全 是前端控制的
天道酬勤
history采用的栈的方式 
MR.tony
前端路由不需要服务器端 
Tony
4 
Tony
history路由需要服务器配合 
勿忘心安
page4 
Tony
hash路由前端搞定了 

只不过需要配置下nginx指向index.html防止刷新404 
666
page3怎么没有的，不明白 
MR.tony
嗯 
小行星
栈结构不用出栈 
记就记了
被pafe4覆盖了 
小行星
？ 
MR.tony
page3是不是出栈了？ 


需要引React 
FE扫地僧撤回了一条消息
Tony
新的runtime transformer 
FE扫地僧
从那个版本开始 不需要了  
勿忘心安
jsx编译换了 
Tony
17 
666
jsx解析器？ 
勿忘心安
17版本 
136****2778
eact 
天道酬勤
感觉后端路由思想在前端得到很好的使用，后面的restful风格的路由(原理也都是path-to-regexp)在前端也得到了很好的实现 
136****2778
exact 
yy
react-router-dom  vs react-router   区别 
两个路由类型文件中的 history 哪里来的  
月下吴刚
用props.children   原样显示 ui  ，别的啥也没干 
安凯凯
this.props.children 不用显式的传一个children， 会自动取内部元素吗 
FE扫地僧
-dom 第四行写错了  

hashRouter vs browseRoter  怎么选择，我发现平时用hashRouter多 
开发的时候et hashRouter
上线后用browserRouter

hashRouter vs browseRoter  怎么选择，我发现平时用hashRouter多 
小行星
什么区别？
 
yy
上线后需要做其他特殊处理不 
只需要做一个rewrite 把404的路径重定向到index.html就可以了
勿忘心安
我一直以为 三方包自己的依赖都会装到自己的node_modules里面 
有可能。如果包的版本冲突的话，的确会装 到自己的node_modules
记就记了
#号不美观 
月下吴刚
上线后需要 运维配置 吗？ 
 
杨阳
那为什么不直接开发的时候就用browerrouter 
月下吴刚
重定向怎么操作? 
对应的nginx视频发给大家
devServer:{
    historyApiFallback:{
        index:'index.html'
    }
}




记就记了
里面可以向前向后总共33个，不是长度最大 
古德猫宁
噢噢 
月下吴刚
go 只能总共走 33 下吗？ 
记就记了
应该是，只要push就会增加1，你看浏览器的左上角两个剪头，分别前和后，变灰色了就不能了 
记就记了
go你随时都能调用。 
Ace
长度只是指路由栈目前现在的里面有多少个路由 
记就记了
是的 
开心麻花
这个react-script start  是什么命令 
记就记了
是react封装的 
记就记了
包 
yy
1 
开心麻花
react-scripts start 内部用的就是 webpack-dev-server
哦 内部是用的webpack-dev-server 吗？ 


history 里面的location和外层的location一样吗 一样的

36****2778
unlisten是函数吗 什么作用？ 
安凯凯
这是卸载的时候 又启动一次监听吗 
学习
Will生命周期不是都废弃了吗 
willMount willUpdate willReceiveProps废弃了
但是 willUnmount没有废弃
古德猫宁
切换路由触发取消监听并刷新最新状态？不是的

安凯凯
懂了， 返回值是取消监听 
记就记了
返回值是一个让你可以调用后取消监听的函数 
136****2778
router不就一个吗 为啥要取消监听？ 
ROuter可以有多个


好嘞 
记就记了
Route还能传其他的值给子组件吧 可以的 history location match
月下吴刚
listen 的作用是什么？ 
监听 路径变化，刷 新组件
记就记了
监听路由改变 
FE扫地僧
监听url 变化 
记就记了
执行回调，刷新状态 
136****2778
contextType啥用 为何要静态 
取context provider里的value属性的值 
react语法要求的
勿忘心安
react是实现不了 vue中的那种keep-alive的吧 
可以的

天道酬勤
那个listen方法就是window.addEventListener('hashChange') 吧 
不完全 是
history 可是



为什么要这样实现  ， static 
11:38
记就记了
改变hash 
学习
Hash= 
月下吴刚
hanshChange 
FE扫地僧
window.hash  
11:42
136****2778
history哪来的？ 
136****2778
15行 
yy
listen方法的return内容没有明白 
月下吴刚
为什么要删除一个？ 
136****2778
15行 history哪来的？  


那里不就取消监听了 为啥这里要再删除一次？ 
Debugger
hashchange 的时候要改变histyory的location吧 
月下吴刚
不是自己页面的listener可以不要，是吗 
学习
Listeners数组长度15行是0吧？ 
漂
hashChange干嘛用的？ 
136****2778撤回了一条消息
136****2778
listen别的地方不是写过filter了吗 为啥这里要再次filter1次？  
Debugger
history.location 的初始值也不能写死成 '/' 吧 


11:50
Tony
现在直接修改了history的值 应该还不能触发页面渲染吧 
FE扫地僧
会呀, 组件的props 都改了  
136****2778
1 
开心麻花撤回了一条消息
开心麻花
最初的history在哪传进去的 



开心麻花
最初的history在哪传进去的 
FE扫地僧
hash 不是默认就加上了 “#” 吗 
罗畅
history监听函数里 调用里 setState,会触发页面渲染 
古德猫宁
对对对  
FE扫地僧
是这样的  


12:01
FE扫地僧
state 在页面刷新会丢失吗 ? 不会?
记就记了
你点浏览器的刷新就会消失 刷 新也不会?
Vc
query 和 params 都有? 有的
