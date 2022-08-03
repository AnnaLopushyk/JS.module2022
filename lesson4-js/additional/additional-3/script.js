//
// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.
let arrays = [];
for (let i=0; i <= 100; i+=2) {
    if(i % 2===0) {
        console.log(i)
    }
}

//     b. заповнити його 50 непарними числами за допомоги циклу.

for (let i =0; i <= 100;i++) {
    if (i % 2 !==0) {
        console.log(i)
    }
}
//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
let arr=[];
for (let i=1; i <= 20; i++ ) {
    arr[i] = (Math.floor(Math.random()*100 + 3))
        console.log(arr[i])
}
// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)


let arr5 =[];
for(let i=1; i<=20; i++ ) {
  arr5[i]= (Math.floor(Math.random()*(732 - 1) + 8))
        console.log (arr5[i]);
}

// 2. Вивести за допомогою console.log кожен третій елемен
for (let i =1; i<arr.length; i+=3) {
    console.log(arr[i])
}
// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.

for (let i =0; i < arr.length; i+=3) {
    if(arr[i] % 2 === 0) {
        console.log(arr[i])
    }

}
// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним
// та записати їх в новий масив

for (let i =1; i<arr.length;i+=3) {
    if (i % 2 === 0) {
        let array2=[];
        array2[i]=arr[i];
        console.log(array2[i])
    }
}


// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56

let example = [1, 2, 3, 5, 7, 9, 56, 8, 67 ];
for (let i=0; i <= example.length; i++) {
    if((example[i] % 2===0)) {
        console.log(`${example[i-1]}`);
    }
}


// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
//
let numb=[100,250,50,168,120,345,188];
let result= (numb[0]+numb[1]+numb[2]+numb[3]+numb[4]+numb[5]+numb[6])/6;
console.log(result)


// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.

let newArr=[];
for(let i=0; i<=10; i++ ) {
    newArr[i] = (Math.floor(Math.random() * 100 +3 ))
    console.log(newArr[i])
        let newArr2=[];
        console.log(newArr2=newArr[i]*5)

}
// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.

let types = [246,410,'one',true,1.25,'truth', false, 50,'winter','cold','100500'];
for (let i=0; i < types.length; i++) {
    if ( typeof types[i] ==='number') {
        let types2 = types[i]
        console.log(types2)
    }
}
// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
    let usersWithId = [
        {id: 1, name: 'vasya', age: 31, status: false},
        {id: 2, name: 'petya', age: 30, status: true},
        {id: 3, name: 'kolya', age: 29, status: true},
        {id: 4, name: 'olya', age: 28, status: false}
    ];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];

//         - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.

let numbArr =[11,32,43,44,765,126,158,178,129,200];
for (let i=0; i<numbArr.length; i++) {
    if (numbArr[i] % 2 ===0){
        console.log(numbArr[i])
    }
}
//
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
//
let numberArr =[10,74,43,87,743,416,128,178,129,123];
let emptyArr = [];


let text = ['a', 'b', 'c'];
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.

for (let i = 0; i < text.length; i++) {
    let result=(text[0]+text[1]+text[2])
    console.log(result)

}
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.

let i = 0;
while (i<text.length) {
    let result=(text[0]+text[1]+text[2])
    console.log(result)
    i++
}
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.


for (let key of text) {

    console.log(key)
}

// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
let usersWithCities = [
    {
        id: 1, // <===
        name: 'vasya',
        age: 31,
        status: false,
        address: {
            user_id: 1, // <===
            country: 'Ukraine',
            city: 'Ternopil'
        }
    },
    // TO BE CONTINUED .....
]
//
//
//