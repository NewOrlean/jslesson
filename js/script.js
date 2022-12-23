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
const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?");

const personalMovieDB  = {
    count:numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;


console.log(personalMovieDB);
