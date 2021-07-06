import axios from 'axios';
import {config} from './config';

// for by pass interceptor
const axiosObject = axios.create();

export const ajaxOperations = {
    post(url, data){
        return axios.post(url, data);
    },
    postNoIntercept(url, data){
        return axiosObject.post(url, data);
    },
    fetch(url){
        return axios.get(url);
    }
}