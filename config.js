/* eslint-disable */
const CONF = {
  serverHost: 'localhost',

  networkTimeout: 30000,
  port: '5757',
  prefix: '/weapp',
  // rootPathname: '',

  // 跨域白名单，不包含prefix前缀
  allowCORSWhiteList: ['/demo', '/login'],

  // 登录态有效期
  loginExpires: 7200,
};

module.exports = CONF;
