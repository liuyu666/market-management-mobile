import { TOKEN_NAME } from '@/configs/index.js'

export const isLogin = () => {
    return localStorage.getItem(TOKEN_NAME)
}