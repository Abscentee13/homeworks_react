import axios from 'axios';

import {baseUrl} from "../confygs";

const axiosService = axios.create ({baseUrl});

export {axiosService};
