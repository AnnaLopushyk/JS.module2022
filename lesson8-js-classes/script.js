// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
//

function User (id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone
}

let user1 = new User ('1', 'Anna','Lopushyk', 'anna.lopush@gnmail.com','0966127461');
let user2 = new User ('2', 'Olya','Deyneko', 'olya.deineco@gnmail.com','0966254874');
let user3 = new User ('3', 'Katya','Pashko', 'katya.pawko.@gnmail.com','0675842514');
let user4 = new User ('4', 'Ivan','Lopinsk', 'anna.lopush@gnmail.com','0974125879');
let user5 = new User ('5', 'Oleg','Muron', 'oleg.myron@gnmail.com','0965847124');
let user6 = new User ('6', 'Ruslan','Lopushyk', 'ruslan.lopush@gnmail.com','0973521876');
let user7 = new User ('7', 'Inna','Muronchyk', 'inna.myronchyk@gnmail.com','0502587469');
let user8 = new User ('8', 'Olena','Blushyk', 'oena.blyshuk@gnmail.com','0981254877');
let user9 = new User ('9', 'Yulya','Grabovlya', 'yulia.grabovska@gnmail.com','0963325899');
let user10 = new User ('10', 'Tanya','Pogulanya', 'tanya.pogulyanic@gnmail.com','0974417780');

let emptyArray=[];
emptyArray.push(user1,user2,user3,user4,user5,user6,user7,user8,user9,user10)
console.log(emptyArray)


// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let evanNumbs = emptyArray.filter(value => !(value.id % 2));
console.log(evanNumbs)

//
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

// зробила по спадання бо по зростанню воно було спочатку
let sort = evanNumbs.sort((a, b) => b.id -a.id );
console.log(sort)

//
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
class  Client {

    constructor(id, name, surname , email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }

}

let client1 = new Client(1,'Nadya','Guchko','nadya.guchko@gmail.com','0966458447',['milk','bred','sugar','tea'] )
let client2 = new Client(2,'Olya','Onishyk','olya.onishyk@gmail.com','0985214758',['milk','bred','sugar','tea','coffee'] )
let client3 = new Client(3,'Kira','Chernachyk','kira.chernachuk@gmail.com','0504587124',['milk','bred','sugar'] )
let client4 = new Client(4,'Oleg','Lovin','oleg.lovin@gmail.com','0678547877',['milk','tea'] )
let client5 = new Client(5,'Max','Kravchuk','max.kravchuk@gmail.com','0678854741',['milk','bred','sugar','tea','choclate','fish'] )
let client6 = new Client(6,'Rostik','Kostyuk','ros.kostyk@gmail.com','0962235489',['milk','bred','sugar','tea'] )
let client7 = new Client(7,'Sasha','Kaidan','sasha.kaidan@gmail.com','0678995858',['sugar','tea'] )
let client8 = new Client(8,'Vitya','Kmin','vitya.kmin@gmail.com','0974141257',['tea'] )
let client9 = new Client(9,'Valera','Silchyk','valera.silchyk@gmail.com','0992588841',['milk','bred','sugar'] )
let client10 = new Client(10,'Lena','Kravec','lena.kracec@gmail.com','0958899966','milk','sugar','tea','meat','candy','cake','coffee' )

let emptyArr = [];
emptyArr.push(client1,client2,client3,client4,client5,client6,client7,client8,client9,client10);
console.log(emptyArr)


// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort//
let clientSort=emptyArr.sort((a,b)=> a.order.length - b.order.length );
console.log(clientSort)

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
function Car (model, producer,year,speedMax,engineCapacity ) {
    this.model=model;
    this.producer=producer;
    this.year=year;
    this.speedMax=speedMax;
    this.engineCapacity=engineCapacity;


// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
this.drive = function (){
    console.log(`їдемо зі швидкістю ${speedMax}`);
};

// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
    this.info = function (){
        for (let key in this) {
            if(typeof this[key] !=='function')
                console.log(`${key}-${this[key]}`)
        }
    };
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
    this.increaseMaxSpeed =function (newSpeed) {
        this.speedMax=this.speedMax + newSpeed
        console.log()
    };

// -- changeYear (newValue) - змінює рік випуску на значення newValue
    this.changeYear = function (newValue) {
        this.year = newValue;
    };

// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
    this.addDriver = function (driver){
        this.driver = driver;
    };
}

let addCar = new Car ('volkswagen','Germany',2011,250,2.0)
console.log(addCar);
addCar.drive();
addCar.info();
addCar.increaseMaxSpeed(25);
addCar.drive();
addCar.changeYear(2022);
addCar.info();
addCar.addDriver('Vitya');
console.log(addCar)

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:









class Cars {
    constructor(model, country, year, speedMax, engineCapacity) {
        this.model = model;
        this.country = country;
        this.year = year;
        this.speedMax = speedMax;
        this.engineCapacity = engineCapacity;
    }

    // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
    drive () {
        console.log(`їдемо зі швидкістю ${this.speedMax}km на годину`);
    }

    // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
    info () {
        for (let element in this) {
            console.log(`${element}-${this[element]}`)
        }
    };

    // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed

    increaseMaxSpeed (newSpeed) {
        this.speedMax = this.speedMax + newSpeed
    };
    // -- changeYear (newValue) - змінює рік випуску на значення newValue

    changeYear (newValue) {
        this.year = newValue;
    };

    // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

    addDriver (driver) {
        this.driver = driver;
    };
}
let addCars = new Cars ('Volvo',
    'Sweden',2020,300,2.8);
console.log(addCars);
addCars.info();
addCars.increaseMaxSpeed(20);
addCars.drive();
addCars.changeYear(2021);
addCars.info();
addCars.addDriver('Anna');
console.log(addCars)


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

class  Popelyshka {
    constructor(name,age,footsize) {
        this.name=name;
        this.age=age;
        this.footsize=footsize;
    }
}

let princess = [
    new Popelyshka ('Katya',25,37),
    new Popelyshka ('Sonya',28,36),
    new Popelyshka ('Daria',33,39),
    new Popelyshka ('Eva',29,38),
    new Popelyshka ('Varya',26,40),
    new Popelyshka ('Iryna',28,37),
    new Popelyshka ('Olena',31,38),
    new Popelyshka ('Inna',29,37),
    new Popelyshka ('Oly',32,36),
    new Popelyshka ('Sonya',30,35)
]
console.log(princess)

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Princ  {
    constructor (name,age,shoes) {
        this.name=name;
        this.age=age;
        this.shoes=shoes;
    }
}
let princ = new Princ('Valera', 33, 35);
console.log(princ)


//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
let Lover = (princess,princ)=>{
    for (let item of princess) {
        if(item.footsize===princ.shoes) {
            return item.name;
        }
    }
};
console.log(Lover(princess,princ))

//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

let princeska = princess.find(item=>item.footsize===princ.shoes);
console.log(princeska)