import { stripText, plusifyText} from '../helpers'

describe('stripText', () => {
  test('strips text from spaces', () => {
    const str = ' 123 '
    const result = stripText(str)

    expect(result).toBe('123')
  })

  test('do not strip spaces from inside', () => {
    const str = ' 1 2 3 '
    const result = stripText(str)

    expect(result).toBe('1 2 3')
  })
})

describe('plusifyText', () => {

  test('changes spaces to pluses', () => {
    const str = '1 2 3'
    const result = plusifyText(str)

    expect(result).toBe('1+2+3')
  })

  test('changes every spaces to pluses', () => {
    const str = ' 1 2 '
    const result = plusifyText(str)

    expect(result).toBe('+1+2+')
  })

  test('will encode plus sign', () => {
    const str = 'this is a big +'
    const result = plusifyText(str)

    expect(result).toBe('this+is+a+big+%2b')
  })

})
