export interface IMaskUtils {
  formatter: (mask: string, value: string) => string

  formatMoney: (val: number) => string
}
