import paths from './paths'
import components from './components'
import schemas from './schemas'

export default {
  openapi: '3.0.0',
  info: {
    title: 'Gatway de Integração do Jobs',
    description: 'Essa é a documentação da API feita para servir de interface entre os demais Job Boards e o Jobs.',
    version: '1.0.0',
    contact: {
      name: 'Suqad Jobs',
      email: 'luan.lima@solides.com.br',
      url: 'https://gitlab.com/solides/backend/jobs-v2-back'
    },
    license: {
      name: 'Proprietary',
      url: 'https://solides.com.br/'
    }
  },
  externalDocs: {
    description: 'Link para documentação da integração Indeed',
    url: 'https://developer.indeed.com/docs/indeed-apply/enterprise-ats/#xml_job_feed'
  },
  servers: [{
    url: '/api',
    description: 'Servidor Principal'
  }],
  tags: [{
    name: 'Login',
    description: 'APIs relacionadas a Login'
  }, {
    name: 'Indeed',
    description: 'APIs relacionadas a Indeed'
  }],
  paths,
  schemas,
  components
}
