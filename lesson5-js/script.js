// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let area = (a,b)=>a*b
console.log(area(5, 10));

// - створити функцію яка обчислює та повертає площу кола з радіусом r

let areaCircle = (PI,r)=>PI*(r**2);
console.log(areaCircle(3.14,10))

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та
// радіутом r

let areaCylinder = (PI,r,h)=>2*PI*r*h;
console.log(areaCylinder (3.14,2,10));


// - створити функцію яка приймає масив та виводить кожен його елемент
let arr1 = [120, 312, true, false, 5,'okten','school'];
let array = (arr1)=> {
    for (let key of arr1) {
        document.write(`-${key}`)
    }
}
array(arr1);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
let paragraph = (arg)=> {
    document.write(arg);
}
paragraph(`<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, minima.</div>`)

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

let list =(arg)=>  {
    document.write(`<ul>`);
    document.write(`<li>${arg}</li>`);
    document.write(`<li>${arg}</li>`);
    document.write(`<li>${arg}</li>`);
    document.write(`</ul>`)
}
list('function')

// - створити функцію яка створює ul з трьома елементами li.
// Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом,
// який є числовим (тут використовувати цикл)


let createList = (arg,numb)=> {
    if (typeof numb==='number') {
        for (let i = 1; i<=numb; i++) {
            document.write(`<ul>`)
            document.write(`<li>${arg}</li>`);
            document.write(`</ul>`)
        }
    }
}
createList('okten', 3)

document.write(`<hr>`)


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let arrayElements = [10,20,'school',true,'best'];
let arr = ()=> {
    for (let i=0; i<arrayElements.length; i++) {
        document.write(`<ul>`)
        document.write(`<li>${arrayElements[i]}</li>`)
        document.write(`</ul>`);
    }
}
arr(arrayElements)
document.write(`<hr>`)
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age ,
// та виводить їх в документ. Для кожного об'єкту окремий блок.

let objectsArr = [
    {   id:1,
        name:'Anna',
        age:30
    },
    {   id:2,
        name:'Olya',
        age:32
    },
    {   id:3,
        name:'Inna',
        age:31
    }
]
let arrayObjects = ()=> {
    for (let keys of objectsArr) {
        document.write(`<div>`);
        document.write(`${keys.id}. ${keys.name}: ${keys.age + ' years old'}`);
        document.write(`</div>`);
    }
}
arrayObjects(objectsArr);

document.write(`<hr>`)

// - створити функцію яка повертає найменьше число з масиву

let arrNumbs = [300,438,41,-150,425,22170,423];
let turnNumbMin =(arrNumbs)=> {
    let min = arrNumbs[0];
    for (let key of arrNumbs) {
        if (key<min) {
            min=key;
            return min;
        }
    }
}
let res =turnNumbMin(arrNumbs);
console.log(res)
document.write(`${res}`)

document.write(`<hr>`)
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

let arrNumb = [12,30,1,100,102];

let sumArray =(arrNumb)=> {
    let result = 0;
    for (let numbers of arrNumb) {
        result = result + numbers;
    }
    return result;
}
result=sumArray(arrNumb);
console.log(result)
document.write(`${result}`)

document.write(`<hr>`)