
let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];

// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.

for (let item of users){
    let divCity = document.createElement('div');
    divCity = ` ${item.address.city} `;
    let divCountry = document.createElement('div');
    divCountry = ` ${item.address.country} `;
    let divStreet  = document.createElement('div');
    divStreet = `${ item.address.street}`;
    let divHouseNumb = document.createElement('div');
    divHouseNumb = item.address.houseNumber;


    let emptyArr = document.createElement('div');
    emptyArr.classList.add('view')
    emptyArr.append(divCity,divCountry,divStreet,divHouseNumb)
    document.body.append(emptyArr)
}
document.body.appendChild(document.createElement('hr'))


// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
// Всі данні в одному блоці.

for (let value of users) {
    let div2 = document.createElement('div');
    div2.classList.add('date')
    div2.append(`${value.name} - ${value.age} - ${value.status} - ${value.address.street}`)

    document.body.appendChild(div2)
}
document.body.appendChild(document.createElement('hr'))

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
// розділивши всі властивості по своїм блокам (div>div*4)

for (let item of users) {
    let userDiv = document.createElement('div');
    userDiv.classList.add('view')

    let nameDiv = document.createElement('div');
    nameDiv.innerText = `${item.name}`;

    let ageDiv = document.createElement('div');
    ageDiv.innerText = `${item.age}`;

    let statusDiv = document.createElement('div');
    statusDiv.innerText = `${item.status}`;

    let addresaDiv = document.createElement('div');
    addresaDiv.innerText = `address`;


    userDiv.append(nameDiv, ageDiv, statusDiv, addresaDiv);
    document.body.appendChild(userDiv)
}

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
// розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості
//
for (let item of users) {
    let userDiv = document.createElement('div');
    userDiv.classList.add('view')

    let nameDiv = document.createElement('div');
    nameDiv.innerText = `${item.name}`;

    let ageDiv = document.createElement('div');
    ageDiv.innerText = `${item.age}`;

    let statusDiv = document.createElement('div');
    statusDiv.innerText = `${item.status}`;

    let addresaDiv = document.createElement('div');
    addresaDiv.innerHTML = `address:`;

    for (let key in item.address) {
        let listAddress = document.createElement('div');
        listAddress.classList.add('list');
        listAddress.innerText = `${key}: ${item.address[key]}`;

        addresaDiv.appendChild(listAddress);
    }

    userDiv.append(nameDiv, ageDiv, statusDiv, addresaDiv);
    document.body.appendChild(userDiv)
}