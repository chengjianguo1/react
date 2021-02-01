typescript
eslint


moduelResolution是哪一块配置？ 
150****8093
tsconfig.json 
学习
哦哦 
136****2778
eslint不是 -D吗 
136****2778
开发依赖 
136****2778
-ext是什么意 
136****2778
思 
136****2778
刚才命令react拼错了 倒是react引入是红线 
罗畅
ctl+s保存时，怎么配置可以自动修复不符eslint规则的语法，运行 npm run lint太麻烦了 
青衣
vscode里面setting 里面可以配置onSave 
开心麻花
根元素是body吗 
青衣
保存时格式化代码 
Tony
根元素是html 
开心麻花
哦 
月下吴刚
开发中用 flexible.js 
青衣
这个以前用，现在不推荐用了 
青衣
都推荐vw/vh,视口布局 
月下吴刚
那个用起来还可以啊 
えっど
vw vh和rem配合使用，常用吗 
136****2778
文字大小不适合用视口布局吧 
月下吴刚
文字 可以用 px 也可以用 rem  
开心麻花
类型定义文件有什么用？ 



讲的慢一点，我都没看清安装的啥 
青衣
就知道哈士奇 乱咬人如果不符合要求，就咬回去了
Tony
husky和commitlint是啥关系 
husky是用来写git钩子的,他可以在git命令特定的时机执行commitlint检查提交信息是否规范
Tony
没看懂 
小行星
工作中git配置常用吗？ 
青衣
哈士奇应该就是配置git hooks的 
青衣
但是其他插件都是干嘛的，还比较陌生 
136****2778
feat哪去了 
136****2778
刚才不是有加feat 
136****2778
 为啥更新日志没有feat的字眼 
E
changelog 是根据 glt log生成的吗  是的

开心麻花
这里讲的有点快 
月下吴刚
这些可以作为 通用项目配置吗？比如 vue 项目中 可以的
月下吴刚
除了 react 相关的 
136****2778
可以 我们公司就是这么用的 开源项
Tony
好像根本是husky 先提供了一个git的声明周期 然后在不同的声明周期有不同的插件 
古德猫宁
是的 
青衣
这个git hoos 是可以通用的 
张润钊-2625
我记得 console.log 不能提交的呀。。 
月下吴刚
用了 commit fix  就不要 setting 了，只能二选一是吗？ 
可以一起用
只不过配了autosave,自动修复。提高 的时候就不会报错。刚才是想报错给大家看



一直在用这个 
FE扫地僧
console.log 不能提交 需要配置的  
136****2778
console.log 不能提交 需要配置的  怎么配置 
136****2778
我一直想在生产模式打包中吧console删掉 写个插件
Tony
这估计你要找找有没有现成的plugin 没有需要自己写 
月下吴刚
提交 规范可以自动处理不？ 如 fix, feat 
136****2778
哎 我以后提问题把问题提全了  
月下吴刚
去掉 console 可以在 压缩时处理 
月下吴刚
uglify 插件中加配置 
136****2778
刚才git cz不是要短描述和长描述 为啥 commit只要写一个描述就过关了？ 
有些字段必填 的，有些是选 填 的 长描述可有可无
E
能不能成功之后，自动生成changeLog 啊  
。。。
休息休息？ 
学习
Cz-conventional-changelog会不会和@commit/config-conventional定制的规则冲突？ 规则也可以自定义 



Package.Json.  那几个配置config  commitlint husky 能再理一下吗 
月下吴刚
用了  setting 后，就要关掉 vscode 的 autoSave 吧 
青衣
生产模式去掉debugger/console.log，是可以写webpack插件去掉，还是什么？ 可以的






这种动画演示效果怎么做的？ 自己操作录制屏
张仁阳
https://img.zhufengpeixun.com/tabs.png 
张仁阳
http://img.zhufengpeixun.cn/zhufengketang_day1.gif 
11:19
136****2778
没有child自闭合标签是不是性能比较高 经常看到老师改成自闭合 如果没有儿子就自闭合
Tony
跟性能没关系 标签中间没内容就不用双标签 
青衣
这个eslint 可以配置 
136****2778
那为啥还要浪费时间改 
Tony
编程习惯。 
150****8093
max-width写成750，在pc模式下看是不是会有问题 不支持PC
移动端用的
安凯凯
写10rem 或者100vw， 要不然在pad上不是全屏。 
青衣
自闭合看起来简洁，理论上说双标签符合规范 
136****2778
刚才不是说要rem？ 
钱炜华
刚刚那个main哪里来的，得写个组件吧 
青衣
main是原生标签 
136****2778
main是原生标签 
136****2778
html5 
钱炜华
哦哦 
11:30
FE扫地僧撤回了一条消息
136****2778
propswithchildren点进去自看下 
Tony
这一步操作 所以Prop的结果就有了route属性和children吗 是的
11:41
Tony
所有有了redux。也不再用usestate和useReducer了。所有东西全部交给redux的数据流就好了。也没有什么优势劣势 
开心麻花
routerMiddleware是干啥的 有点忘了
它是一个中间件，可以让你通过派发动作的方式跳转路径
store.dispatch({type:'CALL_HISTORY_METHOD',payload:{method:'push',args:['/profile']}});
 history.push('/profile');
Tony
tabs里的link是不是错了 
月下吴刚
路由懒加载可以加进来不？ 
Tony
footer最后怎么右侧有留白 


青衣
上午用到的PropsWithChildren，官网文档没写，怎么知道的呀，去哪里找的呢 
E
老师 今天早上 项目初始化配置的文档 是在哪里安  
E
就是配置husky 那些 