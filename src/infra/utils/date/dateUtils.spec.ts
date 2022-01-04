import { IDateUtils } from './interfaces/IDateUtils'
import { DateUtils } from './dateUtils'

interface SutType {
  sut: IDateUtils
}

const makeSut = (): SutType => {
  const sut = new DateUtils()

  return {
    sut
  }
}

describe('DateUtils Suit Test', () => {
  it('should return correct value when getTimestamp is called ', async () => {
    const { sut } = makeSut()

    const getTimestampReturn = sut.getTimestamp(new Date('2021-10-10'))

    expect(getTimestampReturn).toBeDefined()
    expect(getTimestampReturn).toEqual(1633834800000)
  })

  it('should return correct value when getTimestamp is called ', async () => {
    const { sut } = makeSut()

    const getTimestampReturn = sut.getTimestamp(new Date('2021-9-9'))

    expect(getTimestampReturn).toBeDefined()
    expect(getTimestampReturn).toEqual(1631167200000)
  })

  it('should return defined when   getDateFormat is called ', async () => {
    const { sut } = makeSut()

    const getTimestampReturn = sut.getDateFormat(new Date(), 'DD/mm/yyyy')

    expect(getTimestampReturn).toBeDefined()
  })
})
