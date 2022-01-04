export interface IFileUtils {
  existsPath: (path: string) => boolean

  createFolder: (path: string) => void

  createFile: (path: string, data: any) => any

  deleteFile: (path: string) => void

  readFile: (path: string) => Promise<any>

  readFileUtf8: (path: string) => Promise<any>

  readDirectory: (dir: string) => Promise<any>

  writeFile: (base64Data: string, pathFile: string) => Promise<any>
}
