import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/index.jsx';
import About from '../pages/About/index.jsx';
import ProductEdit from '../pages/ProductEdit/index.jsx';
import ProductList from '../pages/ProductList/index.jsx';
import Login from '../pages/Login/index.jsx';

// 你可以在这里导出Router组件，包含所有的路由配置  
const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/addProduct" element={<ProductEdit />} />
                <Route path="/editProduct/:pid" element={<ProductEdit />} />
                <Route path="/productList" element={<ProductList />} />
                <Route path="/login" element={<Login />} />
                {/* 你可以在这里继续添加更多的路由 */}
            </Routes>
        </Router>
    );
};

export default AppRouter;