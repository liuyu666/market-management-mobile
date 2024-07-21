import React from 'react';
import { Form, Button, InputNumber, Input, TextArea } from '@nutui/nutui-react'

import Api from '../../api'
function Login() {  
    // Api.get('/admin/login')  
    //     .then(users => {  
    //         console.log(users);  
    //     })  
    //     .catch(error => {  
    //         console.error('There was an error!', error);  
    //     }); 
    const submitForm = ({ account, code }) => {
        Api.post('/admin/login', {
            account,
            code
        })  
            .then(users => {
                console.log(111,users);
            })
            .catch(error => {
                console.error('There was an error!', error);
            }); 
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