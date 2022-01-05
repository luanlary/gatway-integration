import { IFileUtils } from './ifileUtils'
class FileUtilsStub implements IFileUtils {
  existsPath (path: string): boolean {
    return true
  }

  createFolder (path: string): void {
  }

  createFile (path: string, data: any): any {
    return ''
  }

  deleteFile (path: string): void {
  }

  async readFile (path: string): Promise<any> {
    return new Promise(resolve => resolve({}))
  }

  async readFileUtf8 (path: string): Promise<any> {
    return new Promise(resolve => resolve({}))
  }

  async readDirectory (dir: string): Promise<any> {
    return new Promise(resolve => resolve({}))
  }

  async writeFile (base64Data: string, pathFile: string): Promise<any> {
    return new Promise(resolve => resolve({}))
  }
}

export const makeFileUtils = (): IFileUtils => {
  return new FileUtilsStub()
}
