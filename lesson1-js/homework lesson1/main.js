// 1. Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write

let greeting = 'hello';
let name = 'owu';
let company = 'com';
let natDom = 'ua';
let numb = 1;
let numb2 = 10;
let numb3 = -999;
let numb4 = 123;
const Pi = 3.14;
let numb5 = 2.7;
let boolTrue = true;
let boolFAlse = false;

console.log(greeting, name, company, natDom, numb, numb2, numb3, numb4, Pi, numb5, boolTrue, boolFAlse);
// alert(greeting);
// alert(`${name}.${company}.${natDom}`);
// alert(`${numb}.${numb2}.${numb3}.${numb4} ${numb5}`);
// alert(Pi);
// alert(`${boolTrue} or ${boolFAlse}`);

document.write(
    `<h3>${greeting} ${name}.${company}.${natDom}</h3>
     <div> ${numb}${numb2}${numb3} ${numb4} ${numb5}</div>
     <div> ${Pi} </div>
     <div> ${boolTrue} ${boolFAlse} </div>`
);

// 2. Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ.
// З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)

let firstName = 'Anna';
let middleNAme = 'Vasylivna';
let lastName = 'Lopushyk';

let person = `${firstName} ${middleNAme} ${lastName}`;
console.log(person)

// 3. За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;

let a = 100;
console.log(typeof a);

let b = '100';
console.log(typeof b);

let c = true;
console.log(typeof c);


// 4. За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль

let name1 = prompt('Ім`я');
let surname = prompt('По батькові');
let age = prompt('вік');

let persona = `hello ${name1} ${surname}. You have ${age} years old`;
console.log(persona)