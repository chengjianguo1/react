import dva from 'dva';
import './index.css';

// 1. 初始化
const app = dva();

// 4. 定义路径
app.router(require('./router').default);

// 5. 启动渲染
app.start('#root');
