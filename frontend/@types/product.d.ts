type ProductFilterType = 'detail' | 'buy' | 'delivery' | 'inquiry';

interface IProduct {
    id: number;
    name: string;
    thumbnail: string;
    price: number;
    salePrice: number;
    vendor: {
        name: string;
    },
    content: {
        type: string;
        url: string;
    }[]
}
