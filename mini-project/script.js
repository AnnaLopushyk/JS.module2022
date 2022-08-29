// В index.html
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html,
// котра має детальну інфорацію про об'єкт на який клікнули




fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(response => response.json())
    .then(users =>  {
        for (let user of users) {

            let divUser = document.createElement('div');
            divUser.classList.add('user');

            let divId = document.createElement('div');
            divId.innerText = `id: ${user.id}`;

            let divName = document.createElement('div');
            divUser.innerText = `name: ${user.name}`;

            let btnDetails = document.createElement('button');
            let linkDetails = document.createElement('a');
            linkDetails.classList.add('linkDetails')
            linkDetails.innerText = 'user details';
            linkDetails.href = `user-details.html?id=${user.id}`;

            btnDetails.appendChild(linkDetails);


            divUser.append(divId, divName, btnDetails)
            document.body.append(divUser)

            }
        });




