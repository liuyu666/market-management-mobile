
import Api from '@/api'
import { TOKEN_NAME } from "@/configs";

export const login = ({ account, code }) => {
    return new Promise(async (resolve, reject) => {
        await Api.post('/admin/login', {
            account,
            code
        })
            .then(data => {
                const { data: resData, msg, code } = data || {}
                switch (code) {
                    case 200:
                        localStorage.setItem(TOKEN_NAME, resData.token)
                        resolve({
                            msg
                        })
                        break;
                
                    default:
                        reject({
                            msg
                        })
                        break;
                }
            })
            .catch(error => {
                console.error('error', error);
                reject({
                    msg: '登录失败'
                })
            });
    })
    
}