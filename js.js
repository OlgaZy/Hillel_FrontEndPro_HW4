let fiveDigitNumber = prompt('Enter 5-digit number:');

if (fiveDigitNumber !== null && !isNaN(fiveDigitNumber) && Number.isInteger(+fiveDigitNumber)){   
    fiveDigitNumber = Math.abs(+fiveDigitNumber);
    let str = fiveDigitNumber.toString();
    if (str.length === 5){
        let fiveDigitNumberArray = str.split('');
        let fiveDigitNumberSrt = fiveDigitNumberArray.join(' ');
        document.getElementById("income").innerHTML = fiveDigitNumber;
        document.getElementById("number").innerHTML = fiveDigitNumberSrt;
    }
    else{
        alert("It's not a 5-digit number");
    }
} 
else {
    alert("Invalid number entered");
} 