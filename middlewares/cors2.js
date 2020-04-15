const routerPrefix = require('../config').prefix || '';
const corsWhiteList = require('../config').allowCORSWhiteList || [];

module.exports = async (ctx, next) => {
  // 判断是配置了跨域白名单
  if (corsWhiteList.indexOf(ctx.url.replace(routerPrefix, '')) > -1) {
    // 手动设置跨域
    ctx.set('Access-Control-Allow-Origin', ctx.headers.origin);
    ctx.set('Access-Control-Allow-Credentials', true);
    ctx.set('Access-Control-Request-Method', 'PUT,POST,GET,DELETE,OPTIONS');
    ctx.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

    // 对于请求预检的处理
    if (ctx.method === 'OPTIONS') {
      ctx.status = 204;
      return;
    }
  }
  // 下一个中间件
  await next();
};
