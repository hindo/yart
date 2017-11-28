export const stripText = (str) => {
  return str.replace(/^\s+|\s+$/g, '')
}

export const plusifyText = (str) => {
  return str.replace(/\+/g, '%2b').replace(/\s/g, '+')
}
