interface IVendor {
    id: number;
    name: string;
    description: string;
    phone: string;
    businesses: {
        id: number;
        name: string;
    }[]
}
