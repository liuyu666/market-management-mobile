import axios from 'axios';
import { TOKEN_NAME } from "@/configs";

// 创建axios实例  
const instance = axios.create({
    baseURL: 'http://liuyu666.cn/', // 基础URL  
    timeout: 5000, // 请求超时时间  
    headers: {}, // 默认请求头  
});

// 请求拦截器  
instance.interceptors.request.use(
    config => {
        // 在发送请求之前做些什么  
        // 例如，你可以在这里添加token到headers中  
        const token = localStorage.getItem(TOKEN_NAME);
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    error => {
        // 对请求错误做些什么  
        return Promise.reject(error);
    }
);

// 响应拦截器  
instance.interceptors.response.use(
    response => {
        // 对响应数据做点什么  
        // 例如，你可以在这里根据状态码判断是否需要重定向或抛出错误  
        if (response.status === 200) {
            return response.data; // 只返回数据部分  
        } else {
            return Promise.reject(new Error('Error ' + response.status));
        }
    },
    error => {
        // 对响应错误做点什么  
        if (error.response && error.response.status === 401) {
            // 处理未授权问题，如跳转到登录页面  
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);

// 导出axios实例  
export default instance;