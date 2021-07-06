import axios from 'axios';
export function loadInterceptor(){
    var myInterceptor = axios.interceptors.request.use(request=>
        {
        request.headers['tokenid'] = localStorage.tokenId;
        return request;
        }
        ,error=>{
        return Promise.reject(error);
        });



}


