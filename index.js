//Циклы
//задача, пользователь должен правильно вести пароль, неизвестно сколько раз, с помощью цикла
const PASSWORD = '123';

//вариант 1
// let userInputPassword = prompt('Enter password');
// while (PASSWORD !== userInputPassword) {
// userInputPassword = prompt('Enter password');
// }
// alert('welcome');

//вариант 2
while(true){
    const userInputPassword = prompt('Enter password');
    if(PASSWORD === userInputPassword){
        alert ('welcome');
        break;
    }
}

//задача, пользователь должен правильно вести пароль, 3 попытки, с помощью цикла 
const PASSWORD1 = '123';
const MAX_TRY = 3;

let count = 0;

while(true){
    const userInputPassword = prompt('Enter password');
    count++;
    if(count>=MAX_TRY){
        alert('try empty');
        break;
    }
    if(PASSWORD === userInputPassword){
        alert ('welcome');
        break;
    }
    if(i +1 === MAX_TRY){
        alert('try empty');
        break;
    }
    alert('try number'+ (i + 1));
}

//с помощью for
for(let i = 0; i<MAX_TRY; i++){
    alert('try number' + (i + 1)); //выводим пользователю сколько попыток осталось
    const userInputPassword = prompt('Enter password');
    if(PASSWORD === userInputPassword){
        alert ('welcome');
        break;
    }
    if(i + 1 === MAX_TRY){ //ввыводим пользователю что попытки закончились
        alert('try empty');
        break;
    }
}