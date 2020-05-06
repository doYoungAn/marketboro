type ProductFilterType = 'detail' | 'buy' | 'delivery' | 'inquiry';

interface IProduct {
    id: number;
    name: string;
    thumbnail: string;
    price: number;
    salePrice: number;
    vendor: {
        name: string;
        phone: string;
    },
    seller: {
        name: string,
        place: string,
        phone: string,
        companyRegistrationNumber: string,
        mailOrderReportNumber: string
    },
    content: {
        type: string;
        url: string;
    }[],
    delivery: {
        type: string;
        inquiry: string;
        orderClose: string;
        period: string;
        day: string;
        time: string;
        place: string;
        description: string;
        area: string;
    }
}
