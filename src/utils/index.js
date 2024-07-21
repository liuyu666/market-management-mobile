import { TOKEN_NAME } from '@/configs/index.js'

export const isLogin = () => {
    console.log(8888, TOKEN_NAME);
    return localStorage.getItem(TOKEN_NAME)
}