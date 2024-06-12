// Layouts
import { OnlyHeader } from '~/components/Layout';

// Pages
import Home from '~/pages/Home';
import Product from '~/pages/Product';
import Products from '~/pages/Products';
import Login from '~/pages/Sessions/Login';
import Signup from '~/pages/Sessions/Signup';
import Shop from '~/pages/Shop';
// import Product_Index from '~/pages/Product_Index';
import Test from '~/pages/Test';
import Upload from '~/pages/Upload';

// Không cần đăng nhập vẫn vào được
const publicRoutes = [
    // http://localhost:3000
    {
        path: '/',
        component: Home,
    },
    // http://localhost:3000/products
    {
        path: '/products',
        component: Products,
    },
    // http://localhost:3000/login
    {
        path: '/login',
        component: Login,
    },
    // http://localhost:3000/signup
    {
        path: '/signup',
        component: Signup,
    },
    // http://localhost:3000/shops/:short_name
    {
        path: '/shops/:short_name',
        component: Shop,
    },
    // http://localhost:3000/products/1
    {
        path: '/products/:id',
        component: Product,
    },
    // http://localhost:3000/test
    {
        path: '/test',
        component: Test,
        layout: OnlyHeader,
    },
    // http://localhost:3000/upload
    {
        path: '/upload',
        component: Upload,
        layout: null,
    },
];

// Sau khi đăng nhập với vào được
const privateRoutes = [];

export { publicRoutes, privateRoutes };
