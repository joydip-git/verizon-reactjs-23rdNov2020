import Axios from 'axios'
import { appURL } from '../constants/appURL';

export const axiosInstance = new Axios({
    baseURL: appURL,
    timeout: 10000
});
