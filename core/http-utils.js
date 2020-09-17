const httpStatus={
    STATUS_200:{code:200,message:'服务器成功返回请求的数据'},
    STATUS_201:{code:201,message:'新建或修改数据成功'},
    STATUS_202:{code:202,message:'一个请求已经进入后台排队（异步任务）'},
    STATUS_204:{code:204,message:'删除数据成功'},
    STATUS_400:{code:400,message:'发出的请求有错误，服务器没有进行新建或修改数据的操作'},
    STATUS_401:{code:401,message:'用户没有权限（令牌、用户名、密码错误）'},
    STATUS_403:{code:403,message:'用户得到授权，但是访问是被禁止的'},
    STATUS_404:{code:404,message:'发出的请求针对的是不存在的记录，服务器没有进行操作'},
    STATUS_406:{code:406,message:'请求的格式不可得'},
    STATUS_410:{code:410,message:'请求的资源被永久删除，且不会再得到'},
    STATUS_422:{code:422,message:'当创建一个对象时，发生一个验证错'},
    STATUS_502:{code:502,message:'网关错误'},
    STATUS_503:{code:503,message:'服务不可用，服务器暂时过载或维护'},
    STATUS_504:{code:504,message:'网关超时'},
    STATUS_500:{code:500,message:'抱歉，服务器出错！'},

    // 自定义接口接口返回码
    STATUS_10000:{code:10000,message:'非法的请求参数'},
    STATUS_10001:{code:10001,message:'用户未授权'},
    STATUS_10002:{code:10002,message:'登录过期'},
    STATUS_10003:{code:10003,message:'应用没有被授权，无法使用所指定的grant_type'},
    STATUS_10004:{code:10004,message:'grant_type字段超过定义范围'},
    STATUS_10005:{code:10005,message:'scope信息无效或超出范围'},
    STATUS_10006:{code:10006,message:'提供的更新令牌已过期'},
    STATUS_10007:{code:10007,message:'redirect_uri字段与注册应用时所填写的不匹配'},
    STATUS_10008:{code:10008,message:'response_type参数值超过定义范围'},
    STATUS_10009:{code:10009,message:'用户或授权服务器拒绝授予数据访问权限'},

}

class HttpResponse {

    constructor(data=null,code=0,message=''){
        this.code=code;
        this.meaage=message;
        this.data=data
    }

}

class HttpException extends Error{
    constructor(message=httpStatus.STATUS_500.message,code=httpStatus.STATUS_500.code, status=httpStatus.STATUS_500.code){
        super();
        this.code = code;
        this.status = status;
        this.message = message;
    }
}

module.exports={
    httpStatus,
    HttpResponse,
    HttpException,
};