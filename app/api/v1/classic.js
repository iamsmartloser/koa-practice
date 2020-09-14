const Router = require('koa-router');
const router = new Router();

router.get('/classic/latest',(ctx,next)=>{
    console.log('request: classic/latest---->',ctx);
    ctx.body={
        code:0,
        res:{}
    }
});

module.exports=router;