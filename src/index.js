module.exports = function toReadable (number) {
    let toTen = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine','zero'];
    let toTwenty = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let toHundred = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let d = ['one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'];
    let m;
    let s = number.toString();
    let length = s.length;
    let answer;
    let answer2;
    let answer3;
    if(number==0){
        return 'zero';
    }
    if(number==20){
        return 'twenty';
    }

    if (length == 1) {
        answer = toTen[number - 1];
        return (answer);
    }
    if (length == 2 && number < 20) {
        m = number % 10;
        answer = toTwenty[m];
        return (answer);
    }
    if (length == 2 && number > 20) {
        let ten = number / 10;
        let firstNumber = Math.floor(ten);
        answer = toHundred[firstNumber - 2];
        let secondNumber = number % 10;
        answer2 = toTen[secondNumber - 1];
        if (secondNumber != 0) {

            return (answer + ' ' + answer2);
        } else {
            return (answer)
        }
    }
    if (length == 3) {
        let hundred = number / 100;
        let firstNumber = Math.floor(hundred);
        answer = d[firstNumber - 1];
        let ten = number % 100;
        if (ten <= 9 && ten != 0) {
            answer3 = toTen[ten - 1];
            return (answer + ' ' + answer3);
        }
        else if (ten <= 9 && ten == 0) {
            return (answer)
        }
        if (ten <= 19 && ten > 9) {
            let thirdNumber = ten % 10;
            if (thirdNumber == 0) {
                answer2 = toTwenty[0];
                return (answer + ' ' + answer2);
            }
            else if (thirdNumber != 0) {
                answer2 = toTwenty[thirdNumber]
                return (answer + ' ' + answer2)
            }
        }
        if (ten > 19) {
            let ten1 = ten / 10;
            let secondNumber = Math.floor(ten1)
            answer2 = toHundred[secondNumber - 2]
            let thirdNumber = number % 10;
            answer3 = toTen[thirdNumber - 1];
            if (secondNumber != 0 && thirdNumber != 0) {
                return (answer + ' ' + answer2 + ' ' + answer3)
            } else if (secondNumber != 0 && thirdNumber == 0) {
                return (answer + " " + answer2);
            }
            
          
        }
    }
}
