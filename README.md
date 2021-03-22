# mini-server

基于 koa 实现的最简 node server

## 下载源码

你可以直接通过 git 将代码 clone 到本地，也可以点击[这里](https://github.com/wumingwei/mini-server/releases)下载。

```bash
git clone https://github.com/wumingwei/mini-server.git
```

## 开始使用

#### 安装依赖

```bash
npm i nodemon -g # 安装全局依赖
npm i            # 安装项目依赖
```

#### 启动项目

```bash
# 开发环境，监听文件变化自动重启，并会输出 debug 信息
npm start
```

- 示例代码部署目录：     `/data/release/node-weapp-demo`
- 运行示例的 Node 版本： `v8.1.0`
- Node 进程管理工具：    `pm2`

## 项目结构

```
koa-weapp-demo
├── README.md
├── app.js
├── controllers
│   ├── index.js
│   ├── login.js
│   ├── message.js
│   ├── tunnel.js
│   ├── upload.js
│   └── user.js
├── middlewares
│   └── response.js
├── config.js
├── package.json
├── process.json
├── nodemon.json
├── qcloud.js
└── routes
    └── index.js
```

`app.js`:          Demo 的主入口文件，Demo 使用 Koa 框架，在 `app.js` 创建一个 Koa 实例并响应请求。
`routes/index.js`: Demo 的路由定义文件
`controllers`:     存放 Demo 所有业务逻辑的目录，`index.js` 不需要修改，他会动态的将 `controllers` 文件夹下的目录结构映射成 modules 的 Object，例如 Demo 中的目录将会被映射成如下的结构：

```javascript
// index.js 输出
{
  demo: require('demo'),
  login: require('login'),
  user: require('user'),
  upload: require('upload'),
}
```

`config.js` 主要的配置如下：

```javascript
{
  serverHost: 'localhost',                 // 项目启动的地址
  port: '5757',                            // 项目启动的端口
  networkTimeout: 30000,                   // 请求超时设置
  prefix: '/weapp',                        // api前缀
  allowCORSWhiteList: ['/demo', '/login'], // 跨域白名单，不包含prefix前缀
  loginExpires: 7200,                      // 登录态有效期
}
```
