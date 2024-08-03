import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { Table, Pagination, Button, Image, NavBar } from '@nutui/nutui-react'
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
            render: (data) => {
                return <Image src={data.images.split(";")[0]} width="20" height="20" fit="cover" />
            }
        },
        {
            title: '操作',
            fixed: 'right',
            key: 'operate',
        },
    ])
    const [productList, setProductList] = useState([])
    // const [total, setTotal] = useState(0)
    // const [currentPage, setCurrentPage] = useState(1)

    const editProduct = (product) => {
        return
        product.id && navigate(`/editProduct/${product.id}`)
    }

    const formatProductList = (data) => {
        setProductList(data.map(item => {
            item.operate = () => {
                return (
                    <Button
                        type="success"
                        size="small"
                        onClick={() => editProduct(item)}
                    >
                        <div>编辑</div>
                    </Button>
                )
            }
            return item
        }))
    }

    const fetchList = () => {
        Api.get('/product/list')
            .then(res => {
                formatProductList(res.data && res.data && res.data.list);
                setTotal(res.data.total || 0)
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }

    const pageChange = (v) => {
        setCurrentPage(v)
        fetchList
    }

    useEffect(() => {
        fetchList()
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
        {/* <Pagination
            value={currentPage}
            total={total}
            pageSize={1}
            mode="simple"
            onChange={pageChange}
        /> */}
    </>
}
export default ProductList
