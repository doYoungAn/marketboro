type ProductFilterType = 'detail' | 'buy' | 'delivery' | 'inquiry';

interface IProduct {
    id: number;
    name: string;
    price: number;
    salePrice: number;
    vendorId: number;
}
