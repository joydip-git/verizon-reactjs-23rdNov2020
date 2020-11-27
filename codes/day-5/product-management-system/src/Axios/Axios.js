import Axios from 'axios'
import { appURL } from '../constants/appURL';

export const axiosInstance = Axios.create({
    baseURL: appURL,
    timeout: 10000
});
