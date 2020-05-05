interface IVendor {
    id: number;
    name: string;
    description: string;
    businesses: {
        id: number;
        name: string;
    }[]
}
