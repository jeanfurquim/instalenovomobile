import axios from 'axios';

export const API_URL = 'http://192.168.1.13:8080'
//export const API_URL = 'http://10.32.3.159:8080'
//export const API_URL="http://env-5664618.jelastic.saveincloud.net"

export function fetchTopList(){
    return axios (`${API_URL}/prodtop`) 
}