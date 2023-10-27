export const usePropsHelper = () => {
  const isNumber = (str) => {
    return /^\d+(\.\d+)?$/.test(str)
  }

  const propValue = (value, hasNotPx = false) => {
    if (typeof value == 'string' || typeof value == 'number') {
      return isNumber(value) && ! hasNotPx ? (value + 'px') : value
    }
  
    return isNumber(value) && ! hasNotPx ? (value + 'px') : value
  }

  return { isNumber, propValue }
}