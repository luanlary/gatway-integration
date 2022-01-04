import { IHttpCaller } from './interfaces/ihttpCaller'

class HttpCallerStub implements IHttpCaller {
  async callerMethod (method: 'GET' | 'POST', baseURL: string, url: string, data: any, headers: any): Promise<any> {
    return new Promise(resolve => resolve({}))
  }
}

export const makeHttpCallerStub = (): IHttpCaller => {
  return new HttpCallerStub()
}
