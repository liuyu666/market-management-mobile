import React from "react";
import { useNavigate } from "react-router-dom";
import { Grid, Toast } from "@nutui/nutui-react";
import { Image } from "@nutui/icons-react";
import { isLogin } from "../../../utils";

const routeList = [
    {
        key: "uploadProduct",
        text: "上传商品",
    },
    {
        key: "productList",
        text: "商品列表",
    },
    {
        key: "shopInfo",
        text: "店铺信息",
    },
    {
        key: "more",
        text: "更多",
        type: "toast",
    },
];
const Demo1 = () => {
    let navigate = useNavigate();

    function handleClick ({ key, type = 'jump' }) {
        const login = isLogin();
        if (!login) {
            Toast.show("请先登录");
            setTimeout(() => {
                navigate('Login');
            }, 500);
            return;
        }
        if (type == 'toast') {
            Toast.show("敬请期待～");
        } else if (type == "jump") {
          navigate(key);
        }
    }
    return (
        <Grid>
            {routeList.map(route => {
                return (
                  <Grid.Item
                    onClick={() => handleClick(route)}
                    text={route.text}
                  >
                    <Image />
                  </Grid.Item>
                );
            })}

        </Grid>
    );
};
export default Demo1;
