import { SampleModel } from '@/domain/models'

export interface IndeedUseCase {
  doSomething: (data: SamplePayload.Params) => Promise<SamplePayload.Result>
}

export namespace SamplePayload {
  export type Params = {
    Field_1: string
    Field_2: string
  }

  export type Result = SampleModel
}
