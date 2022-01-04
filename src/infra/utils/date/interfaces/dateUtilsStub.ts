import { IDateUtils } from './IDateUtils'

class DateUtilsStub implements IDateUtils {
  formatDate (value: number, format: 0 | 1 | null): string {
    return ''
  }

  formatDateToString (val: Date): string {
    return ''
  }

  getTimestamp (value: Date): number | null {
    return 123
  }

  getDateFormat (timestamp: number | Date, format: string): string | null {
    return ''
  }
}

export const makeDateUtils = (): IDateUtils => {
  return new DateUtilsStub()
}
