/* eslint-disable */
const CONF = {
  // 其他配置 ...
  serverHost: 'localhost',

  networkTimeout: 30000,
  port: '5757',
  prefix: '/weapp',
  rootPathname: '',

  // 跨域白名单，不包含prefix前缀
  allowCORSWhiteList: ['/demo', '/login'],
};

module.exports = CONF;
