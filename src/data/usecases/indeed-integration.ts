import { SampleModel } from '@/domain/models'
import { IndeedUseCase, SamplePayload } from '@/domain/usecases'

export class IndeedIntegration implements IndeedUseCase {
  doSomething: (data: SamplePayload.Params) => Promise<SampleModel>
}
