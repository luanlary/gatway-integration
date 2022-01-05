import { MongoHelper } from '@/infra/db'
import { setupApp } from '@/main/config/app'

import { Collection } from 'mongodb'
import { hash } from 'bcrypt'
import { Express } from 'express'
import request from 'supertest'

let accountCollection: Collection
let app: Express

describe('Login Routes', () => {
  beforeAll(async () => {
    app = await setupApp()
    await MongoHelper.connect(process.env.MONGO_URL)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  beforeEach(async () => {
    accountCollection = MongoHelper.getCollection('accounts')
    await accountCollection.deleteMany({})
  })

  describe('POST /signup', () => {
    test('Should return 200 on signup', async () => {
      await request(app)
        .post('/api/signup')
        .send({
          name: 'Indeed',
          email: 'luan.lima@solides.com.br',
          password: 'nalucdmsn#',
          passwordConfirmation: 'nalucdmsn#'
        })
        .expect(200)
      await request(app)
        .post('/api/signup')
        .send({
          name: 'Indeed',
          email: 'luan.lima@solides.com.br',
          password: 'nalucdmsn#',
          passwordConfirmation: 'nalucdmsn#'
        })
        .expect(403)
    })
  })

  describe('POST /login', () => {
    test('Should return 200 on login', async () => {
      const password = await hash('nalucdmsn#', 12)
      await accountCollection.insertOne({
        name: 'Indeed',
        email: 'luan.lima@solides.com.br',
        password
      })
      await request(app)
        .post('/api/login')
        .send({
          email: 'luan.lima@solides.com.br',
          password: 'nalucdmsn#'
        })
        .expect(200)
    })

    test('Should return 401 on login', async () => {
      await request(app)
        .post('/api/login')
        .send({
          email: 'luan.lima@solides.com.br',
          password: 'nalucdmsn#'
        })
        .expect(401)
    })
  })
})
