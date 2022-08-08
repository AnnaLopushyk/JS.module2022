//
// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

let numMin = (a,b,c)=> {
    if (a<b && a<c) {
        console.log('min ', a);
    } else  if (b<a && b<c) {
        console.log('min ',b);
    } else {
        console.log('min ',c);
    }
}
numMin(20,30,40)


// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

let numMax =(a,b,c)=> {
    if (a>b && a>c) {
        console.log('max ', a);
    } else if (b>a && b>c) {
        console.log('max ', b);
    } else  {
        console.log('max ',c);
    }
}
numMax(100,50,75)



// - створити функцію яка повертає найбільше число з масиву

let numbs = [10500,21020,35400,230,540,600];
let turnNumbMax =(numbs)=> {
    let max = numbs[0];
    for (let keyNumb of numbs) {
        if (keyNumb>max) {
            max=keyNumb;
            return max;
        }
    }
}
let result =turnNumbMax(numbs);
console.log(result)


// - створити функцію яка повертає найменьше число з масиву

let arr = [472,7236,236,140,234,134,1000];
let turnNumbMin =(arr)=> {
    let min = arr[0];
    for (let key of arr) {
        if (key<min) {
            min=key;
            return min;
        }
    }
}
let res =turnNumbMin(arr);
console.log(res)


// - Дано натуральное число n. Выведите все числа от 1 до n.
//
isNaturNumb =(...arrayNumb)=> {
    let n =0;
    for (let i=0; i<arrayNumb.length; i++) {
        n=arrayNumb[i]
        console.log(n)
    }
}
isNaturNumb(1,2,3,4,5,6,7,8,9,10);

// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания,
// если A < B, или в порядке убывания в противном случае.
//
let array=[22,30,45,42,52,84,93];

enterNumbs=(A,B)=> {
    for (let i of array) {
        if(A<B) {
            A = i + 1;
            console.log(A)
        }
        if (A>B) {
            B= B-i;
            console.log(B)
        }
    }
}
enterNumbs(20,85);
//

// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]


foo=[9,8,0,4];

let fnAcceptArray = (array,numb)=> {

        for (let i = 0; i < foo.length-1; i++) {
            numb = i+1
            array[i]=array[i+1];
            let array2=array[i]
            console.log(array)
        }
  }
 fnAcceptArray(foo,0);

// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]


// let numbArr = [1, 0, 6, 0, 3];
// let newArray = (...array)=> {
//     for (let i = 0; i < newArray.length; i++) {
//         if(i === 0){
//             let array22 =[]
//
//
//
//         }
//     }
//
// }
// newArray(numbArr)