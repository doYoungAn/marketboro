import axios, { AxiosResponse } from 'axios';

interface IResponse {
    success: boolean;
    error?: any;
    businesses?: IBusiness[];
    vendors?: IVendor[];
    product?: IProduct;
    products?: IProduct[];
    plans?: IPlan[];
}

class ApiService {

    private get endPoint(): string {
        return 'http://localhost:3000';
    }

    public async getBusinesses(): Promise<IBusiness[]> {
        try {
            const response: AxiosResponse<IResponse> = await axios.get(`${this.endPoint}/api/v1/business`);
            if (response.data.success) {
                return response.data.businesses;
            } else {
                return Promise.reject(response.data.error);
            }
        } catch(e) {
            return Promise.reject(e);
        }
    }

    public async getVendors(businessId: number[]): Promise<IVendor[]> {
        try {
            const prefix: string = 'businessIds[]';
            const queryString: string = businessId.map((businessId, index) => index < 1 ? `?${prefix}=${businessId}` : `&${prefix}=${businessId}`).join('');
            const response: AxiosResponse<IResponse> = await axios.get(`${this.endPoint}/api/v1/vendor${queryString}`);
            if (response.data.success) {
                return response.data.vendors;
            } else {
                return Promise.reject(response.data.error);
            }
        } catch(e) {
            return Promise.reject(e);
        }
    }

    public async getProductById(productId: number): Promise<IProduct> {
        try {
            const response: AxiosResponse<IResponse> = await axios.get(`${this.endPoint}/api/v1/product/${productId}`);
            if (response.data.success) {
                return response.data.product;
            } else {
                return Promise.reject(response.data.error);
            }
        } catch(e) {
            return Promise.reject(e);
        }
    }

    public async getProducts(vendorId: number): Promise<IProduct[]> {
        try {
            const response: AxiosResponse<IResponse> = await axios.get(`${this.endPoint}/api/v1/product?vendorId=${vendorId}`);
            if (response.data.success) {
                return response.data.products;
            } else {
                return Promise.reject(response.data.error);
            }
        } catch(e) {
            return Promise.reject(e);
        }
    }

    public async getPlans(): Promise<IPlan[]> {
        try {
            const response: AxiosResponse<IResponse> = await axios.get(`${this.endPoint}/api/v1/plan`);
            if (response.data.success) {
                return response.data.plans;
            } else {
                return Promise.reject(response.data.error);
            }
        } catch(e) {
            return Promise.reject(e);
        }
    }

}

const apiService = new ApiService();

export default apiService;
