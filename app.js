const Koa = require('koa');

const InitManager=require('./core/init');
const app = new Koa();
InitManager.initCore(app);
// 应用程序中间件

app.listen(3000);