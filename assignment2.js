/////Deafult and parametrised constructor in JS/////////
function multiply(a, b = 2) {
    return a * b;
}

let num1 = multiply(5);///Here second value has not been given so it will take default  value that is 2 /////////
console.log(num1);
let num2 = multiply(5, 8);
console.log(num2);