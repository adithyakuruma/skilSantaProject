let number1 = prompt("Enter number 1")
console.log(number1);
let number2 = prompt("Enter number 2");
console.log(number2);

let number3 = prompt("Enter number 3")
console.log(number3);

try {
    if (number1 > number2 && number1 > number3) {
        document.write(number1 ? "The Greatest number is " + number1 : " ")
    }

    else if (number2  > number3) {
        document.write(number2 ? "The Greatest number is " + number2 : " ")
    } else {
        document.write(number3 ? "The Greatest number is " + number3 : " ")

    }
}
catch (e) {
    document.write("error: " + e);
}