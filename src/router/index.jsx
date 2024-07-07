import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/index.jsx';
import About from '../pages/About/index.jsx';
import ProductEdit from '../pages/ProductEdit/index.jsx';
import ProductList from '../pages/ProductList/index.jsx';


// {
//     key: "uploadProduct",
//     text: "上传商品",
// },
// {
//     key: "productList",
//     text: "商品列表",
// },
// {
//     key: "shopInfo",
//     text: "店铺信息",
// },
// {
//     key: "more",
//     text: "更多",
//     type: "toast",
// },
// 你可以在这里导出Router组件，包含所有的路由配置  
const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/uploadProduct" element={<ProductEdit />} />
                <Route path="/productList" element={<ProductList />} />
                {/* 你可以在这里继续添加更多的路由 */}
            </Routes>
        </Router>
    );
};

export default AppRouter;