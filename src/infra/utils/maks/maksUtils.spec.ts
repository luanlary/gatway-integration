import { IMaskUtils } from './interfaces/imaksUtils'
import { MaskUtils } from './maksUtils'

interface SutType {
  sut: IMaskUtils
}

const makeSut = (): SutType => {
  const sut = new MaskUtils()

  return {
    sut
  }
}

describe('MaskUtils Suit Test', () => {
  it('should return correct value when formatMoney is called ', async () => {
    const { sut } = makeSut()

    const getTimestampReturn = sut.formatMoney(100)

    expect(getTimestampReturn).toBeDefined()
  })

  it('should return correct value when formatter is called ', async () => {
    const { sut } = makeSut()

    const returnedValue = sut.formatter('00.000.000/0000-00', '11111111111111')

    expect(returnedValue).toBeDefined()
  })
})
