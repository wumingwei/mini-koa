const debug = require('debug')('koa-weapp-demo');
const { logger } = require('../logger/index');
const { appNotFound } =require('../config');
const { errCode=0, errMsg='',resData={} } = appNotFound;

module.exports = async function (ctx, next) {
  try {
    await next();

    // 处理响应结果：若直接写入在 body 中，则不作处理；若 ctx.body 为空，则使用 state 作为响应
    ctx.body = ctx.body
      ? ctx.body
      : {
          errCode: ctx.state.errCode !== undefined ? ctx.state.errCode : errCode,
          errMsg: ctx.state.errMsg !== undefined ? ctx.state.errMsg : errMsg,
          data: ctx.state.data !== undefined ? ctx.state.data : resData,
        };
  } catch (e) {
    logger.error(e);
    debug('Catch Error: %o', e);

    ctx.status = 200;
    ctx.body = {
      errCode: -1,
      errMsg: e && e.message ? e.message : e.toString(),
      data:{}
    };
  }
};
