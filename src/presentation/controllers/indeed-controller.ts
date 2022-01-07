import { Controller, HttpResponse, Validation } from '@/presentation/protocols'
import { badRequest, serverError, noContent } from '@/presentation/helpers'
import { IndeedUseCase } from '@/domain/usecases'

export class IndeedController implements Controller {
  constructor (
    private readonly validation: Validation,
    private readonly indeed: IndeedUseCase
  ) {}

  async handle (request: IndeedController.Request): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(request)
      if (error) {
        return badRequest(error)
      }
      await this.indeed.doSomething({
        ...request
      })
      return noContent()
    } catch (error) {
      return serverError(error)
    }
  }
}

export namespace IndeedController {
  export type Request = {
    Field_1: string
    Field_2: string
    Field_3: string
  }
}
