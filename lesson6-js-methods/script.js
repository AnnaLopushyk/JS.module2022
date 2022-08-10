// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

let str1 = 'hello world';
console.log(str1.length);

let str2 = 'lorem ipsum';
console.log(str2.length);

let str3 = 'javascript is cool';
console.log(str3.length);


// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
console.log(str1.toUpperCase());
console.log(str2.toUpperCase());
console.log(str3.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

console.log(str1.toLowerCase());
console.log(str2.toLowerCase());
console.log(str3.toLowerCase());


// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
//
str = ' dirty string   ';
console.log(str.trim());
//
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
    let str5 = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str5);
// ['Ревуть', 'воли', 'як', 'ясла', 'повні']
console.log(str5.split(' '));

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
let array = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
let arraySting = array.map(value => value +'')
console.log(arraySting)

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]


let nums = [11,21,3];
let sortNums =(array,direction)=> {
    if (direction ==='ascending') return  nums.sort((a,b)=>a-b);
    if (direction ==='discending') return  nums.sort((a,b)=>b-a);
}
console.log(sortNums([11,21,3],'discending'))


// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration

coursesAndDurationArray.sort((a,b)=>a.monthDuration-b.monthDuration);
console.log(coursesAndDurationArray);

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

let newFilter=coursesAndDurationArray.filter((value)=> {
    return value.monthDuration>5;
});
console.log(newFilter)


// описати колоду карт
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
let cards = [
    {cardSuit: 'spades', value: 6, color:'black'},
    {cardSuit: 'spades', value: 7, color:'black'},
    {cardSuit: 'spades', value: 8, color:'black'},
    {cardSuit: 'spades', value: 9, color:'black'},
    {cardSuit: 'spades', value: 10, color:'black'},
    {cardSuit: 'spades', value: 'ace', color:'black'},
    {cardSuit: 'spades', value: 'jack', color:'black'},
    {cardSuit: 'spades', value: 'queen', color:'black'},
    {cardSuit: 'spades', value: 'king', color:'black'},
    {value: 'joker', color:'black'},


    {cardSuit: 'clubs', value: 6, color:'black'},
    {cardSuit: 'clubs', value: 7, color:'black'},
    {cardSuit: 'clubs', value: 8, color:'black'},
    {cardSuit: 'clubs', value: 9, color:'black'},
    {cardSuit: 'clubs', value: 10, color:'black'},
    {cardSuit: 'clubs', value: 'ace', color:'black'},
    {cardSuit: 'clubs', value: 'jack', color:'black'},
    {cardSuit: 'clubs', value: 'queen', color:'black'},
    {cardSuit: 'clubs', value: 'king', color:'black'},


    {cardSuit: 'diamonds', value: 6, color:'red'},
    {cardSuit: 'diamonds', value: 7, color:'red'},
    {cardSuit: 'diamonds', value: 8, color:'red'},
    {cardSuit: 'diamonds', value: 9, color:'red'},
    {cardSuit: 'diamonds', value: 10, color:'red'},
    {cardSuit: 'diamonds', value: 'ace', color:'red'},
    {cardSuit: 'diamonds', value: 'jack', color:'red'},
    {cardSuit: 'diamonds', value: 'queen', color:'red'},
    {cardSuit: 'diamonds', value: 'king', color:'red'},


    {cardSuit: 'hearts', value: 6, color:'red'},
    {cardSuit: 'hearts', value: 7, color:'red'},
    {cardSuit: 'hearts', value: 8, color:'red'},
    {cardSuit: 'hearts', value: 9, color:'red'},
    {cardSuit: 'hearts', value: 10, color:'red'},
    {cardSuit: 'hearts', value: 'ace', color:'red'},
    {cardSuit: 'hearts', value: 'jack', color:'red'},
    {cardSuit: 'hearts', value: 'queen', color:'red'},
    {cardSuit: 'hearts', value: 'king', color:'red'},
    {value: 'joker', color:'red'},


];
// - знайти піковий туз
let found = cards.find(element=>{
    if (element.value === 'ace' || element.cardSuit === 'spades') {
        return element;
    }
})
console.log(found)



// - всі шістки

let every = cards.filter(element => element.value === 6);
console.log(every)

// - всі червоні карти
let isRedCards = cards.filter(value => value.color === 'red');
console.log(isRedCards)

// - всі буби
let isDiamonds = cards.filter(value => value.cardSuit === 'diamonds');
console.log(isDiamonds)

// - всі трефи від 9 та більше
let isClubs = cards.filter(value => value.cardSuit === 'clubs' && value.value >=9 );
console.log(isClubs)


// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }


let reduce = cards.reduce((accumulator, card) =>{
    if(card.cardSuit === 'spades'){
    accumulator.spades.push(card)
}
    if(card.cardSuit === 'diamonds'){
        accumulator.diamonds.push(card)
    }
    if(card.cardSuit === 'hearts'){
        accumulator.hearts.push(card)
    }
    if(card.cardSuit === 'clubs'){
        accumulator.clubs.push(card)
    }
        return accumulator;
},
    {
    spades:[],
    diamonds:[],
    hearts:[],
    clubs:[]
}
)
console.log(reduce)