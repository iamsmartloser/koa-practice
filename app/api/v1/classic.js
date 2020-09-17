const Router = require('koa-router');
const router = new Router();

router.post('/v1/:id/classic/latest',(ctx,next)=>{
    // console.log('request: classic/latest---->：',ctx);
    const path=ctx.params;
    const query=ctx.request.query;
    const headers=ctx.request.header;
    const body=ctx.request.body;
    // 在koa中body不是很好获取，可以通过koa-bodyparser这个中间件来获取
    if(body.key){
        ctx.body=new global.HttpResponse({test:'123'})
    }else {
        throw new global.HttpException('错误')
    }
});

module.exports=router;