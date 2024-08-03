
import Api from '@/api'

export const addProduct = (data) => {
    return new Promise(async (resolve, reject) => {
        await Api.post('/product/item', data)
            .then(data => {
                const { code, msg } = data
                if (code !== 0) {
                    reject({
                        msg
                    })
                }
                resolve(data)
            })
            .catch(error => {
                console.error('error', error);
                reject({
                    msg: '添加商品失败'
                })
            });
    })

}