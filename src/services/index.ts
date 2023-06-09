import axios, { AxiosRequestConfig } from 'axios';

export const API_URL = 'http://192.168.18.5:8080'
//export const API_URL = 'http://192.168.15.181:8080'
//export const API_URL = 'http://10.32.3.134:8080'
//export const API_URL="http://env-5664618.jelastic.saveincloud.net"

export function fetchTopList(){
    return axios (`${API_URL}/prodtop`) 
}

export const fetchCategory = async () => {
    const url = `${API_URL}/categoriesproducts`
    const response = await fetch(url);
    return await response.json();
}

export function fetchManuf () {
    return axios (`${API_URL}/manufacturers`)
}

export const requestBackend = (config: AxiosRequestConfig) => {

    return axios({ ...config, baseURL: API_URL });
  };