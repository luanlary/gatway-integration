export const IndeedPath = {
  post: {
    security: [{
      apiKeyAuth: []
    }],
    tags: ['Indeed'],
    summary: 'Endpoint para Integração com o Indeed',
    description: 'Essa rota só pode ser executada por **Serviços autenticados**',
    requestBody: {
      required: true,
      content: {
        'application/json': {
          schema: {
            $ref: '#/schemas/indeedParams'
          }
        }
      }
    },
    responses: {
      200: {
        description: 'Sucesso',
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/indeedResponse'
            }
          }
        }
      },
      204: {
        description: 'Sucesso, mas sem dados para exibir'
      },
      403: {
        $ref: '#/components/forbidden'
      },
      404: {
        $ref: '#/components/notFound'
      },
      500: {
        $ref: '#/components/serverError'
      }
    }
  }
}
