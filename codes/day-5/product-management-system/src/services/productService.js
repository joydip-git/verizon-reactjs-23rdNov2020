import { axiosInstance } from "../Axios/Axios"

export const getProductRecords = () => {
    //Promise<--resolve, reject, error
    //Promise<AxiosResponse<[]>>
    return axiosInstance.get();
}

export const getProductRecordById = (productId) => {
    //Promise<--resolve, reject, error
    //Promise<AxiosResponse<{}>>
    return axiosInstance.get(`/${productId}`);
}

export const addProductRecord = (product) => {
    //Promise<AxiosResponse<{ message:'added successfully', data:[]}>>
    return axiosInstance.post('', product);
}

export const updateProductRecord = (product) => {
    //Promise<AxiosResponse<{ message:'updated successfully', data:[]}>>
    return axiosInstance.put('', product);
}

export const deletProductRecordById = (productId) => {
    //Promise<AxiosResponse<{ message:'updated successfully', data:[]}>>
    return axiosInstance.delete(`/${productId}`);
}