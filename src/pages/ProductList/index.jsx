import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { Table, Button, Toast, NavBar } from '@nutui/nutui-react'
import { Star, ArrowLeft } from '@nutui/icons-react'

const Demo7 = () => {
    let navigate = useNavigate();

    function handleGoBack () {
        // 使用-1作为参数来模拟后退按钮的行为
        navigate(-1);
    }

    const [columns] = useState([
        {
            title: '姓名',
            key: 'name',
            align: 'center',
        },
        {
            title: '性别',
            key: 'gender',
        },
        {
            title: '学历',
            key: 'record',
        },
        {
            title: '操作',
            key: 'render',
        },
    ])

    const [data] = useState([
        {
            name: 'Tom',
            gender: '男',
            record: '小学',
            render: () => {
                return (
                    <Button
                        onClick={() => Toast.show('hello')}
                        size="small"
                        type="primary"
                    >
                        <div>Hello</div>
                    </Button>
                )
            },
        },
        {
            name: 'Lucy',
            gender: '女',
            record: '本科',
            render: () => {
                return <Star height="14px" width="14px" />
            },
        },
        {
            name: 'Jack',
            gender: '男',
            record: '高中',
            render: () => {
                return (
                    <Button
                        type="success"
                        size="small"
                        onClick={() => window.open('https://www.jd.com')}
                    >
                        <div>跳转到京东</div>
                    </Button>
                )
            },
        },
    ])

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
        <Table columns={columns} data={data} />
    </>
}
export default Demo7
