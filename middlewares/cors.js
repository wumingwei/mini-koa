const cors = require('koa2-cors');
const routerPrefix = require('../config').prefix || '';
const corsWhiteList = require('../config').allowCORSWhiteList || [];

// 定义cors中间件跨域回调
const corsCallBack = cors({
  origin: (ctx) => {
    // 允许跨域
    if (corsWhiteList.indexOf(ctx.url.replace(routerPrefix, '')) > -1) {
      return ctx.headers.origin;
    }
    return '*'; // 不允许跨域
  },
  credentials: true,
});

module.exports = corsCallBack;
