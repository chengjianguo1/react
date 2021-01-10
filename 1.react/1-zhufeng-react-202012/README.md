基础不会去看官方文档 
09:36
杨阳
老师,实际项目中,架构项目的时候, 一般是自己配置webpack还是直接用 react或者vue脚手架生成项目? 
刘帅
自己配置吧  
李福顺
npm 可以吗 
MR.tony
新初始化项目都是hooks写法了吗？ 
黄程
老师，react配置项隐藏起来怎么做的呀 
有两种方式
1. rewired修改配置
2. npm run eject 弹出配置文件，不可逆的
react
项目配置文件在哪看啊 
MR.tony
影藏着 
MR.tony
有个命令来着，忘了 
136****2778
eject 
FE扫地僧
可以 通过 yarn eject 


vue的render也一样啊 
136****2778
那这样子哪一步把虚拟dom变成真实dom？ 
Tony
ReactDOM.render() 
慕曦
render的时候  把虚拟dom渲染到页面 
156****2854
跟vue的render函数差不多啊 
Tony
文本连起来都是一个children吧？ 有可能是两个吗？ 
MR.tony
AST树吗？ 
156****2854
虚拟dom把 
BiuBiu
JSX上 怎么体现两个儿子 
react
一个儿子不设计成数组的好处是啥 
好处很多
很多时候我们都会处理儿子
全是数组 ，每次都要按索引取第一个元素
React很多时候儿子只有一个
children[0]
children




项目怎么创建的？ 
create-react-app my-app
月下吴刚
哪个命令？ 
FE扫地僧
create-react-app my-app 
月下吴刚
哦，全家桶 
天道酬勤
render里面可以直接传虚拟dom，也能渲染出来吧 
钱炜华
文本节点不需要用个类型标识下么 
React源码没有加
因为如果一个元素它只有一个儿子，儿子还是文本节点话，React进行了优化!??TODO
记就记了
只要你写标签包文本，几乎都是一个儿子 

肯定是先编译，React.createElement()
后在浏览器执行React.createElement()得到虚拟DOM
，执行时已经编译成虚拟dom了 
2580
每个父节点的子节点都只能是一个，是基于什么考虑 TODO??
h y
少了递归？ 


老师你可以讲完一个知识点儿备份一个文件. 别删除覆盖,我们看起来应该会更方便一些. 

没用过for这个属性 
慕曦
利用map 
记就记了
少了key 
h y
元素上有个::marker 是什么呢 
FE扫地僧
么有根节点为啥  可以运行呢 ?  
嗨，呵呵
key不能等于下标吧？ 



每次循环index都会重置 
记就记了
点 
杨阳
是个伪类啊 
FE扫地僧撤回了一条消息
记就记了
前面那个点 
记就记了
maker 
杨阳
列表的 顺序好像是 
BiuBiu
那每次包个symbil 是不是就肯定唯一了 
记就记了
无序列表 
h y
原来一直没注意这个 都是清除默认样式了的 
h y
老师 你那个没有使用的变量名 加了一个横杠是什么插件呢 
10:30
落雨
没有key，会按索引来对比
不加key的话，diff就没法对id进行对比移动吗 
Y
用index和没加是一样的吧？重新渲染后 index还是1、2、3 没有绑定关系啊 
李福顺
老师，先休息一下，下去买点东西吃 
天道酬勤
不加key，react就只能先删旧的，再插入新的吧？ 
记就记了撤回了一条消息


学习
老师 显示引入模块大小的插件叫什么 import cost
Tony
今天会讲到dom-diff这块吗？把有key和没有key的地方就可以对比看一下了 
有专题课

杨阳
你百度能搜到的. 那个插件 
学习
用index当key和不加key是一样的效果？ 
Tony
节省的地方就是 销毁真实dom 和创建真实dom的操作？ 然后现在是用其他api 来移动真实dom的 来替代销毁创建的操作吗？ 
hhhhh
跟vue的key不要用index一个原因吧 
MR.tony
 10分钟 
张仁阳
休息10分钟 
开心麻花
不是数组列表元素 普通元素的dom-diff 也要用key来查找吗？ 
BiuBiu
那我给下标key 加 symbol 不就可以唯一了吗 



给非列表元素 添加key 有应用场景吗？做优化使用？？
不需要
DOM-DIFF比较的时候只会比较同级元素，同层元素

span里面的text变了 是text变了 还是整个span重新删除创建 
136****2778
？ 
开心麻花
哦 明白了 
136****2778
整个对象是只读的？  
Tony
这个是怎么实现只读的？就是用了Object.freeze吗 
136****2778
相当于Object.freeze了》 
136****2778
？ 

学习
Writable为false？ 
Fwf
react 17后就可以改变了吗？为什么呢 

Object.seal() 密封的物件还是可以改变它原有属性的值。
而被 Object.freeze()冻结的物件则无法改变它原有属性的值因为他们是不可变的。
react 17后就可以改变了吗？为什么呢 
136****2778
可是这时候里面的children变了呀 text变了 
136****2778
不是不能改里面的属性吗 
杨阳
polyfill是个啥 


null，2是什么意思 
开心麻花
这个注释怎么自动生成的 
136****2778
这个注释怎么自动生成的  
MMO
这个注释怎么自动生成的  
 
张润钊-2625
快捷键。。在function上面 /** 回车就会自己出来的 
慕曦
vscode自带的， 先写了参数 按/* 回车就有了 
136****2778
那return的怎么自动生成 
136****2778
？ 
hard
666 



勿忘心安
操作dom就是这样 
h y
className的处理感觉就比vue那儿处理好一点 emm 
开心麻花
style 为什么不直接赋值 还要单独处理？ 
月下吴刚
与 class 关键字区分 
h y
style是个对象集合  

jsx语法<div>是怎么转换成creatElment的  

style是字符串也有可能吧 
136****2778
这里没有处理jsx语法转换成creatElment 为啥程序可以跑起来 
勿忘心安
jsx-loader 
hard撤回了一条消息
Vc撤回了一条消息
青衣
交给babel处理 
BiuBiu
我们写React，type传值不是标签名，是自己写的组件名，那不就报错了 
hard
老师 发下视频的链接吧 
136****2778
这个原理我懂 不过我是问这里怎么实现的 
136****2778
有没有引入包   
136****2778
又没有引入包 


儿子不应该是个数组么 
react
数组呢 
150****8093
这个children会不会是个数组 
150****8093
数组怎么处理 
记就记了撤回了一条消息
136****2778
32行为什么要&&props.chilren.type  
开心麻花
儿子啥时候会是个对象？？ 
 /* let obj = {};
 let element2 = <div>{obj}</div> */

BiuBiu
儿子也是虚拟dom的时候啊 
150****8093
children.type有值说明不是数组，应该是普通对象 
开心麻花
哦 

react代码仓库地址发下吧 
136****2778
react代码仓库地址发下吧  
记就记了撤回了一条消息
李福顺
jsx语法怎么解析的，都没有引入react.js 
babel
babe-loader @babel/preset-react
记就记了撤回了一条消息
BiuBiu
babel做的解析 
空空
张老师，编译原理专题课(架构)，这个我看不了，要找客服老师加一下权限吗？
 

现在基本都是函数式组件吧 
14:08
MR.tony
函数welcome在render函数中怎么运行的？ 
14:11
136****2778
像vue中的slot 
MR.tony
嗯，有点 
136****2778
函数组件的type如何等于function 
钱炜华撤回了一条消息
钱炜华
type是不是可以通过标签去判断吧，不是常用的就是函数的标签把 
学习
函数组件的vdom长什么样子 
136****2778
57行的 functionCompnent来自哪里 
开心麻花
函数组件的vdom长什么样子 
MR.tony
递归出来的 

函数组件已经可以完全100%替代类组件了吗 
FE扫地僧
函数组件能保持自己 单独状态吗 ?  
折耳根
hooks 
136****2778
1 
136****2778
函数怎么传进去的 
136****2778
没有看到type function 
MR.tony
这个打印出来的是Vdom？还是？ 
学习
函数要在replacer里调用tostring 


什是类组件 
f
class 
136****2778
1 
学习
可能是字符(原生组件 )，也可能是函数组件或者 类组件
还以为type一直是字符串，没想到直接把函数赋值给type了 
杨阳
函数组件是没有生命周期是吧 
没有
MR.tony
好像是 
刘帅
hooks相当于聚拢了生命周期的作用 
MR.tony
对，有了hooks 
MR.tony
类组件的props怎么传进去执行的？ 
136****2778
为什么要类的属性 
136****2778
不能实例属性 
MR.tony
es7 静态属性？ 
14:35
月下吴刚
为什么 type 可以 new？ 
136****2778
74的render是类里面的方法把？ 
136****2778
需要重写render 
MR.tony
type应该是那个类 
2580撤回了一条消息
MR.tony
不然new啥啊 
刘帅
render哪儿来的 
class组件和function组件 区别后边能总述一下么 
1.class是有实例的，而且 不能销毁，性能会低一点，而且 会占用大量内存
2.函数组件纯函数，执行完了，里面所有的本地资源都被销毁，没有实例，也不会占用大量内存，性能会高一点
1.类组件是有生命周期的，函数组件没有生命周期

14:40
月下吴刚
type 一共只有  四种情况吧？ 
1.字符串
2.函数组件
3.类组件
4.其它
136****2778
中午那个思考题能说下吗 为什么dom不能赋值给vdom的一个属性？ 
原版代三里vdom只读的，不能加属性
2580
render在哪儿定义声明的   
136****2778
index实例里面的render和最下面那个render不是一回事吧？ 
看一下类的vdom 
折耳根
哪类组件的实例 什么时候才能销毁呢，一直在内存中吗？ 
MR.tony
Component组件为啥不写render？ 
开心麻花
react-dom.js是不是得引用自己的react.js ？ 
月下吴刚
函数组件必须通过 hooks 才能有自己的状态吧？ 

哪类组件的实例 什么时候才能销毁呢，一直在内存中吗？ 
MR.tony
Component组件为啥不写render？ 
开心麻花
react-dom.js是不是得引用自己的react.js ？ 
月下吴刚
函数组件必须通过 hooks 才能有自己的状态吧？ 
Caption
这里涉及react的调度不 
MR.tony
听一听又想起来一些知识 
刘姑娘
先不要着急呀，都会讲到的 
张宝丰
调度估计要后面了 
14:51
折耳根
为什么要 super props啊 
MR.tony
生命周期有的好像好废弃掉了 
刘帅
didmount是在render之后 

setState接收两个参数是吧? 第二个经常做什么用的来? 
136****2778
这里setState是同步的 
折耳根
意思是 super props 等于 直接写 this。props。= props 吗  
2580
有些情况下是可以的把  this.state.xxx = xxx; 
react
更新组件 
刘帅
直接修改state行是行但是不触发更新视图 
2580
forceUpdate() 
Tony
有时候为了维护一个数据。。都直接放在this.state上了。 因为this.setState是合并更新 
136****2778
课件的地址请助教发下？ 
嗨，呵呵
这里没有this 
MR.tony
上面是箭头函数 
嗨，呵呵
哦 
Y
剪头函数 否则的话bind一下也可以 
张润钊-2625
这个有点像Vue的批处理。。然后vue就有了nextTick 
张老 那个jsx中不能使用class 和 for的关键字 这个是jsx语法的规则吧 
也不只是react中的写法？ vue中使用jsx语法 也不能用class和for吧？ 

1.箭头函数 
开心麻花
这个let 声明的classInstance 组件实例为什么不会消失？ 
折耳根
react事件不是用的事件委托吗 
拖拉机上敲代码
父类 
MR.tony
component 
Tony
父类给的 
Tony
Component 
慕曦
Component 




Component 
MR.tony
看不到 
开心麻花
函数执行完 let 声明的变量不就释放了么  
136****2778
state需要再父类设置吗 
15:26
MR.tony
10行的render取得是哪儿的？ 
张宝丰
classInstance.dom具体指的是什么 
拖拉机上敲代码
更新按理说用该要diff对比吗？ 
136****2778
replaceChild就是dom diff了 
136****2778
但是今天可能不写dom diff 
Tony
之后会在这部分替换的时候 做优化diff吧 
136****2778
replaceChild是原生dom方法吗 
开心麻花
70行里函数执行得到组件实例，函数执行完， 组件实例为什么没有销魂？ 
MR.tony
domdiff 没le 
宅男呀
对,原生的 
妮妮
老师，可以先上传一部分代码？ 


setTimeout内部的是不会批量更新的 
安凯凯
在20行前面打印一下this.state.number 

那1什么时候跟新的 是不是setTimeout执行就理科更新？


张宝丰
老说为啥会在异步里面会同步更新 
刘姑娘
跑两圈 
月下吴刚
红牛 
MR.tony
喝点酒 
月下吴刚
我边听变嗑瓜子，就不困 
钱炜华
那这个更新等于只跟react的批量有关系，跟宏任务和微任务都没有关系吗 
落雨
发布订阅吗 

handler里点击写了两次+1的方法只执行了一次合理么？/

didMount里如果调用两次setState 也是异步更新,这个不是也不在事件处理函数中 
是取最后一个执行的结果吗 是的
只要是在react管理的地盘中，就是批量的 事件处理函数 生命周函数中就是批量
不在react管理的地盘上，就是非批量的

16:09
136****2778
1 
16:12
136****2778
this是啥 
136****2778
17行的this 
杨阳
这里 add 的 this是什么 
136****2778
update的实例？ 
开心麻花
this 是update实例 
react
updater实例 
罗畅
一个this(组件实例)对应一个 updater吧 


这就是react的合成事件吧 
月下吴刚
有没有 hasEvent 这个Api? 
罗畅
浏览器兼容 
react
扩展逻辑 
Tony
aop编程 
开心麻花
统一批量更新的逻辑 
Tony
添加额外的逻辑 
136****2778
类似装饰器？ 
16:49
136****2778
dom什么是有有stroe的？ 



target上有store？ 
136****2778
那这个和dom.store 
136****2778
2 
136****2778
有什么关系 
136****2778
22行的event参数是哪里传进去的 
徐健
doucment是怎么拿到到handlerClick的 
Tony
不要这么写吧。。来回串 尽量写纯函数吧 这样代码可读性号 
开心麻花
这样for 循环，syntheticEvent 不还是原生Event? 
月下吴刚
代理有什么好处？ 

看看dom打印出来的效果 
Tony
事件触发之后需不需要清除document上的事件监听函数 之后可能有别的click 
月下吴刚
就是回调函数的 event 参数 
MR.tony
事件对象 
Caption
那个 while循环一直冒泡会有问题吧 
月下吴刚
vue 里面要用 .native 来冒泡吧 

136****2778
let dom.store哪一行看不懂 
罗畅
事件冒泡会触发所有同名函数 
开心麻花
批量更新的回调是哪里执行的？ 
妮妮
可以梳理一次 
妮妮
？ 
空空
合成事件和批量更新的关系没理解 
Caption
怎么阻止冒泡呀 


batchUpdate()方法看一下 
学习
Syntheticevent的作用是什么 
1.兼容处理
2.提高性能
罗畅
合成事件里 
1.首先是批量更新模式，然后执行绑定的回调函数，
2.执行完了后将改成 非批量更新模式
3.如果回调函数里有 定时器函数，此时已经是非批量更新模式了，所以定时器里会依次立即更新

是这个逻辑吧 

