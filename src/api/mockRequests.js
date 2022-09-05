// 对axios的二次封装
import axios from "axios";
// 引入进度条
import nprogres from 'nprogress';
// 引入进度条样式
import "nprogress/nprogress.css"

// 1.利用axios对象方法create,去创建一个axios实例
// 2. request就是axios,只不过稍微配置一下
let requests =  axios.create({
    // 配置对象
    // 基础路径，发请求的时候，路径中出现api
    baseURL:"/mock",
    // 代表请求超时时间
    timeout:5000,
});

// 请求拦截器
requests.interceptors.request.use(config=>{
    // 进度条开始
    nprogres.start();
    return config
})
// 响应拦截器
requests.interceptors.response.use((res)=>{
    // 进度条结束
    nprogres.done();
    return res.data;
},(error)=>{
    return Promise.reject(new Error('faile'));
})

//最后需要暴露:暴露的是添加新的功能的axios,即为requests
export default requests;
