import { IHttpCaller } from './interfaces/ihttpCaller'
import axios, { AxiosRequestHeaders } from 'axios'

export class HttpCaller implements IHttpCaller {
  async callerMethod (method: 'GET' | 'POST', baseURL: string, url: string, data?: any, headers?: AxiosRequestHeaders): Promise<any> {
    return await axios({
      method: method,
      baseURL: baseURL,
      url: url,
      headers: headers,
      data: data
    })
  }
}
