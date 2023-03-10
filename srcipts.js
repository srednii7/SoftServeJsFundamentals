//alert('Srednii') //! TASK 2

// let varibale1 = 27; //! TASK 3
// let variable2 = '54';
// alert(varibale1);
// alert(variable2);
// variable2 = varibale1;
// alert(variable2);

// let object = { //! TASK 4
//     String: 'string',
//     Number: 7,
//     Boolean: true,
//     Undefiened: undefined,
//     Null: null
// };

// isAdult = confirm('Are you oler than 18?'); //! TASK 5
// console.log(isAdult);

// const myName = 'Yehor'; //! TASK 6
// const surname = 'Srednii';
// const age = 18;
// const birthDate = '08/06/2004';
// const maritalStatus = 'not married';
// const groupNumber = 1;
// const varNull = null;
// const varUndefined = undefined;

// console.log(
//     'My Data: ', '\n', 
//     'Group: ', groupNumber,'\n', 
//     'Age: ', age, '\n', 
//     'Name: ', myName, '\n', 
//     'Surname: ', surname, '\n', 
//     'Date of Birthday: ', birthDate, '\n', 
//     'Martial Status: ', maritalStatus, '\n', 
//     'Null Variable: ', varNull, '\n', 
//     'Undefiened Variable: ', varUndefined);

// let login = prompt('Your Login'); //! TASK 7
// let email = prompt('Your Email');
// let password = prompt('Your Password');
// alert('Dear ' + login + ', your email is ' + email + ', your password is ' + password);

// const second = 1; //! TASK 8
// const hour = second * 60 * 60;
// const day = hour * 24;
// const month = day * 31;
// alert(hour + ' seconds in hour \n' + day + ' seconds in day \n' + month + ' seconds in month')

let myPlace = prompt('Введіть номер квитка'); //! STARRED TASK

if (myPlace % 2 == 0 && myPlace <= 36 && myPlace >= 1) {
    alert('Ваша місце верхнє не бічне')
} else if (myPlace % 2 == 0 && myPlace > 36 && myPlace <= 54) {
    alert('Ваше місце верхнє бічне')
} else if (myPlace % 2 != 0 && myPlace <= 36 && myPlace >= 1) {
    alert('Ваша місце нижнє не бічне')
} else if (myPlace % 2 != 0 && myPlace > 36 && myPlace <= 54) {
    alert('Ваше місце нижнє бічне')
} else {
    alert('Неправильно введений номер квитка')
}