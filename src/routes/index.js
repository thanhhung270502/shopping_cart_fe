// Layouts
import { OnlyHeader, OnlyFooter } from '~/components/Layout';

// Pages
import Home from '~/pages/Home';
import Product from '~/pages/Product';
import Products from '~/pages/Products';
import Login from '~/pages/Users/Login';
import Signup from '~/pages/Users/Signup';
import Shop from '~/pages/Shop';
// import Product_Index from '~/pages/Product_Index';
import Test from '~/pages/Test';
import Upload from '~/pages/Upload';
import EditProfile from '~/pages/Users/EditProfile';
import EditPhoneNumber from '~/pages/Users/EditPhoneNumber';

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
        layout: OnlyFooter,
    },
    // http://localhost:3000/signup
    {
        path: '/signup',
        component: Signup,
        layout: OnlyFooter,
    },
    // http://localhost:3000/users/edit/phone
    {
        path: '/users/edit/phone',
        component: EditPhoneNumber,
    },
    // http://localhost:3000/users/edit
    {
        path: '/users/edit',
        component: EditProfile,
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
