import axios, { AxiosResponse } from 'axios';

class ApiService {

    private get endPoint(): string {
        return 'http://localhost:3000';
    }

    public async getBusinesses(): Promise<IBusiness[]> {
        try {
            const response: AxiosResponse<{ success: boolean, businesses?: IBusiness[], error?: any }> = await axios.get(`${this.endPoint}/api/v1/business`);
            if (response.data.success) {
                return response.data.businesses;
            } else {
                return Promise.reject(response.data.error);
            }
        } catch(e) {
            return Promise.reject(e);
        }
    }

    public async getVendors(): Promise<IVendor[]> {
        try {
            const response: AxiosResponse<{ success: boolean, vendors: IVendor[], error?: any }> = await axios.get(`${this.endPoint}/api/v1/vendor`);
            if (response.data.success) {
                return response.data.vendors;
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
