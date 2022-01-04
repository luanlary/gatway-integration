export interface IDateUtils {
  getTimestamp: (value: Date) => number | null

  getDateFormat: (timestamp: Date | number, format: string) => string | null

  formatDateToString: (val: Date | null) => string

  formatDate: (value: number, format: 0 | 1 | null) => string
}
