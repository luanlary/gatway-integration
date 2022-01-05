import { ITextRecording } from './interfaces/ItextRecording'

import { TextRecording } from './textRecording'

import iconv from 'iconv-lite'

interface SutType {
  sut: ITextRecording
}

const makeSut = (): SutType => {
  const sut = new TextRecording()

  return {
    sut
  }
}

describe('TextRecording Suit Test', () => {
  it('should call encode with the correct params ', async () => {
    const { sut } = makeSut()

    const iconvSpy = jest.spyOn(iconv, 'encode').mockReturnValueOnce(Buffer.from(''))

    sut.encode([''], 'utf-16be')

    expect(iconvSpy).toHaveBeenCalled()
  })
})
