// --створити масив з:
//     - з 5 числових значень
let arrays = [2, 41, 56.3, 400, 1324]
console.log(arrays)
// - з 5 стічкових значень
let arrays2 = ['hello', 'world', 'okten', 'school', 'peace'];
console.log(arrays2);
// - з 5 значень стрічкового, числового та булевого типу
let array3 = [30, 'age', false, true, 'Ukraine'];
console.log(array3)
// - та вивести його в консоль
//
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
let boxes = [];
boxes[0] = 'girl';
boxes[1] = 'true';
boxes[2] = 100500;
boxes[3] = 'victory';
boxes[4] = false;

for (let i = 0; i < boxes.length; i++) {
    const box = boxes[i];
    console.log(box)
}


// - є масив [2,17,13,6,22,31,45,66,100,-18] :
// 1. перебрати його циклом while
let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
let i = 0;
while (i < arr.length) {
    console.log(arr[i]);
    i++;
}

//     2. перебрати його циклом for
for (let number of arr) {
    console.log(number)
}

//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
i = 0;
while (i < arr.length) {
    if (i % 2 === 1) {
        console.log(arr[i]);
    }
    i++
}

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
for (i = 0; i < arr.length; i++) {
    if (i % 2 !== 0) {
        console.log(arr[i]);
    }
}
// 5. перебрати циклом while та вивести  числа тільки парні  значення

i = 0;
while (i < arr.length) {
    if (arr[i] % 2 === 0) {
        console.log(arr[i]);
    }
    i++
}
// 6. перебрати циклом for та вивести  числа тільки парні  значення
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        console.log(arr[i]);
    }
}

// 7. замінити кожне число кратне 3 на слово "okten"
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 3 === 0) {
        arr[i] = 'okten';

        console.log(arr[i])
//
    }
}

// let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// 8. вивести масив в зворотньому порядку.
for (let j = arr.length - 1; j >= 0; j--) {
    let arrElement = arr[j];
    console.log(arrElement)

}
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
//
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let numbArr = [11, 20, 33, 8, 15, 65, 176, 18, 32, 125];
for (let i = 0; i < numbArr.length; i++) {
    console.log(numbArr[i]);
}
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
let textArr = ['monday', 'tuesday', 'wensday', 'thursday', 'friday', 'saturday', 'sunday', 'week', 'mounth'];
for (let i = 0; i < textArr.length; i++) {
    console.log(textArr[i])
}
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let arrAll = ['week', 'wood', false, 222, 'brain', 'main', 'true', 100500, [2, 6, 123, 'flower'], 3.14];
for (let i = 0; i < arrAll.length; i++) {
    console.log(arrAll[i])
}
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
let contain = [100, 200, 'bread', 'sorry', true, 21, 'sun', false, 'land', 5 > 2];
for (let i = 0; i < contain.length; i++) {
    if (typeof contain[i] === "boolean")
        console.log(contain[i])
}
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
let numbs = [25, 'weather', 45, 50, 'one', true, 1.25, 'truth', false, 'winter'];
for (let i = 0; i < numbs.length; i++) {
    if (typeof numbs[i] === 'number')
        console.log(numbs[i])
}

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
//
let types = ['list', 'item', 45, 50, 'one', true, [arr], 'truth', false, 'winter'];
for (let i = 0; i < types.length; i++) {
    if (typeof types[i] === 'string')
        console.log(types[i])
}


// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів
// Вивести в консоль всі його елементи в циклі.
let emptyArrays = [];
emptyArrays[0] = 'weather';
emptyArrays[1] = [1, 2, 3];
emptyArrays[2] = true;
emptyArrays[3] = 'cold';
emptyArrays[4] = 'okten';
emptyArrays[5] = 'Lviv';
emptyArrays[6] = 10;
emptyArrays[7] = false;
emptyArrays[8] = 'school';
emptyArrays[9] = 100;

for (let i = 0; i < emptyArrays.length; i++) {
    console.log(emptyArrays[i])
}
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i = 1; i <= 10; i++) {
    console.log(i);
    document.write(`<p>${i} step </p>`)
}
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i = 1; i <= 100; i++) {
    console.log(i);
    document.write(`<p>${i} jump</p>`)
}
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
for (let j = 0; j <= 100; j += 2) {
    console.log(j)
    let emptyArray = emptyArrays[j];
    document.write(`<p>${j} numb</p>`)

}
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for (let j = 0; j <= 100; j++) {
    if (j % 2 === 0) {
        document.write(`<p>${j} numb</p>`)
    }

}
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for (let j = 0; j <= 100; j++) {
    if (j % 2 !== 0) {
        document.write(`<p>${j} numb</p>`);
        console.log(j)
    }

}

// стоврити масив книжок (назва, кількість сторінок, автори , жанри).

let books = [
    {
        title: 'Harry Potter and the Philosopher"s Stone',
        pageCount: 651,
        authors:'J. K. Rowling',
        genre: 'fantasy'
    },
    {
        title: '1984',
        pageCount: 426,
        authors: ['Джордж Орвелл','Michael Kennar'],
        genre: 'готична проза',
    },
    {
        title: 'Ніби десь коло хати розбився літак',
        pageCount: 200,
        authors: ['Юлія Сливка','Марія Кристопчук'],
        genre: 'збірка історій життя',
    },
    {
        title: 'Три лини для Марії',
        pageCount: 248,
        authors: 'Сергій Осока',
        genre: 'prose'
    },
    {
        title: 'Чуєш, коли приїдеш додому',
        pageCount: 220,
        authors: ['Юлія Сливка','Василь Максимович'],
        genre: 'інернет-новелла'
    }
];

// -знайти наібльшу книжку.
for (const book of books) {
    for (const bookKey in book) {

        console.log(bookKey)
    }

}
// - знайти книжку/ки з найбільшою кількістю жанрів
// - знайти книжку/ки з найдовшою назвою
// - знайти книжку/ки які писали 2 автори
// - знайти книжку/ки які писав 1 автор