import { ValidationComposite, RequiredFieldValidation } from '@/validation/validators'
import { Validation } from '@/presentation/protocols'

export const makeIndeedValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['field_1', 'field_2']) {
    validations.push(new RequiredFieldValidation(field))
  }
  return new ValidationComposite(validations)
}
