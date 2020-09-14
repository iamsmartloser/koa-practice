const Router = require('koa-router');
const router = new Router();

router.get('/book/latest',(ctx,next)=>{
    console.log('request: book/latest---->',ctx);
    ctx.body={
        code:0,
        res:{}
    }
});

module.exports=router;