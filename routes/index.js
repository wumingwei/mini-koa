// ajax 服务路由集合
const { prefix } = require('../config');
const router = require('koa-router')({
  prefix,
});
const controllers = require('../controllers');

// demo 测试
router.get('/demo', controllers.demo);
router.post('/login', controllers.login);
router.post('/user', controllers.user);
router.post('/upload', controllers.upload);

module.exports = router;
