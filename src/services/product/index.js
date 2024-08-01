
import Api from '@/api'

export const addProduct = (data) => {
    return new Promise(async (resolve, reject) => {
        await Api.post('/product/item', data)
            .then(data => {
                const { data: resData, msg, code } = data || {}
                console.log('resData: ', resData);
                // switch (code) {
                //     case 200:
                //         resolve({
                //             msg
                //         })
                //         break;

                //     default:
                //         reject({
                //             msg
                //         })
                //         break;
                // }
            })
            .catch(error => {
                console.error('error', error);
                reject({
                    msg: '登录失败'
                })
            });
    })

}