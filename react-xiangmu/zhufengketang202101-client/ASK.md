不可以用脚手架？ 故意不用
09:41
136****2778
这个webpack5吗？ 是的
Tony
热更新的原理是什么啊 单开一个server监听文件变化？ 公开课有，四个小时
杨阳
path.join 和path.resolve 都可以? 是的

ts 和tsx 怎么选? JSX语法 tsx
青衣
historyApiFallback 设置后，在其他页面刷新会跳到index页面吗 是的


150****8093
include exclude 配一个就可以
如果都 配的话exclude优先级更高
记得在babel中exclude中默认就排除了node_modules 
古德猫宁
importLoader是啥来着 
杨阳
这么些配置, 都是咋记住的, ... ... 
136****2778
importLoader3是什么意思 
Vc
为什么不用miniCss 
小行星
1rem 对应75怎么来的 下面会讲如何计算
现在设计高宽度都是750 iPhone6 375 750
Tony
为什么只有css-loader才需要配3，别的呢？ 
Tony
这些图片需要放在哪里 
小行星
url-loader 和 file-loader有什么区别？ 
FE扫地僧撤回了一条消息
136****2778
课件地址发下？ 
月下吴刚
eslint 加了没？ 一会加
Tony
moduelResolution这个必须要制定吗  tsconfig和webpack.config.js有什么联系吗？ 
webpack.config.js 配置了，tsconfig.json配置的是补充的吗 
嗨，00
两次就可以了吧 
古德猫宁
以前是base dev prod
现在一般就一个配置了，然后通过变量来控制
一般都把webpack.dev跟webpack.prod分成两个文件 
学习
设计稿用1080宽会不会更好 
张仁阳
http://www.zhufengpeixun.com/grow/html/117.css-loader.html#t113.%20@import 
青衣
那不就有滚动条了，体验太不好 
移动 端设计 搞750px +rem
张仁阳
http://www.zhufengpeixun.com/grow/html/106.11.ketang.html#t0%E7%AC%AC1%E7%AB%A0%20%E6%90%AD%E5%BB%BA%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83 
学习
不会有 1080是百分百宽 
Caption
window 怎么升级 node 版本呀 
奋斗ing
nvm 




这个样式好像不对 main不应该是padding 120px 这个是和footer平行  
136****2778
应该是margin 120px吧 
青衣
propsWithChildren 是react 提供的，在官网spi中怎么找不到呀 
api不会写类型声明
136****2778
为什么要加children？
props.children
青衣
阻止http请求呢 
月下吴刚
react 里也有 keep-alive  吗？ 
11:55
青衣
就是没有才会自己实现的吧 
12:00
136****2778
ReturnType哪里引入的 
E
ts 内置的 
12:04
。。。
tsconfig要配置 
12:08
136****2778
左边确实有一条白线 


青衣
1.看文档

上午用到的PropsWithChildren，官网文档没写，怎么知道的呀，去哪里找的呢 
E
老师 今天早上 项目初始化配置的文档 是在哪里安  
E
就是配置husky 那些 


tsconfig不用配置吗 识别图片 
Tony
没声音了吗？ 
青衣
有 
Tony
好了。 
136****2778
classnames是一个库吗 
136****2778
什么用法 
Tony
不管是你什么组件，最终发生事件的一定还是原生的标签
图标且件最后是span
如果这里不是原声的标签 是antd的组件 那mouseEvent里应该传什么 
136****2778
t13行dateset是什么
es6 原生的DOM对象.dataset 返回自定义属性的集合 
html5特性
<span data-id="1" data-name="zhufeng"> span.dataset = {id:1,name:'zhufeng'};
青衣
event 不是原生事件对象吗，是react提供的吗 
这是合成事件，这个对象是React提供的合成事件对象
青衣
解释一下react.mouseEvent 
136****2778
13行dateset和自定义属性data-catogary啥关系 
136****2778
为啥要自定义属性data-catogary 
青衣
data后面就是自定义的属性名称，可以取到这个值，原生提供的 
14:40
开心麻花
typeof 就是类型了 为什么还要包一层returnType 

、、使用 useSelector、useDispatch 怎么处理呢  
14:48
Tony
泛型传入的是htmlul 但是我怎么知道是ul标签 而不是其他标签啊 
136****2778
homeHeader点进去看下  


看看props怎么穿进去的 各自对应 
开心麻花
明白了 
Tony
如果用的不是原声组件呢 
Tony
所以我才问这个。 

class Home {

}
绑事件肯定是原生的 div span button
<Home onclick>


那我还要看antd里用的什么标签再写吗 
罗畅
鼠标放到 onClick上会有提示 
136****2778
homeHaeder的dom结构看下 


我是想看下jsx里面的结构 看看props怎么接受 
136****2778
代码仓库给下 
136****2778
我来下代码 
136****2778
页面保持在homeheader代码这里 
张仁阳
休息8分钟 
Tony
年前就讲完了，明天接着讲完
136****2778
代码仓库地址。。。 
136****2778
今天的代码仓库地址给下 
136****2778
28行setCurrentCategory怎么传进来的的 
小行星
https://gitee.com/zhufengpeixun/zhufengketang202101-client 
张仁阳
https://gitee.com/zhufengpeixun/zhufengketang202101-client 
136****2778
谢谢 
136****2778
react怎么实现v-show的效果 这里用&&是v-if的效果吧 
青衣
差点找不到 
古德猫宁
有没有简历模板 



古德猫宁
vshow == opacity 
15:11
136****2778
Transition是库吗 
136****2778
引进来的？ 
136****2778
45行state是什么 
state是一个key entering entered exiting exited
E
<transition> 真香 
月下吴刚
transition 组件哪里来的？ 
Tony
这个类型 没有从 transition-group中暴露吗？ 
古德猫宁
state是transition调用的时候传过去的参数吧 叫啥都行吧 
15:18
136****2778
为啥state的类型是一个keyof 对象  
136****2778
keyof类型 
136****2778
state打印下看看 
136****2778
是不是entering1000ms后是entered？ 

是不是entering1000ms后是entered？是的 
15:24
136****2778
entering和enter间隔1s opacity值都是1 是的
136****2778
如何动画渐变的 

动画是怎么产生的？？？？？？

transition属性 
Tony
动画应该是exited 和entering的变化 
136****2778
那entered这个状态有啥用 在退出的时候有用
Tony
这个需要看transition group的源码。规定处世状态是exited 



useMemo 
15:50
136****2778
6和9不要重名把 
136****2778
讲完接口休息下？ 
Caption
是不要先把后台写下呀 
Tony
需要bear 
136****2778
bear 
136****2778
休息下》 
136****2778
？ 
月下吴刚
token 为什么要加 Bearer  ？ 
136****2778
token 为什么要加 Bearer  ？ 我也想问 虽然我一直看到这种情况 
罗畅
Authorization是请求头自定义的字段还是自带的关键字 
青衣
我猜 是jwt 权限规则吧，请求头token 前都需要bearer 拼接 
月下吴刚
自定义的吧，前后端约定的 
月下吴刚
请求拦截器里，if   token 没有呢？ 
16:15
Tony
为什么有三个状态 


罗畅
Authorization是请求头自定义的字段还是自带的关键字,看axios官网里有这个字段 
月下吴刚
平时跟后端调接口没有看到过 
Caption
后台那个服务的什么时候讲呀 
Tony
Authorization 这个好像是官方规定好的用于授权的字段 也没啥特殊用途 如果用别的自定义字段也是可以的 




这个T是函数的泛型还是函数参数的泛型? 
16:36
Tony
这里合并一下吧。一个 BaseResult格式 
16:43
136****2778
success红星啊 
136****2778
红线 
136****2778
thunk忘了。。。 
是 一个中间件，可以让你派发一个函数和action
青衣
actions里面定义了register，register里面又调用register 没看懂 
136****2778
这就是我刚刚说的不要重名 
Tony
这是啥意思 
Tony
传RegisterResult过去 
136****2778
老师thunk回顾下 是什么 
开心麻花
19行的函数啥时候执行的 
136****2778
29和30行的login不是一个东西 不要重名吧 
136****2778
32行泛型是修饰谁？ 
青衣
修饰login函数的吧 
136****2778
为什么要用泛型修饰32行的函数》 
136****2778
？ 



为什么要用泛型修饰32行的函数》 
136****2778
？ 
16:52
。。。
extends也可以把 
136****2778
为啥不能接interface extengds BaseResulet 
136****2778
我们有规范 这两种不能重名 
青衣
容易误解 
136****2778
泛型修饰函数是要干嘛 
16:58
136****2778
post2个T是要做什么 
Tony
如果这边是一个T会有什么问题 
136****2778
第二个T是返回类型的类型? 
Tony
编译会报错吗 
Vc
1 

是可以的
感觉ts没有那么灵活 不能把输入和输出联系起来 如果传入了一个result。那么result的类型不应该能推断出来吗。还要自己生命干什么 



加入ts，要多写一些类型，虽然代码更健壮，但感觉麻烦 
136****2778
为什么改了就要加第二个T 
136****2778
看看post源码的第二个t是啥 


能理解这块了 自己传入的T 覆盖了R的默认值 对对对
Tony
login的返回值应该是个R 



为什么改了就要加第二个T 
136****2778
看看post源码的第二个t是啥 
Tony
能理解这块了 自己传入的T 覆盖了R的默认值 
Tony
login的返回值应该是个R 
136****2778
1 
Tony
这个NavBar是不是也应该改造一下 看一下withRouter那边怎么写 不然每次都要穿个history过去 
17:16
136****2778
onfinish的参数怎么穿进去的 
136****2778
ant封装的吗 
17:21
FE扫地僧
是的 


d叫类型声明文件

d.ts和这个tsx有什么区别 
20:47
Tony
轮播图的地址也发一下吧 


为什么刚才上传图片的loading不用写type 
136****2778
那这个用啥要反仓库 
136****2778
这种各自用的 感觉反仓库没啥必要 


什么时候不用仓库，什么需要用到仓库
如果这个状态只会影响当前组件，不使用仓库
如果会影响很多组件，就得使用仓库，方便传递数据




136****2778
222是怎么算的 
136****2778
哦 头部和footer加起来222 
21:59
136****2778撤回了一条消息
136****2778撤回了一条消息
学习
页面的高度加滚动的高度=总高度 
22:06
136****2778
节流 
136****2778
防抖节流老是不太懂 老师说下 每次觉得懂了 过了一段时间又不动了 
136****2778
不懂了 
毕会斌
为什么要用两个感叹号 
136****2778
300太长了吧? 
毕会斌
防抖是执行操作的最后一次，节流是多长时间执行一次 
136****2778
不滚300才触发 有点长 
学习
转成布尔值 
古德猫宁
防抖跟节流差不多感觉 
136****2778
不用转成布尔值也没问题吧 


只要不为零 就进入if语句 
青衣
防抖是事件触发wait秒后再执行，
n秒内触发事件清除定时器，重新定时；节流是触发事件后每隔一段时间去执行 

timeout初始值是啥？ 


