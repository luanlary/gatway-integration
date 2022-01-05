import {
  accountSchema,
  loginParamsSchema,
  errorSchema,
  signUpParamsSchema,
  IndeedParamsSchema,
  indeedResponseSchema

} from './schemas/'

export default {
  account: accountSchema,
  loginParams: loginParamsSchema,
  signUpParams: signUpParamsSchema,
  error: errorSchema,
  indeedParams: IndeedParamsSchema,
  indeedResponse: indeedResponseSchema
}
