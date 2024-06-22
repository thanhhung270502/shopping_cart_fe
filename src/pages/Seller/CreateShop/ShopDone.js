const { default: CreateShopComponent } = require('~/components/Shop/CreateShop');

const MainChild = () => {
    return <div>MainChild</div>;
};

const ShopDone = () => {
    return <CreateShopComponent state="done" mainChild={MainChild} />;
};

export default ShopDone;
