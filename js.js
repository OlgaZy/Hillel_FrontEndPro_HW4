let fiveDigitNumber = prompt('Enter 5-digit number:');

if (fiveDigitNumber?.trim() && !isNaN(fiveDigitNumber) && Number.isInteger(+fiveDigitNumber)){   
    fiveDigitNumber = Math.abs(+fiveDigitNumber);
    let str = fiveDigitNumber.toString();
    if (str.length === 5){
        let fiveDigitNumberArray = str.split('');
        let fiveDigitNumberSrt = fiveDigitNumberArray.join(' ');
    }
    else{
        alert("It's not a 5-digit number");
    }
} 
else {
    alert("Invalid number entered");
} 