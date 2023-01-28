import axios from 'axios';

import {baseUrl} from "../configs";

const axiosService = axios.create ({
    baseURL: baseUrl,
    timeout: 1000
});

export {axiosService};
