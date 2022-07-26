// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let array = ['name', 'age',31,true, ['html','css','js'], {name:'Anya', age:26, gender:'female'}, 'okten', 'Ukraine', 3.14, 'Antonovskyi mist-done!'];
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
console.log(array[4]);
console.log(array[4][0]);
console.log(array[4][1]);
console.log(array[4][2]);
console.log(array[5].name);
console.log(array[5].age);
console.log(array[5].gender);
console.log(array[6]);
console.log(array[7]);
console.log(array[8]);
console.log(array[9]);


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book = {
    title: 'Harry Potter',
    pageCount: 675,
    genre: 'fantasy'
};
console.log(book);

let book1 = {
    title: 'Три лини для Марії',
    pageCount: 248,
    genre: 'prose'
};
console.log(book1);

let book2 = {
    title: 'Чуєш, коли приїдеш додому',
    pageCount: 220,
    genre: 'інернет-новелла'
};
console.log(book2);


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age
let book3 = {
    title: 'Harry Potter and the Philosopher"s Stone',
    pageCount: 456,
    genre: 'fantasy',
    authors:[ {
        name: 'J. K. Rowling',
        age: 56
    },
        {

        }]
};
console.log(book3);

let book4 = {
    title: '1984',
    pageCount: 456,
    genre: 'готична проза',
    authors: [{
        name: 'Джордж Орвелл',
        age: 47
    },
        {
            name:'Michael Kennar',
            age:35
        }
    ]
};
console.log(book4);

let book5 = {
    title: 'Ніби десь коло хати розбився літак',
    pageCount: 200,
    genre: 'збірка історій життя',
    authors: [
        {
        name: 'Юлія Сливка',
        age: 28
    },
        {
            name: 'Марія Кристопчук',
            age: 25
        }
        ]
};
console.log(book5);

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let users = [
    {
        name: 'Anya',
        username: 'Lopushyk',
        password: 'anya1349'
    },
    {
        name: 'Olya',
        username: 'Deineko',
        password: 'olia287'
    },
    {
        name: 'Ruslan',
        username: 'Lopushyk',
        password: 'rus8381'
    },
    {
        name: 'Inna',
        username: 'Myronchuk',
        password: 'inka2849'
    },
    {
        name: 'Ivan',
        username: 'Mohnar',
        password: 'Ivan18781'
    },
    {
        name: 'Oleg',
        username: 'Myronchuk',
        password: 'oleg1243'
    },
    {
        name: 'Evgen',
        username: 'Blyshyk',
        password: 'geka1412'
    },
    {
        name: 'Katya',
        username: 'Demedyshyna',
        password: 'kait47189'
    },
    {
        name: 'Nataliy',
        username: 'Vahovska',
        password: 'natali1983'
    },
    {
        name: 'Tanya',
        username: 'Pogulyanik',
        password: 'tania8789'
    },

]
console.log(users[0].password)
console.log(users[1].password)
console.log(users[2].password)
console.log(users[3].password)
console.log(users[4].password)
console.log(users[5].password)
console.log(users[6].password)
console.log(users[7].password)
console.log(users[8].password)
console.log(users[9].password)

























