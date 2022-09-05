import mockRequest from '../mockRequests';

//获取作者信息
export const reqAuthorInfoList = ()=> mockRequest({url:'/authorInfo',method:'get'});
