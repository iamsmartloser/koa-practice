const Router = require('koa-router')

const {
    User
} = require('../../models/user')

const router = new Router({
    prefix: '/v1/user'
})

const {
    RegisterValidator,
} = require('../../validators/user')

//注册 新增数据 put get delete

router.post('/register', async (ctx) => {
    const v = await new RegisterValidator().validate(ctx)
    const user = ctx.request.body;
    const r = await User.create(user)
    ctx.body = new global.HttpResponse()
});

router.post('/login', async (ctx) => {
    // const v = await new RegisterValidator().validate(ctx)
    const user = ctx.request.body;
    const r = await User.create(user)
    ctx.body = new global.HttpResponse({})
})


module.exports = router