
import Api from '@/api'

export const addProduct = (data) => {
    return new Promise(async (resolve, reject) => {
        await Api.post('/product/item', data)
            .then(data => {
                resolve(data)
            })
            .catch(error => {
                console.error('error', error);
                reject({
                    msg: '失败'
                })
            });
    })

}