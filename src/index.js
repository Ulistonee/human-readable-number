module.exports = function toReadable (number) {
    const units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    function readTens(num) {
        if (num < 10) return units[num];
        if (num < 20) return teens[num - 10];
        const tensPart = tens[Math.floor(num / 10)];
        const unitsPart = num % 10 ? ' ' + units[num % 10] : '';
        return tensPart + unitsPart;
    }
    if (number === 0) return 'zero';

    let res = '';
    if (number >= 100) {
        const hundredsPart = units[Math.floor(number / 100)] + ' hundred';
        const remain = number % 100;
        if (remain !== 0) {
            res = hundredsPart + ' ' + readTens(remain);
        } else {
            res = hundredsPart;
        }
    } else {
        res = readTens(number);
    }

    return res;
}
