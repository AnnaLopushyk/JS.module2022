//
// 5. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
// Значення площі зберігати в змінній s.

let height = 23;
let width = 10;
let s = height * width;
console.log(s)

// 6. Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
// результат помістіть у змінну v.

let heightC = 10;
let dC = 4;
const PI = 3.14;

let r = dC/2;
let v = PI*(r**2)*heightC;
console.log(v)


// 7. У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
// Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow (число, ступінь)
// або оператор зведення в ступінь **).

let n = 3;
let m = 4;
let k = Math.pow(3,2)+Math.pow(4,2)
console.log(Math.sqrt(k))


// 8. Визначити відповідний оператор в виразах що б вийшов відповідний результат.
//     В однакових виразах не використовувати однакові оператори!!!

// 5 ? 6 -> true
let task1 = 5<6;
console.log(task1);

// 5 ? 6 -> false
let task2 = 5>6;
console.log(task2);

// 5 ? 6 -> false
let task3 = 5>=6;
console.log(task3);

// 5 ? 6 -> false
let task4 = 5===6;
console.log(task4);


// 10 ? 10 -> true
let task5 = 10==10;
console.log(task5);

// 10 ? 10 -> true
let task6 = 10===10;
console.log(task6);

// 10 ? 10 -> false
let task7 = 10>10;
console.log(task7);

// 10 ? 10 -> false
let task8 = 10<10;
console.log(task8);

// 10 ? 10 -> false
let task9 = 10!==10;
console.log(task9);

// 123 ? '123' -> false
let task10 = 123 != '123';
console.log(task10);

// 123 ? '123' -> true
let task11 = 123=='123';
console.log(task11);




















