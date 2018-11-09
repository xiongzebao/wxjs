import appConfig from './config.js'

let host = appConfig.server.host;

let api = {
  ApiComInfo: host + "/wxjs/public/users/completeinfo",
  ApiSign: host + "/wxjs/auth/sign/sign",
  ApiError: host + "/wxjs/public/error/error",
  ApiLogin: host + "/wxjs/public/users/login",
  ApiQueryAllSignInfo: host + "/wxjs/auth/sign/queryallsigninfo",
  ApiQueryLast3Days: host + "/wxjs/auth/sign/querylast3days",
  ApiSignQuery: host + "/wxjs/auth/sign/query",//
  ApiInfoQueryList: host + "/wxjs/public/info/querylist",//资讯列表
  ApiInfoQueryDetail: host + "/wxjs/public/info/query",//资讯详情
  ApiExtraInfo: host + "/wxjs/public/extra/get_extra_info",//动态加载页面
  ApiSwiperInfo: host + "/wxjs/public/extra/get_swiper_info",//动态加载页面
  ApiRankList: host + "/wxjs/auth/stat/get_stat_info",//获取统计排行榜信息
  ApiAddMsg: host + "/wxjs/auth/msg/add_msg",//获取统计排行榜信息
  ApiGetMsg: host + "/wxjs/auth/msg/get_msg",//获取统计排行榜信息
  ApiUpLoad: host + "/upload",//获取统计排行榜信息
  ApiModifyNickName: host + "/wxjs/auth/user/modifyNickName",
  ApiFeedBack: host + "/wxjs/auth/feedback/add_feedback",
  ApiGetLastUserInfo: host + "/wxjs/public/users/get_last_userinfo",
  ApiGetXinDe: host + "/wxjs/auth/stat/getXinde",

  ApiGetSignDetail: host + "/wxjs/auth/stat/get_sign_detail",
  ApiGetHomeSpirit: host + "/wxjs/auth/stat/get_home_spirit"
}

export default api;



