export const IndeedParamsSchema = {
  type: 'object',
  properties: {
    field_1: {
      type: 'string'
    },
    field_2: {
      type: 'string'
    }
  },
  required: ['field_1', 'field_2']
}
