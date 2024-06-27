// Layouts
import { OnlyHeader, OnlyFooter } from '~/components/Layout';

// Pages
import Home from '~/pages/Home';
import Product from '~/pages/Product';
import Products from '~/pages/Products';
import Login from '~/pages/Customer/Login';
import Signup from '~/pages/Customer/Signup';
import Shop from '~/pages/Shop/Shops';
// import Product_Index from '~/pages/Product_Index';
import Test from '~/pages/Test';
import Upload from '~/pages/Upload';
import EditProfile from '~/pages/Customer/EditProfile';
import EditPhoneNumber from '~/pages/Customer/EditPhoneNumber';
import EditEmail from '~/pages/Customer/EditEmail';
import UpdatePassword from '~/pages/Customer/UpdatePassword';
import Address from '~/pages/Customer/Address/Address';
import CreateAddress from '~/pages/Customer/Address/CreateAddress';
import EditAddress from '~/pages/Customer/Address/EditAddress';
import ShopInformation from '~/pages/Seller/CreateShop/ShopInformation';
import ShopTransportation from '~/pages/Seller/CreateShop/ShopTransportation';
import ShopComplete from '~/pages/Seller/CreateShop/ShopComplete';
import ShopDone from '~/pages/Seller/CreateShop/ShopDone';
import EditUIShop from '~/pages/Seller/EditShop/EditUIShop';

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

    // http://localhost:3000/seller/new/information
    {
        path: '/seller/new/information',
        component: ShopInformation,
    },
    // http://localhost:3000/seller/new/transportation
    {
        path: '/seller/new/transportation',
        component: ShopTransportation,
    },
    // http://localhost:3000/seller/new/complete
    {
        path: '/seller/new/complete',
        component: ShopComplete,
    },
    // http://localhost:3000/seller/new/done
    {
        path: '/seller/new/done',
        component: ShopDone,
    },

    // http://localhost:3000/seller/edit/:id
    {
        path: '/seller/edit/:id',
        component: EditUIShop,
    },

    // http://localhost:3000/customer/edit/phone
    {
        path: '/customer/edit/phone',
        component: EditPhoneNumber,
    },
    // http://localhost:3000/customer/edit/email
    {
        path: '/customer/edit/email',
        component: EditEmail,
    },
    // http://localhost:3000/customer/edit/password
    {
        path: '/customer/edit/password',
        component: UpdatePassword,
    },
    // http://localhost:3000/customer/edit
    {
        path: '/customer/edit',
        component: EditProfile,
    },
    // http://localhost:3000/customer/address/create
    {
        path: '/customer/address/create',
        component: CreateAddress,
    },
    // http://localhost:3000/customer/address/edit
    {
        path: '/customer/address/edit/:id',
        component: EditAddress,
    },
    // http://localhost:3000/customer/address
    {
        path: '/customer/address',
        component: Address,
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
