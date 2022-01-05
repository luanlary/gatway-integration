import { IMaskUtils } from './interfaces/imaksUtils'
import { StringMask } from 'string-mask'

export class MaskUtils implements IMaskUtils {
  formatter (mask: string, value: string): string {
    try {
      const formatter = new StringMask(mask)
      return formatter.apply(value)
    } catch (err) {
      return ''
    }
  }

  formatMoney (val: number): string {
    try {
      return (val.toFixed(2).replace('.', ','))
    } catch (err) {
      return ''
    }
  }
}
