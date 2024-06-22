const { default: CreateShopComponent } = require('~/components/Shop/CreateShop');

const MainChild = () => {
    return <div>MainChild</div>;
};

const ShopComplete = () => {
    return <CreateShopComponent state="complete" mainChild={MainChild} />;
};

export default ShopComplete;
