export interface IHttpCaller {
  callerMethod: (method: 'GET' | 'POST', baseURL: string, url: string, data?: any, headers?: any) => Promise<any>
}
