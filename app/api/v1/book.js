const Router = require('koa-router');
const router = new Router();

router.get('/',(ctx,next)=>{
    console.log('request: book/latest---->',ctx);
    ctx.body={
        code:0,
        res:'首页'
    }
});

router.get('/book/latest',(ctx,next)=>{
    console.log('request: book/latest---->',ctx);
    ctx.body={
        code:0,
        res:{}
    }
});

module.exports=router;