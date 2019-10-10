var getApiHost = 'http://transit.scsiren.com';
var API = {
    //----------------------------------------------获取TOKEN-----------------------------------
    URL_POST_SETTOKEN: getApiHost + '/set/token',
    // 上传图片
    URL_POST_UPLOADFILE: getApiHost + '/app/file',
    // ----------------------------------------------短信验证----------------------------------
    URL_POST_SENDCODE: getApiHost + '/send/code',
    // ----------------------------------------------登录-----------------------------------
    URL_POST_USERLOGIN: getApiHost + '/api/user/login',
    // 退出登录
    URL_POST_LOGINOUT : getApiHost + '/login/out',
    // 商家信息完善
    URL_POST_VERIFYCOMPANY: getApiHost + '/company/verify',
    // ----------------------------------------------个人中心-----------------------------------
    // 个人资料
    URL_GET_PERSONALINFO: getApiHost + '/personal/info',
    // 修改头像
    URL_POST_CHANGEAVATAR: getApiHost + '/personal/update/avatar',
    // 修改密码
    URL_POST_CHANGEPWD: getApiHost + '/personal/update/password',
    // 更换手机号第一步
    URL_POST_CHANGEPHONEONE: getApiHost + '/personal/update/mobile/first',
    // 更换手机号第二步
    URL_POST_CHANGEPHONETWO: getApiHost + '/personal/update/mobile/second',
    // 修改公司信息
    URL_POST_EDITCOMPANY: getApiHost + '/company/edit',
    //----------------------------------------------汽车大厅-----------------------------------
    // 最新新闻
    URL_GET_NEWS: getApiHost + '/news'
}
export default {
    API: API
}
