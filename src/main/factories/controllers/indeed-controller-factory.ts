import { makeIndeedValidation, makeLogControllerDecorator } from '@/main/factories'
import { Controller } from '@/presentation/protocols'
import { IndeedController } from '@/presentation/controllers'
import { makeIndeed } from '@/main/factories/usecases/indeed-factory'

export const makeIndeedController = (): Controller => {
  const controller = new IndeedController(makeIndeedValidation(), makeIndeed())
  return makeLogControllerDecorator(controller)
}
