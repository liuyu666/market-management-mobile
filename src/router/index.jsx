import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/index.jsx';
import About from '../pages/About/index.jsx';
import ProductEdit from '../pages/ProductEdit/index.jsx';
import ProductList from '../pages/ProductList/index.jsx';

// 你可以在这里导出Router组件，包含所有的路由配置  
const AppRouter = () => {
    console.log('root App Router=====')
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