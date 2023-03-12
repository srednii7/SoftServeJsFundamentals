// let checkFunc = function(a, b, c) { //! Task 1
//     if(a < b && b < c) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(checkFunc(1, 2, 3));

// let x = 1; //! Task 2
// let y = 2;

// let res1 = `${ x }` + `${ y }` // Допишіть код, необхідно використовувати змінні x і y
// console.log(res1); // ""12""
// console.log(typeof res1); // ""string""

// let res2 = Boolean(x) + `${ y }` // Допишіть код, необхідно використовувати змінні x і y
// console.log(res2); // ""true2""
// console.log(typeof res2); // ""string""

// let res3 = Boolean(x, y)// Допишіть код, необхідно використовувати змінні x і y
// console.log(res3); // true
// console.log(typeof res3); // ""boolean""

// let res4 = Number([x, y]) ; // Допишіть код, необхідно використовувати змінні x і y
// console.log(res4); // NaN
// console.log(typeof res4); // ""number""

// const isAdult = prompt('Скільки вам років?') //! Task 3
// if(isAdult >= 18) {
//     alert('Ви досягли повнолітнього віку')
// } else {
//     alert('Ви ще надто молоді')
// }

// let arr = [4, 5, 2, 1, 6, 5, 3, 5, 2, 5] //! Task 4

// function findMostCommonNumber(arr) { 
//     const counts = {};
//     let maxCount = 0;
//     let mostCommonNum;

//     for (let i = 0; i < arr.length; i++) {
//       const num = arr[i];
//       if(counts[num] = counts[num]) {
//         counts[num] += 1;
//       } else {
//         counts[num] = 1;
//       }
//       if (counts[num] > maxCount) {
//         maxCount = counts[num];
//         mostCommonNum = num;
//       }
//     }

//     return mostCommonNum;
//   }

// function removeMax(arr, item) {
//     for(i = 0; i < arr.length; i++) {
//         if(arr[i] == item) {
//             arr.splice(arr.indexOf(item), 1);
//         }
//     }
    
//     return arr;
// }

// let data = findMostCommonNumber(arr);

// console.log(data); // 5
// console.log(removeMax(arr, data)) // [4, 2, 1, 6, 3, 2]

// let side1 = parseFloat(prompt('Введіть довжину першої сторони')); //! Task 5
// let side2 = parseFloat(prompt('Введіть довжину другої сторони'));
// let side3 = parseFloat(prompt('Введіть довжину третьої сторони'));

// const p = (side1 + side2 + side3) / 2;
// const area = Math.sqrt(p * (p - side1) * (p - side2) * (p - side3));

// console.log(area.toFixed(3));

// if(Math.sqrt(side1 * side1 + side2 * side2) == Math.sqrt(side3 * side3) ||
// Math.sqrt(side2 * side2 + side3 * side3) == Math.sqrt(side1 * side1) ||
// Math.sqrt(side1 * side1 + side3 * side3) == Math.sqrt(side2 * side2)) {
//     console.log('Прямокутний')
// } else {
//     console.log('Непрямокутний')
// }

// let currentDate = new Date(); //! Task 6
// let hours = currentDate.getHours();
// if(hours >= 5 && hours <= 11) {
//     console.log('Доброго ранку');
// } else if(hours > 11 && hours < 17) {
//     console.log('Доброго дня”')
// } else if(hours >= 17 && hours < 23) {
//     console.log('Доброго вечора')
// } else {
//     console.log('Доброї ночі')
// }

//! Starred Task
// const salary = Number(prompt('Введіть бажану зарплату Васі')); //! 1.1
// const delays = Number(prompt('Введіть кількість запізнень Васі'));
// const punishment = Math.floor(delays / 3) * 20;
// const codeStrings = Math.floor((salary + punishment) / 50) * 100;
// console.log('Вася має написати ' + codeStrings.toFixed() + " строк коду");

// const codeStrings = Number(prompt('Введіть кількість написанх строк Васі')); //! 1.2
// const salary = Number(prompt('Введіть бажану зарплату Васі'));
// const bufferMoney = (Math.floor(codeStrings / 100) * 50) - salary;

// if(bufferMoney > 0) {
//     delays = Math.floor(bufferMoney / 20);
// } else {
//     delays = 0;
// }

// console.log('Вася може запізнитися ' + delays + ' разів')

const codeStrings = Number(prompt('Введіть кількість написаних строк Васі')); //! 1.3
const delays = Number(prompt('Введіть кількість запізнень Васі'));

salary = Math.floor(codeStrings / 100) * 50 - Math.floor(delays / 3) * 20;

if(salary > 0) {
    console.log('Вася отрмає ' + salary + '$')
} else {
    console.log('Вася не торимає грошей')
}