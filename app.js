const config = require('./config');
const Koa = require('koa2');
const app = new Koa();

const router = require('./routes');                    // 引入路由分发
const debug = require('debug')('koa-weapp-demo');
const { logger, accessLogger } = require('./logger');  // 引用日志系统
const response = require('./middlewares/response');
// const corsCallBack = require('./middlewares/cors'); // koa-cors实现
const corsCallBack = require('./middlewares/cors2');   // 手动设置跨域实现
const bodyParser = require('koa-bodyparser');

app.use(accessLogger());  // 使用logger中间件
app.use(corsCallBack);    // 使用跨域中间件
app.use(bodyParser());    // 解析请求体
app.use(response);        // 使用响应处理中间件
app.use(router.routes()); // 使用路由分发中间件

// 启动程序，监听端口
app.listen(config.port, () => debug(`listening on port ${config.port}`));
app.on('error', (err, ctx) => logger.error('server error', err));
