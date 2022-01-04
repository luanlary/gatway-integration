import { FileUtils } from './fileUtils'
import fs from 'fs'

interface SutType {
  sut: FileUtils
}

const makeSut = (): SutType => {
  const sut = new FileUtils()

  return {
    sut
  }
}

describe('FileUtils Suit Test', () => {
  it('should call the correct method when existsPath is called', async () => {
    const { sut } = makeSut()

    const spy = jest.spyOn(fs, 'existsSync')

    sut.existsPath('./fileUtils/test.md')

    expect(spy).toHaveBeenCalledWith('./fileUtils/test.md')
  })

  it('should call the correct method when createFile is called', async () => {
    const { sut } = makeSut()

    const spy = jest.spyOn(fs, 'writeFileSync').mockReturnValueOnce()

    sut.createFile('./fileUtils/test.md', '')

    expect(spy).toHaveBeenCalledWith('./fileUtils/test.md', '')
  })

  it('should call the correct method when deleteFile is called', async () => {
    const { sut } = makeSut()

    const spy = jest.spyOn(fs, 'unlinkSync').mockReturnValueOnce()

    sut.deleteFile('./fileUtils/test.md')

    expect(spy).toHaveBeenCalledWith('./fileUtils/test.md')
  })
})
