const util = require('util')
const bcrypt = require('bcryptjs')
const axios = require('axios')
const {User} = require('../models/user');
const { generateToken } = require('../../core/util')
const {
    RegisterValidator,
} = require('../validators/user')

const {
    LoginType,
} = require('../utils/enum')

const {
    HttpException,
} = require('../../core/http-utils')

const {Auth} = require('../../middlewares/auth')

class UserService {
    getDao() {
        return User
    }

    // 注册
     register=async(ctx)=>{
        await new RegisterValidator().validate(ctx)
        const user = ctx.request.body;
        user.password=user.password1
        const r = await User.create(user);
        ctx.body = new global.HttpResponse()
    }

    // 登录
    async login (ctx) {
        const params=ctx.request.body;
        let token;
        // 登录类型
        switch (params.type) {
            case LoginType.USER_EMAIL:
                const user=await this._verifyPassword(params.account,params.password)
                token =generateToken(user.id, Auth.USER);
                break;
            case LoginType.USER_MINI_PROGRAM:
                token = this.miniProgramLoginVerify(params.account)
                break
            default:
                throw new HttpException('没有相应的处理函数')
                break;
        }

        ctx.body = {
            token
        }
    }

    // 小程序登录验证
    async miniProgramLoginVerify (code) {
        const url = util.format(global.config.wx.loginUrl,
            global.config.wx.appId,
            global.config.wx.appSecret,
            code)
        const result = await axios.get(url)
        if (result.status !== 200) {
            throw new HttpException('openid获取失败')
        }
        const errcode = result.data.errcode
        const errmsg = result.data.errmsg
        if (errcode){
            throw new HttpException('openid获取失败:'+errmsg)
        }

        let user = await User.getUserByOpenid(result.data.openid)
        if(!user){
            user = await User.registerByOpenid(result.data.openid)
        }
        return generateToken(user.id, Auth.USER)
    }

    async getUserByOpenid(openid){
        const user = await User.findOne({
            where:{
                openid
            }
        })
        return user
    }

    async registerByOpenid(openid) {
        return await User.create({
            openid
        })
    }

    async _verifyPassword(email, plainPassword){
        const user = await User.findOne({
            where: {
                email
            }
        })
        if(!user){
            throw HttpException('账户不存在')
        }
        // user.toJSON();
        // 明文与密文对比
        const correct = bcrypt.compareSync(
            plainPassword, user.password)
        if(!correct){
            throw HttpException('密码不正确')
        }
        return user
    }
}

module.exports = {UserService};
