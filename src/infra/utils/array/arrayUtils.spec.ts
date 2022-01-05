import { IArrayUtils } from './interfaces/iarrayUtils'
import { ArrayUtils } from './arrayUtils'

interface SutType {
  sut: IArrayUtils
}

const makeSut = (): SutType => {
  const sut = new ArrayUtils()

  return {
    sut
  }
}

describe('ArrayUtils Suit Test', () => {
  it('should return correct value when checkEmpty is called ', async () => {
    const { sut } = makeSut()

    const getTimestampReturn = sut.checkEmpty({ id: 1 })

    expect(getTimestampReturn).toBeDefined()
  })
})
