import axios from 'axios';

import {baseUrl} from "../configs/endPoints";

const axiosService = axios.create ({baseUrl});

export {axiosService};
