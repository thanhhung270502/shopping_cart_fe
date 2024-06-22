const { default: CreateShopComponent } = require('~/components/Shop/CreateShop');

const MainChild = () => {
    return <div>MainChild</div>;
};

const ShopTransportation = () => {
    return <CreateShopComponent state="transportation" mainChild={MainChild} />;
};

export default ShopTransportation;
