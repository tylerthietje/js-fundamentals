function add7(num) {
    return num + 7;
}

console.log(add7(5));

function multiply(num1, num2) {
    return num1 * num2;
}

console.log(multiply(5, 10));

function capitalize(str) {
    return str[0].toUpperCase() + str.substring(1).toLowerCase();
}
console.log(capitalize('does it work on a new string?'));
console.log(capitalize('HOW ABOUT THIS ONE?'));
console.log(capitalize('ThIs Is A tEsT'));

function lastLetter(str) {
    return str.substr(-1);
}
console.log(lastLetter('This is a test string'));