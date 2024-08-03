import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
    Form,
    Input,
    InputNumber,
    Cell,
    Picker,
    Uploader,
    Button,
    Toast,
    NavBar,
} from "@nutui/nutui-react";
import {
    ArrowLeft
} from "@nutui/icons-react";

import { addProduct } from "@/services/product";

const ProductEdit = () => {
    let navigate = useNavigate();

    function handleGoBack () {
        // 使用-1作为参数来模拟后退按钮的行为
        navigate(-1);
    }
    
    const {pid} = useParams()
    console.log('pid: ', pid);

    const [form] = Form.useForm()

    // todo 后端返回
    const unitOptions = [
        { value: 1, text: '斤' },
        { value: 2, text: 'g' },
        { value: 3, text: 'kg' },
        { value: 4, text: '件' },
        { value: 5, text: '个' },
        { value: 6, text: '套' }
    ]
    const submitFailed = (error) => {
        Toast.show({ content: JSON.stringify(error), icon: "fail" });
    };

    const submitSucceed = async (values = {}) => {
        const title = values.title;
        const price = values.price;
        const inventory = values.inventory;
        const images = values.images.map(({ url }) => url).join(';');

        // todo 提交到后端
        await addProduct({
            title,
            price,
            inventory,
            images,
        })
        Toast.show({ content: JSON.stringify(values), icon: "success" });
    };

    const handleUploadSuccess = ({ responseText }) => {
        const res = JSON.parse(responseText);
        const { imageUrl } = res.data || {};

        const images = form.getFieldValue('images')
        images.push({
            name: imageUrl.split('/').pop(),
            url: imageUrl,
            status: 'success',
            type: 'image',
        })
        form.setFieldsValue({
            images
        })
    };

    const handleDeleteFile = (file) => {
        const images = form.getFieldValue('images')
        form.setFieldsValue({
            images: images.filter(({name}) => name !== file.name)
        })
    };

    return (
        <>
            <NavBar
                back={
                    <>
                        <ArrowLeft />
                        返回
                    </>
                }
                onBackClick={handleGoBack}
            >
                {pid ? "编辑商品": "增加商品"}
            </NavBar>
            <Form
                form={form}
                style={{ "--nutui-form-item-label-width": "120px" }}
                footer={
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            width: "100%",
                        }}
                    >
                        <Button nativeType="submit" type="primary">
                            提交
                        </Button>
                    </div>
                }
                onFinish={(values) => submitSucceed(values)}
                onFinishFailed={(values, errors) => submitFailed(errors)}
            >
                <Form.Item label="商品名称" name="title">
                    <Input placeholder="请输入商品名称" />
                </Form.Item>
                <Form.Item label="价格" name="price">
                    <Input placeholder="请输入商品价格" />
                </Form.Item>

                {/* <Form.Item
                    label="单位"
                    name="unit"
                    trigger="onConfirm"
                    getValueFromEvent={(...args) => args[1]}
                    onClick={(event, ref) => {
                        ref.open();
                    }}
                >
                    <Picker options={[unitOptions]}>
                        {(value) => {
    
                            return (
                                <Cell
                                    style={{
                                        padding: 0,
                                        "--nutui-cell-divider-border-bottom": "0",
                                    }}
                                    className="nutui-cell--clickable"
                                    title={
                                        value.length
                                            ? unitOptions.filter((po) => po.value === value[0])[0]
                                                ?.text
                                            : "请选择"
                                    }
                                    extra={<ArrowRight />}
                                    align="center"
                                />
                            );
                        }}
                    </Picker>
                </Form.Item> */}
                <Form.Item label="库存" name="inventory">
                    <InputNumber defaultValue={1} step={1} digits={0} />
                </Form.Item>
                <Form.Item
                    label="商品图片"
                    name="images"
                    initialValue={[]}
                >
                    <Uploader multiple maxCount="3" onDelete={handleDeleteFile} onSuccess={handleUploadSuccess} name="image" url="http://liuyu666.cn/common/upload" />
                </Form.Item>
            </Form>
        </>
    );
};

export default ProductEdit;
