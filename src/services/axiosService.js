import axios from 'axios';

import {baseUrl} from "../configs";

const axiosService = axios.create ({
    baseURL: baseUrl,
    timeout: 3000
});

export {axiosService};
