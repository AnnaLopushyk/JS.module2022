// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
// Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x = +prompt('Введіть число');
if (x === 0) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}


// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = +prompt ("введіть число від 0 до 59, щоб дізнатися яка чверть години");

if (time<=15){
    console.log('Перша чверть години');
} else if(time<=30) {
    console.log('Друга чверть години');
} else if(time<=45) {
    console.log('третя чверть години');
} else if(time<=59) {
    console.log('Четверта чверть години');
} else {
    console.log('некоректний дані')
}


// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = +prompt('Введіть число від 1 до 31, щоб дізнатися,яка декада місяця!');
if (day<=10) {
    console.log('Перша декада місяця');
} else if (day <= 20) {
    console.log('Друга декада місяця');
}  else if (day <= 31) {
    console.log('Третя декада місяця');
}  else  {
    console.log('перевірте правильність вводу даних');
}
//
// - Скласти розклад на тиждень за домопоги switch.
// Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день
// (можна замість плану на день, назву дня англійською).
//

let dayWeek= prompt('Введіть день тижня,англыйською мовою, щоб побачити ваші плани');
switch (dayWeek) {
    case 'monday':
        console.log('виконати домашнє завдання по JS');
        break;
    case 'tuesday':
        console.log('виконати english');
        break;
    case 'wensday':
        console.log('Можеш відпочити, але краще не треба.');
        break;
    case 'thursday':
        console.log('вчися, вчися і ще раз вчися');
        break;
    case 'friday':
        console.log('Можеш кімарнути,але не точно. Сон для слабаков! Вчися далі');
        break;
    case 'saturday':
        console.log('No pain no gain');
        break;
    case 'sunday':
        console.log('relax');
        break;
    default:
        console.log('невірні дані');
}

//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

let number1 = +prompt('Введіть число')
let number2 = +prompt('Введіть ще одне число для порівняння')
if (number1>number2) {
    console.log('максимальне число '+ number1)
} else if (number2>number1) {
    console.log('максимальне число '+ number2)
} else if (number1===number2) {
    console.log('числа рівні')
} else  {
    console.log('некоректні дані')
}

//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy
//         (хибноподыбне, тобто кастується до false)

