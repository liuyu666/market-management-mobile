import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { Table, Button, Toast, NavBar } from '@nutui/nutui-react'
import { Star, ArrowLeft } from '@nutui/icons-react'

import Api from '../../api'

const ProductList = () => {
    let navigate = useNavigate();

    function handleGoBack () {
        // 使用-1作为参数来模拟后退按钮的行为
        navigate(-1);
    }

    const [columns] = useState([
        {
            title: '名称',
            key: 'title',
            align: 'center',
        },
        {
            title: '价格',
            key: 'price',
        },
        {
            title: '图片',
            key: 'images',
        },
        {
            title: '操作',
            fixed: 'right',
            key: 'render',
        },
    ])
    const [productList, setProductList] = useState([])

    const formatProductList = (data) => {
        setProductList(data.map(item => {
            item.operate = (item) => {
                return (
                    <Button
                        type="success"
                        size="small"
                        onClick={() => window.open('https://www.jd.com')}
                    >
                        <div>跳转到京东</div>
                    </Button>
                )
            }
            return item
        }))
    }
    
    useEffect(() => {
        Api.get('/product/list')
            .then(res => {
                formatProductList(res.data && res.data && res.data.list)
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }, [])
    


    return <>
        <NavBar
            back={
                <>
                    <ArrowLeft />
                    返回
                </>
            }
            onBackClick={handleGoBack}
        >
            商品列表
        </NavBar>
        <Table columns={columns} style={{ height: 500 }} data={productList} />
    </>
}
export default ProductList
