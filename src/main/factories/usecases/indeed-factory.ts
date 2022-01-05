import { IndeedUseCase } from '@/domain/usecases'
import { IndeedIntegration } from '@/data/usecases'

export const makeIndeed = (): IndeedUseCase => {
  return new IndeedIntegration()
}
