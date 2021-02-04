import axios from './';
export function getSliders(){
    return axios.get('/slider/list');
}

export function getLessons(
    currentCategory:string,//当前的分类
    offset:number, //偏移量
    limit:number //每页的条数
){
    return axios.get(`/lesson/list?category=${currentCategory}&offset=${offset}&limit=${limit}`);
}