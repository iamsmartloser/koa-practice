
module.exports = {
    // prod
    environment:'dev',
    database:{
        dbName:'koa',
        host:'localhost',
        port:3306,
        user:'root',
        password:'',
    },
    security:{
        secretKey:"abcdefg",
        expiresIn:60*60*24*30,// 过期时间
    },
    wx:{
        appId:'wxa954bf263f23a7a6',
        appSecret:'134d70b05a5ec388b8137ac47adaeaca',
        loginUrl:'https://api.weixin.qq.com/sns/jscode2session?appid=%s&secret=%s&js_code=%s&grant_type=authorization_code'
    },
}