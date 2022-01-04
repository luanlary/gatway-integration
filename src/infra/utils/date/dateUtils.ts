/* eslint-disable */

import { IDateUtils } from './interfaces/IDateUtils'

import dateFormat from 'dateformat'
// eslint-disable-file

// eslint-disable-next-line @typescript-eslint/no-var-requires, @typescript-eslint/no-unused-vars
const momentTimezone = require('moment-timezone')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const moment = require('moment')

export class DateUtils implements IDateUtils {
  /**
   * @todo chamar a lib DateFormat
   *
   * @param {(number | Date)} timestamp
   * @param {string} format
   * @return {*}  {(string | null)}
   * @memberof DateUtils
   */
  getDateFormat (timestamp: number | Date, format: string): string | null {
    try {
      return dateFormat(new Date(timestamp), format)
    } catch (err) {
      return null
    }
  }

  getTimestamp (value: Date): number | null {
    if (!value) {
      return null
    }
    const dateObj = new Date(value.valueOf() + value.getTimezoneOffset() * 60000)

    let date = `${dateObj.getDate()}`
    let month = `${dateObj.getMonth() + 1}`
    const year = `${dateObj.getFullYear()}`
    let hours = `${dateObj.getHours()}`
    let minutes = `${dateObj.getMinutes()}`
    let seconds = `${dateObj.getSeconds()}`

    if (Number(date) < 10) date = `0${date}`
    if (Number(month) < 10) month = `0${month}`
    if (Number(hours) < 10) hours = `0${hours}`
    if (Number(minutes) < 10) minutes = `0${minutes}`
    if (Number(seconds) < 10) seconds = `0${seconds}`

    return moment.tz(`${year}-${month}-${date} ${hours}:${minutes}:${seconds}`, 'America/Sao_Paulo').valueOf()
  }

  formatDateToString (val: Date): string {
    try {
      const ano = Number(val.getFullYear())
      const mes = Number(val.getMonth()) + 1
      const dia = Number(val.getDate())

      return `${dia < 10 ? '0' + dia : dia}/${mes < 10 ? '0' + mes : mes}/${ano}`
    } catch (err) {
      return ''
    }
  }

  /**
   * Formatar uma timespan em data
   *
   * @param {Valor timespan} value
   * @param {Formatos: 0 DDMMYYYY, 1 YYYY-MM-DD, Padrão dd/MM/yyyyy } format
   */
  formatDate (value: number, format: 0 | 1 | null): string {
    const today = new Date(value)
    let dd: string | number = today.getDate()
    let mm: string | number = today.getMonth() + 1 // January is 0
    const yyyy = today.getFullYear()
    let mask = ''

    if (dd < 10) {
      dd = '0' + dd
    }
    if (mm < 10) {
      mm = '0' + mm
    }

    if (format == 0) {
      mask = dd + '' + mm + '' + yyyy
    } else if (format == 1) {
      mask = yyyy + '-' + mm + '-' + dd
    } else {
      mask = dd + '/' + mm + '/' + yyyy
    }

    return mask
  }
}
