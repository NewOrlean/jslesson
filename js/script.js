// console.log(1);
// ввод строгих правил при написании кода, чтобы  не допускать ошибок  между различиями старой и новой версий js
"use strict"; 

// let number = 5;
// const leftBorderWidth = 1;


// number = 10;
// console.log(number);


// const obj = {
//     a: 50
// };

// obj.a = 10;

// console.log(obj);

// // console.log(names);
// // var names = 'Ivan';

// {
//   var result = 50;  
// }

// console.log(result);

// let number = 4.6; // число

// console.log(-4/0); // бесконечность  = инфинити
// console.log('string'*9); //Nan  = Not a number = не число

// const persone = 'Alex Seletkov'; // строка 


// const bool = true; // булевый тип переменной

// console.log(something); // тип null - когда этого не существует

// let und;
// console.log(und);

// Объект
// const obj = {
//    names:"John",
//    age: 25,
//     isMarried: false
// };

// console.log(obj.names);

// // массивы (array)

// let arr = ['plum.png', 'orange.jpg', 6, 'apple.bmp', {}, [] ];

// console.log(arr [1]);
// console.log(arr [5]);

// Lesson 2.4
// alert('hello');

// const result = confirm("Are you here?");
// console.log(result);

// const answer = +prompt("Вам есть 18?", "18");
// // console.log(typeof(answer));
// console.log(answer+5);

// const answers = [];

// answers[0] = prompt('Как ваше имя?', '');
// answers[1] = prompt('Как ваша фамилия?', '');
// answers[2] = prompt('Сколько вам лет?', '');


// console.log(typeof(answers));
// console.log(typeof(null)); // ошибка в самом js. тянется со старой версии, никакой это не объект, надо запомнить

// chapter 2. lesson 5. 
// const category = 'toys';
// console.log(`https://someurl.com/${category}/5`);

// const user = "Ivan"
// alert(`Привет, ${user}`);

// chapter 2. lesson 6.

// console.log ('arr' + " - object");
// console.log (4 + +"5");

// let incr = 10,
//     decr = 10;

// incr++;
// decr--;

// console.log (++incr); // префиксная форма - сначала прирощение-убавление, потом вывод
// console.log (--decr); 

// console.log (incr++); // постфиксная форма - сначала вывод, потом прирощение-убавление
// console.log (decr--); 

// console.log (5%2);

// // console.log(2*4 == 8);
// console.log((2 + 2) * 2 == 8);

// const isChecked  = false,
//       isClose = false;

// // console.log(isChecked && isClose);
// console.log(isChecked || !isClose);

// chapter 2. lesson 9.1
// const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?");


// const personalMovieDB  = {
//     count:numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// const a = prompt('Один из последних просмотренных фильмов?', ''),
//       b = prompt('На сколько оцените его?', ''),
//       c = prompt('Один из последних просмотренных фильмов?', ''),
//       d = prompt('На сколько оцените его?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);

// chapter 2. lesson 10 условие
// if (4 == 4) {
//     console.log(`Ok!`);
// }
    // Тернарный оператор
// const num = 50;
// (num === 50) ? console.log('Ok!') : console.log('Error');

//     //switch
// switch (num) {
//     case 49: 
//         console.log('false');
//     break;
//     case 100: 
//         console.log('false');
//     break;
//     case 50: 
//         console.log('TRUE');
//     break;
//     default:
//         console.log('GO GO!');
//     break;
// }
// chapter 2. lesson 11 циклы
// let num = 50;
// // while (num < 55){
// //     console.log(num);
// //     num++;
// // }

// // do {
// // console.log(num);
// // num++;
// // }
// // while (num < 55);
// for (let i=1; i<8; i++) {
//     if (i===6) {
//         // break;
//         continue;
//     }
//     console.log(i);
// }

// chapter 2. lesson 12.2
// const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?");


// const personalMovieDB  = {
//     count:numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// for (let i = 0; i<2; i++) {
//     const   a = prompt('Один из последних просмотренных фильмов?', ''),
//             b = prompt('На сколько оцените его?', '');
//     if (a != null && a != '' && b != null && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');}
//         else {
//         console.log('error');
//         i--;}
// }

// let f = personalMovieDB.count;
// if (f < 10) {
//     console.log('Просмотренно довольно мало фильмов');
// } else if (f >= 10 && f < 30) {
//     console.log('Вы классический зритель');
// } else if (f >= 30) {
//     console.log('Вы киноман');
// } else {
//     console.log('Ошибка');
// }
// 
// console.log(personalMovieDB);

// chapter 2. lesson 13

// function ShowFirstMessage (text) {
//     console.log(text);
// }

// ShowFirstMessage("hui"); 

//funtion declaration
// function calc(a, b) {
//     return(a+b); // возврат суммы двух аргументов во внешний мир
// }

// console.log(calc(4, 3));
// console.log(calc(5, 6));
// console.log(calc(7, 8));


// function ret() {
//     let num = 50;
//     return num; // возврат num во внешний мир
// }

// const anotherNum = ret();
// console.log(anotherNum);


// //function expression
// const logger = function(){
//     console.log('Go! Go!');
// };

// logger(); 

// //стрелочная функция

// const calc = (a,b) => a+b;

// chapter 2. lesson 14 

// Работа с подстрокой

// const str = "TeSt";
// const arr = [1, 2, 4];

// // console.log(str.length);
// console.log(arr[1]);
// console.log(str.toLowerCase());
// console.log(str);


// const fruit = "Hello world!";

// console.log(fruit.indexOf("q"));

// const logg = "Hello world!"; 

// console.log(logg.slice(3,7)); // метод slice

// console.log(logg.substring (6, 11)); // метод substring

// // Работа с числами

// const num = 12.2;

// console.log(Math.round(num));

// const test = "12.2px";
// console.log(parseInt(test));
// console.log(parseFloat(test));


// chapter 2. lesson 15 - практика 3
let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms) ) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');    
    }
}
start();

const personalMovieDB  = {
    count:numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i<2; i++) {
        const   a = prompt('Один из последних просмотренных фильмов?', ''),
                b = prompt('На сколько оцените его?', '');
        if (a != null && a != '' && b != null && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');}
            else {
            console.log('error');
            i--;}
    }
}

rememberMyFilms();

function detectPersonalLevel () {
    let f = personalMovieDB.count;
    if (f < 10) {
        console.log('Просмотренно довольно мало фильмов');
    } else if (f >= 10 && f < 30) {
        console.log('Вы классический зритель');
    } else if (f >= 30) {
        console.log('Вы киноман');
    } else {
        console.log('Ошибка');
    }
}

detectPersonalLevel ();

// function showMyDB () {
//    if (personalMovieDB.privat) {
//     console.log(personalMovieDB);
//    } else {
//     console.log("hui");
//    }
// }

function writeYourGenres() { 
    for (let i = 1; i <=3; i++) {
        const genre = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres[i-1] = genre;
    }
}
writeYourGenres();

function showMyDB (hidden) {
       if (!hidden) {
        console.log(personalMovieDB);
       } 
}
showMyDB(personalMovieDB.privat);

