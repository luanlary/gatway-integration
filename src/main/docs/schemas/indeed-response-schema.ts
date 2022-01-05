export const indeedResponseSchema = {
  type: 'object',
  properties: {
    Result_1: {
      type: 'string'
    },
    Result_2: {
      type: 'string'
    },
    Result_3: {
      type: 'number'
    },
    Result_4: {
      type: 'number'
    },
    Result_5: {
      type: 'boolean'
    }
  },
  required: ['Result_1', 'Result_2', 'Result_3', 'Result_4']
}
