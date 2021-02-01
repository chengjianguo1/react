let axios = require('axios');
interface Params{
    title:string;
}
let result:Params = await axios.get<Params,Params>('http://localhost:8899/api/sliders');




export interface AxiosResponse<Params>  {
    data: Params;
    status: number;
    statusText: string;
    headers: any;
    request?: any;
  }

  post<T = any, R = AxiosResponse<T>>
  T传的是响应体
  R是响应对象，响应对明的data属性是响应体