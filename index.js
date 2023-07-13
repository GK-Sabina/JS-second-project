//выводить только числа кратные 3
//continue

// const MULT = 3;

// for(let i = 0; i < 7; i++){
// if (i % 3 === 0 && i){
//     console.log(i);
// }
// }

// for(let i = 0; i < 7; i++){
//     if (i % 3 || i===0){
//         continue;
//     }
//     console.log(i);
//     }


//Task 1
//1. Написати функцію, яка приймає в якості аргументів висоту і ширину  прямокутника, повертає площу прямокутника.
const calcRectangleArea = function(height, width){
        if(height==='' ||
        height===null ||
        height <= 0 ||
        Number.isNaN(Number(height))||
        width==='' ||
        width===null || 
        width <= 0 ||
        Number.isNaN(Number(width))){
            return 'error';
        }
            return height * width;
}
console.log(calcRectangleArea(6, 5));

//Task 2
//2. Написати функцію, яка приймає три числа - значення мір кутів трикутника, повертає класифікацію трикутника за кутами: прямокутний, гострокутний - якщо усі кути гострі, тупокутний, якщо хоча б один з кутів тупий, або повертає інформацію про неможливість існування трикутника з такими значеннями мір кутів трикутника  .
/**
 * 
 * @param {number} corner1 
 * @param {number} corner2 
 * @param {number} corner3 
 * @returns {string}
 */

const defineTriangle = function(corner1, corner2, corner3){
    if(corner1 + corner2 + corner3 === 180 &&
       corner1 > 0 &&
       corner2 > 0 &&
       corner3 > 0){
        if(corner1 === 90 || corner2 === 90 || corner3 === 90 ){
        return 'Triangle rectangular';
    }
        if(corner1 < 90 && corner2 < 90 && corner3 < 90){
        return 'Triangle acute-angled';
    }
        if(corner1 > 90 || corner2 > 90 || corner3 > 90){
        return 'Triangle obtuse';
    }
       }
    return 'Not a triangle';
}
console.log(defineTriangle(90, 45, 45));


//Task 3
//3. Написати функцію, яка приймає в якості аргумента діаметр кола і повертає довжину кола
/**
 *
 * @param {number} diameterCircle 
 * @param {number} NUMBER_PI 
 * @returns {number}
 */

const getCircleLength = function(diameterCircle){
return diameterCircle <= 0 ? 'error' : diameterCircle * Math.PI;
}
console.log(getCircleLength(5));


//Task 4
//4. Написати функцію, яка приймає в якості аргумента висоту циліндра та діаметр основи і повертає об'єм циліндра.
const calcCylinderVolume = function(height, diameter){
    if(height==='' ||
    height===null ||
    height <= 0 ||
    Number.isNaN(Number(height))||
    diameter==='' ||
    diameter===null || 
    diameter <= 0 ||
    Number.isNaN(Number(diameter))){
        return 'error';
    }
        return Math.PI * (diameter / 2) ** 2 * height;
}
console.log(calcCylinderVolume(7, 5));


//Task 5
//5. Написати функцію, яка приймає три аргументи: два числа (діапазон включно) і виводити на консоль всі числа з цього діапазону, які діляться на передане число -  третій аргумент.
/**
 * 
 * @param {number} start 
 * @param {number} end 
 * @param {number} divisor 
 */

const logNumberFromDiapazon = function(start, end, divisor){
    if(start > end){
return 'error';
    }
    for(let i = start; i <= end; i++){
if(i % divisor === 0){
    console.log(i);
}
    }
}
logNumberFromDiapazon(6, 10, 2);


//Task 6
//6. Написати функцію, яка приймає число и повертає суму непарних чисел від 1 до прийнятого числа.
const getOddNumbersSum = function(number){
    if(number==='' ||
    number===null ||
    number <= 0 ||
    Number.isNaN(Number(number))){
        return 'error';
    }
let sum = 0;
for(let i = 1; i <= number; i++){
if(i % 2 === 0){
    sum += i;
}
}
return sum;
}


//Task 7
//7. Написати функцію, яка повертає факторіал переданого числа. Використовувати BigInt.
/**
 * 
 * @param {bigint} number 
 * @returns {bigint}
 */

const getFuctorial = function(number){
    let fuctorial = 1n;
    for (let i = 1n; i <= number; i++){
        fuctorial *= i;
    }
    return fuctorial;
}
console.log(getFuctorial(5));

//Task 8
//8. Написати код, який пропонує користувачу вгадати "таємне число".Таємне число зберігається в константі. Користувач намагається вгадати, ви, в залежності від відповіді користувача, дієте підказки: більше або менше таємне число. Після того, як користувач вгадає таємне число, ви виводите йому кількість спроб, які були використанні для вгадування.

const secretNumber = 13;

let tries = 3;
const guessSecretNumber = prompt('Try to guess the number;)');
if(guessSecretNumber === '' ||
guessSecretNumber === null || 
Number.isNaN(Number(guessSecretNumber))){
    return 'try again';
}

