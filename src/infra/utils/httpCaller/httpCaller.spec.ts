import { HttpCaller } from './httpCaller'
import axios from 'axios'

import MockAdapter from 'axios-mock-adapter'

interface SutType {
  sut: HttpCaller
}

const makeSut = (): SutType => {
  const sut = new HttpCaller()

  return {
    sut
  }
}

describe('HttpCaller Suit Test', () => {
  it('should call axios with the correct params ', async () => {
    const { sut } = makeSut()
    const mock = new MockAdapter(axios)
    const data = { response: true }
    mock.onGet('test_url').reply(200, data)

    const returnedValule = await sut.callerMethod('GET', 'base_url', 'test_url')

    expect(returnedValule).toBeDefined()
  })
})
