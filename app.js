require('@babel/register');
const Koa = require('koa');
const parser = require('koa-bodyparser'); // 解析参数的body
const InitManager=require('./core/init');
const catchError = require('./middlewares/exception');

const app = new Koa();
app.use(catchError);
app.use(parser());//注册
process.cwd();
InitManager.initCore(app);
// 应用程序中间件

app.listen(3000);