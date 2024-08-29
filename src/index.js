module.exports = function toReadable(number) {
    const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const teens = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const hundreds = 'hundred';

    if (number === 0) return 'zero';

    let result = '';

    if (Math.floor(number / 100) > 0) {
        result += ones[Math.floor(number / 100)] + ' ' + hundreds;
        number %= 100;
        if (number > 0) result += ' ';
    }

    if (number > 10 && number < 20) {
        result += teens[number - 11];
    } else {
        if (Math.floor(number / 10) > 0) {
            result += tens[Math.floor(number / 10)];
            number %= 10;
            if (number > 0) result += ' ';
        }
        if (number > 0) {
            result += ones[number];
        }
    }

    return result.trim();

  }
