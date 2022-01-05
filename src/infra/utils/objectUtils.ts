export const ObjectUtils = {
  findKeyEnum (enumName: any, key: string): string | null {
    const result = enumName.enums.find(function (element) {
      if (element.value === key) {
        return element
      } else {
        return false
      }
    })
    return typeof result !== 'undefined' || result ? result.key : null
  }
}
