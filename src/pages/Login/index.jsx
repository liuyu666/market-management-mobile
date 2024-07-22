import React from 'react';
import { useNavigate } from "react-router-dom";
import { Form, Button, InputNumber, Input, Toast } from '@nutui/nutui-react'

import { login } from '@/services/login';
function Login () {
    let navigate = useNavigate();
    const submitForm = async ({ account, code }) => {
        try {
            await login({ account, code })
            navigate('/')
        } catch ({ msg }) {
            Toast.show({
                content: msg || '登录失败',
                icon: 'fail',
            })
        }
    }
    return <>
        <Form
            labelPosition="right"
            onFinish={submitForm}
            footer={
                <>
                    <Button nativeType="submit" block type="primary">
                        登录
                    </Button>
                </>
            }
        >
            <Form.Item
                required
                label="账号"
                name="account"
                rules={[
                    { max: 12, message: '请输入正确格式的手机号' },
                    { max: 11, message: '请输入正确格式的手机号' },
                    { required: true, message: '请输入手机号' }
                ]}
            >
                <Input
                    className="nut-input-text"
                    placeholder="请输入账号"
                    type="text"
                />
            </Form.Item>
            <Form.Item
                label="密码"
                name="code"
                rules={[
                    { max: 30, message: '密码不能超过30个字符' },
                    { required: true, message: '请输入密码' },
                ]}
            >
                <Input
                    className="nut-input-text"
                    placeholder="请输入密码"
                    type="password"
                />
            </Form.Item>
        </Form>
    </>
}  
  
export default Login;