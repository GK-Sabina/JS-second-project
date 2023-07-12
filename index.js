// const number1 = 9;
// const number2 = -7;
// const sign = '/';


//чистая функция
function sum(number1, number2){
    return number1 + number2;
}

function sub(number1, number2){
    return number1 - number2;
}

function mul(number1, number2){
    return number1 * number2;
}

function dev(number1, number2){
    return number1 / number2;
}

const checkNumber = function(number){
    if(number==='' ||
    number===null || 
    Number.isNaN(Number(number))){
        return false;
    }
        return true;
}
const calc = function(number1, number2, sign){
    if(!checkNumber(number1) || !checkNumber(number2)){
        return NaN;
    }
switch(sign){
case '+':
    return sum(number1, number2);
case '-':
    return sub(number1, number2);
case '*':
    return mul(number1, number2);
case '/':
    return dev(number1, number2);
default:
    return NaN;
}
// return typeof funcAddress === 'function' ? funcAddress(number1, number2):NaN;
}
console.log(calc(7, 3, '+'));

//функция высшего порядка
function hightOrderFunction (number1, number2,funcAddress){ //funcAddress - функция в которую мы положили переменную
    return typeof funcAddress === 'function' ? funcAddress(number1, number2):NaN;
}
console.log(hightorderFunction(6,5,mul));