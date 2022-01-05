import { IFileUtils } from './interfaces/ifileUtils'
import fs from 'fs'

export class FileUtils implements IFileUtils {
  existsPath (path: string): boolean {
    return fs.existsSync(path)
  }

  createFolder (path: string): void {
    try {
      fs.mkdirSync(path)
    } catch (err) {
      throw new Error(`Criar diretório no servidor: ${err.message}`)
    }
  }

  createFile (path: string, data: any): any {
    try {
      return fs.writeFileSync(path, data)
    } catch (err) {
      throw new Error(`Criando arquivo no servidor: ${err.message}`)
    }
  }

  deleteFile (path: string): void {
    try {
      return fs.unlinkSync(path)
    } catch (err) {
      throw new Error(`Removendo arquivo no servidor: ${err.message}`)
    }
  }

  async readFile (path: string): Promise<any> {
    return new Promise((resolve, reject) => {
      fs.readFile(path, (err, data) => {
        if (err) {
          reject(new Error(`Erro na Leitura de arquivo no servidor: ${err.message}`))
        } else {
          resolve(data)
        }
      })
    })
  }

  async readFileUtf8 (path: string): Promise<any> {
    return new Promise((resolve, reject) => {
      fs.readFile(path, 'utf-8', (err, data) => {
        if (err) {
          reject(new Error(`Erro na Leitura de arquivo no servidor: ${err.message}`))
        } else {
          resolve(data)
        }
      })
    })
  }

  async readDirectory (dir: string): Promise<any> {
    return new Promise((resolve, reject) => {
      // função bloqueante.
      fs.readdir(dir, (err, data) => {
        if (err) {
          reject(new Error(`Erro na Leitura do Diretório no servidor: ${err.message}`))
        } else {
          resolve(data)
        }
      })
    })
  }

  async writeFile (base64Data: string, pathFile: string): Promise<any> {
    return new Promise((resolve, reject) => {
      fs.writeFile(pathFile, base64Data, 'base64', () => {
        resolve({})
      })
    })
  }
}
