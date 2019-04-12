const numberValues = {
    1: 'I',
    5: 'V',
    10: 'X',
    50: 'L',
    100: 'C',
    500: 'D',
    1000: 'M'
}

const toRoman = (number) => {
    if (number <= 0) {
        return ''
    } else {
        const firstNum = parseInt(number.toString()[0])
        const numLength = number.toString().length
        if (firstNum === 9) {
            const first = 10 ** (numLength - 1)
            const second = 10 ** numLength
            return `${numberValues[first]}${numberValues[second]}${toRoman(number + first - second)}`
        } else if (firstNum > 4) {
            const val = 5 * (10 ** (numLength - 1))
            return `${numberValues[val]}${toRoman(number - val)}`
        } else if (firstNum > 3) {
            const first = 10 ** (numLength - 1)
            const second = 5 * (10 ** (numLength - 1))
            return `${numberValues[first]}${numberValues[second]}${toRoman(number + first - second)}`
        } else {
            const val = 10 ** (numLength - 1)
            return `${numberValues[val]}${toRoman(number - val)}`
        }
    }
}

export { toRoman }