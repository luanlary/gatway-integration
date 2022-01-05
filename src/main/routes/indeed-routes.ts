import { adaptRoute } from '@/main/adapters'
import { makeIndeedController } from '@/main/factories'
import { auth } from '@/main/middlewares'

import { Router } from 'express'

export default (router: Router): void => {
  router.post('/indeed', auth, adaptRoute(makeIndeedController()))
}
