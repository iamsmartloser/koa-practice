const Router = require('koa-router')

// const {
//     User
// } = require('../../models/user')
import {test} from '../../../test'
const {
    UserService
} = require('../../service/user')
const router = new Router({
    prefix: '/v1/user'
});

const userService=new UserService();
//注册 新增数据 put get delete

router.post('/register', async (ctx) => {
    await userService.register(ctx);
});

// 登录，验证账号密码，生成token返回
router.post('/login', async (ctx) => {
    test()
    await userService.login(ctx)
});


module.exports = router;