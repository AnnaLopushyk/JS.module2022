
 // Все робити за допомоги js.
// - створити блок,
//
// let block = document.createElement('div');
// block.innerText = 'okten school';
// console.log(block)

//     - додати йому класи wrap, collapse, alpha, beta
// block.classList.add('wrap');
// block.classList.add('collapse');
// block.classList.add('alpha');
// block.classList.add('beta');
// console.log(block.classList)


// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.

// let divElement = document.body.appendChild(block);
// console.log(divElement)
// // - клонувати його повністю, та додати клон в body.
// let clone = document.body.appendChild(block.cloneNode(true));
// console.log(clone)

// //
// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.
//
// let array = ['Main', 'Products', 'About us', 'Contacts'];
// let menuBlock = document.getElementsByClassName('menu')[0];
// for (const item of array) {
//     let itemLi = document.createElement('li');
//     itemLi.innerText = `${item};`;
//     console.log(menuBlock)
//     menuBlock.appendChild(itemLi)
// }


// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];

// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
// for (let value of coursesAndDurationArray) {
//     let divElement = document.createElement('div');
//     let text = '';
//     for (let key in value) {
//         text += ` ${key}: ${value[key]}; `
//     }
//     divElement.innerText = text;
//     document.body.appendChild(divElement)
// }


//
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];

// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу,
// та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
//

// for (key of coursesAndDurationArray) {
//     let div2 = document.createElement('div');
//     div2.classList.add('item');
//     let h1 = document.createElement('h1');
//     h1.classList.add('heading');
//     h1.innerText = key.title
//     let p = document.createElement('p');
//     p.classList.add('description');
//     p.innerText = key.monthDuration;
//     div2.append(h1, p);
//     document.body.appendChild(div2)
//
// }

//- є масив
// let simpsons = [
//     {
//         name: 'Bart',
//         surname: 'Simpson',
//         age: 10,
//         info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
//         photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
//     },
//     {
//         name: 'Homer',
//         surname: 'Simpson',
//         age: 40,
//         info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
//         photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
//     },
//     {
//         name: 'Marge',
//         surname: 'Simpson',
//         age: 38,
//         info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
//     },
//     {
//         name: 'Lisa',
//         surname: 'Simpson',
//         age: 9,
//         info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
//     },
//     {
//         name: 'Maggie',
//         surname: 'Simpson',
//         age: 1,
//         info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
//     },
// ];
// Проітерувати його, створиши для кожного елементу масиву <div class='member'>.
// - взяти попередній масив з сімпсонами.
// Проітерувати його, створиши для кожного елементу масиву <div class='member'>.
// Для кожної властивості елементу створити окремий блок, та помістити його у div.member


// let usedDiv = document.createElement('div');
//
// for (const property of simpsons) {
//     let div = document.createElement('div');
//     div.classList.add('member');
//
//
//     let nameDiv = document.createElement('div')
//     // nameDiv.classList.add('member')
//     nameDiv.innerHTML = `Name: <strong>${property.name}</strong>`;
//
//     let surnameDiv = document.createElement('div');
//     surnameDiv.innerHTML = `Surname: <strong>${property.surname}</strong>`;
//
//     let ageDiv = document.createElement('div');
//     ageDiv.innerText = `Age: ${property.age}`;
//
//     let infoDiv = document.createElement('div');
//     infoDiv.classList.add('infoSimpsons');
//     infoDiv.innerText = property.info;
//
//     let photoDiv = document.createElement('img');
//     photoDiv.classList.add('photo');
//     photoDiv.src = property.photo
//
//
//     div.append(nameDiv, surnameDiv, ageDiv, infoDiv, photoDiv);
//     document.body.appendChild(div)
// }


// - Є масив
// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
// Створити для кожного елементу масиву свій блок, блок розділити блоками,
// в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png
//
// const container = document.createElement('div')
// container.classList.add('wrapp');
//
// for (const containerElement of coursesArray) {
//
//     let titleDiv = document.createElement('div');
//     titleDiv.classList.add('title');
//     titleDiv.innerText = containerElement.title
//
//     let durationDiv = document.createElement('div');
//     durationDiv.classList.add('duration');
//
//     let monthDurationDiv = document.createElement('div');
//     monthDurationDiv.classList.add('monthDuration');
//     monthDurationDiv.innerText = `monthDuration:   ${containerElement.monthDuration}`
//
//     let hourDurationDiv = document.createElement('div');
//     hourDurationDiv.classList.add('hourDuration');
//     hourDurationDiv.innerText = `hourDuration:   ${containerElement.hourDuration}`;
//
//     durationDiv.append(monthDurationDiv, hourDurationDiv);
//
//
//     let mainDiv = document.createElement('ul');
//     mainDiv.classList.add('main');
//     mainDiv.innerHTML ='<strong> models:</strong> ';
//
//     for (let key of containerElement.modules ){
//         let list = document.createElement('li');
//         list.classList.add('list');
//         list.innerText = key;
//
//         mainDiv.appendChild(list)
//
//     container.append(titleDiv, durationDiv,mainDiv);
//
//     document.body.appendChild(container)
// }
// }
//
// let hr = document.createElement('hr');
// document.body.appendChild(hr)
//

// - Створити довільний елемент з id = text.  Використовуючи JavaScript, зробіть так,
// щоб при натисканні на кнопку зникав елемент з id="text".

let btn = document.getElementById('btn');
btn.onclick = function () {
    let text = document.getElementById('text');
    text.hidden=true;
}

//
//
//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту
//     та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

let submit = document.getElementById('submit');
submit.onclick = function (){
    let age = document.getElementById('age').value;
    if (age<18) {
        alert('sorry, you are a child');
    } else {
        alert('you are welcome');
    }
};

// *** Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст
 // ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

//
//  let form = document.forms.f1
// form.onsubmit = function (){
//
// }


let form1 = document.forms.f1;

form1.onsubmit = function (e){
    e.preventDefault();
    rows = this.rows.value;
    columns = this.columns.value;
    textInput = this.title.value;
    console.log(rows,columns,textInput);

    //
}





