//对于axios进行二次封装
import axios from "axios";

//axios.create方法执行,其实返回一个axios和request一样的
let requests = axios.create({
    //基础路径,发请求URL携带api【发现:真实服务器接口都携带/api】
    baseURL: "/api", //超时的设置
    timeout: 5000
});

//请求拦截器:将来项目中【N个请求】，只要发请求,会触发请求拦截器!!!
requests.interceptors.request.use(config => {
    //config:配置对象,包含request中的所有配置信息，如：url、method、data、headers
    return config;
});


//响应拦截器：请求数据返回会执行
requests.interceptors.response.use((res) => {
    return res.data;
}, (error) => {
    return Promise.reject(new Error('failed'));
});

//最后需要暴露:暴露的是添加新的功能的axios,即为requests
export default requests;
