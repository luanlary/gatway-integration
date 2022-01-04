import { isEmpty } from 'lodash'
import { IArrayUtils } from './interfaces/iarrayUtils'
export class ArrayUtils implements IArrayUtils {
  checkEmpty (value: any): boolean {
    return isEmpty(value)
  }
}
