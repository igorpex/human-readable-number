module.exports = function toReadable(number) {
    let onesDict = { 0: '', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine', 10: 'ten', 11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen', 15: 'fifteen', 16: 'sixteen', 17: 'seventeen', 18: 'eighteen', 19: 'nineteen' }
    let dozensDict = { 0: '', 2: 'twenty', 3: 'thirty', 4: 'forty', 5: 'fifty', 6: 'sixty', 7: 'seventy', 8: 'eighty', 9: 'ninety' };
    let hundredsDict = { 0: '', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine' };

    if (number === 0) {
        return 'zero';
    }

    //Check length of number
    // let numStr = number.toString();
    // let numLength = numStr.length;
    let numLength = (Math.floor(Math.log10(number)) + 1);

    let result = '';
    for (let i = numLength; i > 0; i--) {
        if (i === 3) {
            let hundreds = Math.floor(number / 100);
            if (hundreds) {
                result = result + hundredsDict[hundreds] + ' hundred';
            }
            number = number - hundreds * 100;
        }

        if (i === 2) {
            let dozens = Math.floor(number / 10);
            if (dozens !== 0) {
                if (result) result += ' ';
                if (number < 20) {
                    result = result + onesDict[number];
                    return result
                }
                result = result + dozensDict[dozens];
            }
        }

        if (i === 1) {
            let ones = number % 10;
            if (ones !== 0) {
                if (result) result += ' ';
                result = result + onesDict[ones]
            };
        }
    }
    return result
}


