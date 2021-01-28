这个工作中用的多吗 
路由就两种 约定式，一种是配置式
约定 pages目录下面的文件都是路由组件
配置式 routes = [{path,component,exact}];
136****2778
不推荐使用啥？ dva-cli roadhog现在不再推荐使用了
136****2778
刚才走神了 
1178747250
babel-plugin-import 这个还在用
136****2778
现在是在写啥？ 
1178747250
es是啥 esmodules import export 模块化的写法，只有它才可以支持tree shaking 
umi用的非常多 antdesignpro 内置的umi

//tree shaking和按需加载是一回事吗？ 
//按需加载包含内容很多 tree shaking相关性
//tree 打包的时候不打包用不到的代码

umi 内置了redux没 
umi+dva没有强关联
可以使用umi，但是不使用dva
但是dva内置了redux

antdesignpro用的多吗工作中 
青衣
tree shaking 是优化引入但是不用的东西 
1178747250
项目打包后特别大，怎么优化呀 
学习
不是说webpack5对tree shaking支持的更多了吗 记不清了 是的更强大了 
青衣
umi 主要是解决路由使用问题吗 简化了路由配置
Tony
umi 和 cra是啥区别 
cra不包含路由




那做项目 直接上umi 要比cra快多了吧 
1178747250
tony工作中用什么 
Tony
我之前就是用的cra 自己一个人 没上antdpro或者umi 
Tony
antdesignpro里也是前端写死的
路由都是前端自己定义写死的 权限也是前端获取后端的字段再去渲染 
1178747250
好的 
开心麻花
路由使用有啥问题 umi解决了什么问题 
136****2778
好像可以直接 import './index.less' 
136****2778
我项目中就是这么写的 
青衣
这个是把class 看作变量引入 css modules CSS模 块化解决类名重复问题


重点学习配置式路由


个是把class 看作变量引入 
21:51
136****2778
什么是解决类名重复 
青衣
css 类名重复问题呢 
Tony
redirect我记得要配合switch使用吧 
青衣
引入umi， 项目打包之类的都已经实现了吗 
青衣
这里路由可以一步加载吗 
青衣
异步 
青衣
习惯了配置路由，比较好维护 
22:00
小行星
循环不就好了？ 
22:03
136****2778
递归实现嵌套路由？ 
Tony
component就写了第一层路由了 
Tony
没办法嵌套渲染了 
136****2778
routerProps是谁？ 
136****2778
8行的routerProps是怎么传进来的？  
1178747250
那还是只渲染了一层啊 
学习
7行传的 
136****2778
7行哪有变量叫routerProps？ 

