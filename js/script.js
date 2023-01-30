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
// let numberOfFilms;

// function start() {
//     numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');
//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms) ) {
//         numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');    
//     }
// }
// start();

// const personalMovieDB  = {
//     count:numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// function rememberMyFilms() {
//     for (let i = 0; i<2; i++) {
//         const   a = prompt('Один из последних просмотренных фильмов?', ''),
//                 b = prompt('На сколько оцените его?', '');
//         if (a != null && a != '' && b != null && b != '' && a.length < 50) {
//             personalMovieDB.movies[a] = b;
//             console.log('done');}
//             else {
//             console.log('error');
//             i--;}
//     }
// }

// rememberMyFilms();

// function detectPersonalLevel () {
//     let f = personalMovieDB.count;
//     if (f < 10) {
//         console.log('Просмотренно довольно мало фильмов');
//     } else if (f >= 10 && f < 30) {
//         console.log('Вы классический зритель');
//     } else if (f >= 30) {
//         console.log('Вы киноман');
//     } else {
//         console.log('Ошибка');
//     }
// }

// detectPersonalLevel ();

// // function showMyDB () {
// //    if (personalMovieDB.privat) {
// //     console.log(personalMovieDB);
// //    } else {
// //     console.log("hui");
// //    }
// // }

// function writeYourGenres() { 
//     for (let i = 1; i <=3; i++) {
//         const genre = prompt(`Ваш любимый жанр под номером ${i}`);
//         personalMovieDB.genres[i-1] = genre;
//     }
// }
// writeYourGenres();

// function showMyDB (hidden) {
//        if (!hidden) {
//         console.log(personalMovieDB);
//        } 
// }
// showMyDB(personalMovieDB.privat);

// // chapter 2. lesson 16 - Callback функция
// function learnJS (lang, callback) {
//     console.log(`Я учу: ${lang}`);
//     callback();
// }

// // learnJS ('Javascript', function() {
// //     console.log('Я прошёл этот урок!');  
// // });

// function done () {
//     console.log('Я прошёл этот урок!');  
// }

// learnJS ('Javascript', done);

// // chapter 2. lesson 17
// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest: function() { //встраваем метод в объект
//         console.log("Test");
//     }
// }; 

// options.makeTest();

// console.log(Object.keys(options).length);// встроенные свойства в объекте

// //вытаскиваем переменные 
// const {border, bg} = options.colors;

// console.log(border);


// console.log(options["colors"]["border"]);

// console.log(options.name);

// delete options.name;

// console.log(options);

// for (let key in options) {
//     console.log(`Свойства ${key} имеет заечние ${options[key]}`);
// }

//перебор внутри обекта options .а затем внутри colors 
// let counter = 0;
// for (let key in options) {
//     if (typeof(options [key]) === 'object') { // внутри colors
//         for (let i in (options [key])) {
//             console.log(`Свойства ${key} имеет заечние ${options[key][i]}`);  
//             }
//     } else {
//         console.log(`Свойства ${key} имеет заечние ${options[key]}`);
//     }
//     counter++;
// }
// console.log(counter);

// chapter 2. lesson 18 Массивы и псевдомассивы 
// const arr = [1, 12, 3, 16];
// arr[99] = 0;
// // arr.pop(); //убрать элемент в конце массива
// // arr.push(10);  //добавить элемент в конце массива
// console.log(arr.length);
// console.log(arr);

// arr.forEach(function (item, i, arr){
//    console.log(`${i}: ${item} внутри массива ${arr}`) 
// });


// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let value of arr) {
//     console.log(value);
// }

// например обработка пакета данных которые пришли строкой и надо всё это запихнуть в массив
// const str = prompt("","");
// const products = str.split(", ");
// // console.log(products);
// products.sort();

// console.log(products.join(';')); //данные из массива выводятся в строку 

// сортировка. но как string
// const arr = [1, 3, 2, 10, 5, 4]
// arr.sort(compareNum);
// console.log(arr);

// // сортировка. но как число
// function compareNum (a, b) {
//     return a - b;
// }

// chapter 2. lesson 19 Передача по ссылке или по значению

// передача по значению
// let a = 5,
//     b = a;

// b = b + 5;

// console.log(b);
// console.log(a);

// передача по ссылке - тут изменили в copy, а данные по сссылке улетели в obj
// const obj = {
//     a: 5,
//     b: 1
// };

// const copy = obj;

// copy.a = 10;
// console.log(obj);
// console.log(copy);

// создание копий 

// function copy (mainObj) {
//      let objCopy = {}; // создание пустого объекта
     
//      let key; //обявили ключ
//      for (key in mainObj) {  //  перебор key в mainObj
//         objCopy[key] = mainObj[key];   
//      }
//      return objCopy;
// } 


// const numbers = {
//     a:2,
//     b:5,
//     c: {
//         x:7,
//         y:4
//     }
// };

// const newNumbers = copy(numbers);

// newNumbers.a = 10;  

// console.log(newNumbers);
// console.log(numbers);

//  //соединение двух объектов

//  const add ={
//     d:17,
//     e:20
//  };

//  console.log(Object.assign(numbers, add ));

//  //другой вариант копирования объекта 9 (поверхностная копия)

// const clone = Object.assign({}, add);
// clone.d = 'hui';
// console.log(add);
// console.log(clone);

// // создание копии масива
// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice();
// newArray [0] = 'hui';
// console.log(newArray);
// console.log(oldArray);

//копия через оператор разворота spread
// const video = ['youtube', 'vimeo', 'rutube'],
//         blogs = ['wordpress', 'livejounal', 'blogger'],
//         internet = [...video, ...blogs, 'vk', 'facebook']; 

// console.log(internet);

// //ещё пример
// function log (a, b, c) {
//     console.log(a);
//     console.log(b);  
//     console.log(c);
// }

// const num = [2, 5, 7];

// log(...num);

//spread оператор
// const array = ["a", "b"];

// const newAarray = [...array];

// const q = {
//     one: 1,
//     two: 2
// };

// const newObj = {...q};

// console.log(newAarray);
// console.log(newObj);

// chapter 2. lesson 20 Основы ООП, прототипно ориенторованное программирование)

// все солдаты
// const soldier = {
//     health: 400,
//     armor: 100,
//     sayHello: function() {
//         console.log("Hello!");
//     }
// };

// //конкретный солдат

// const john = {
//     health: 100,
// }; 

// // нужно описать джона через обычного соладата, но с особенностями (пример стары, в проектрах лучше  не юзать)

// // john.__proto__ = soldier;
// // console.log(john.armor);

// Object.setPrototypeOf(john, soldier);

// john.sayHello();


//как делают нормальные прогеры
// const john = Object.create(soldier);
// john.sayHello();

// chapter 2. lesson 21 практика 4.

// const personalMovieDB  = {
//     count:0,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,
//     start: function() {
//         personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", '');
//         while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count) ) {
//             personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", '');    
//         }
//     },
    
//     rememberMyFilms: function () {
//         for (let i = 0; i<2; i++) {
//             const   a = prompt('Один из последних просмотренных фильмов?', ''),
//                     b = prompt('На сколько оцените его?', '');
//             if (a != null && a != '' && b != null && b != '' && a.length < 50) {
//                 personalMovieDB.movies[a] = b;
//                 console.log('done');}
//                 else {
//                 console.log('error');
//                 i--;}
//         }
//     },

//     detectPersonalLevel: function () {
//         let f = personalMovieDB.count;
//         if (f < 10) {
//             console.log('Просмотренно довольно мало фильмов');
//         } else if (f >= 10 && f < 30) {
//             console.log('Вы классический зритель');
//         } else if (f >= 30) {
//             console.log('Вы киноман');
//         } else {
//             console.log('Ошибка');
//         }
//     },
    
//     //var1
//     // writeYourGenres: function () { 
//     //     for (let i = 1; i <=3; i++) {
//     //         let genre = prompt(`Ваш любимый жанр под номером ${i}`);

//     //         if (genre === '' || genre == null) { 
//     //             console.log('Некорректный ввод');   
//     //         i--;
//     //         } else { 
//     //             personalMovieDB.genres[i - 1] = genre;                
//     //         }                          
//     //     }  
        
//     //     personalMovieDB.genres.forEach (function(item, i) {  
//     //         console.log(`Любимый жанр ${i+1} - это ${item}`);
//     //     }); 
//     // },

//     //var2
//     writeYourGenres: function () { 
//         for (let i = 1; i < 2; i++) {
//             let genre = prompt(`Введите ваши любимые жанры через запятую`);

//             if (genre === '' || genre == null) { 
//                 console.log('Некорректный ввод');   
//                 i--;
//             } else { 
//                 personalMovieDB.genres = genre.split(', ');  
//                 personalMovieDB.genres.sort();          
//             }                          
//         }  
        
//         personalMovieDB.genres.forEach (function(item, i) {  
//             console.log(`Любимый жанр ${i+1} - это ${item}`);
//         }); 
//     },

//     toggleVisibleMyDB: function() {
//         if (personalMovieDB.privat) {
//             personalMovieDB.privat = false;
//         } else {
//             personalMovieDB.privat = true;
//         }
//     },

//     showMyDB: function (hidden) {
//         if (!hidden) {
//          console.log(personalMovieDB);
//         } 
//     }
// };

// chapter 2. lesson 22 отлавливаем ошибки

// function hello() {
//     console.log('Hello World!');
// }

// hello();

// function hi() {
//     console.log('Say Hi!');
// }

// hi();

// const arr = [1, 14, 4, 30, 54];
//     sorted = arr.sort(compareNum);

// function compareNum(a, b) {
//     return a - b;
// }    

// // chapter 2. lesson 23 Динамическая типизация

// //to String

// //1)

// console.log(typeof(String(5))); 

// // 2)
// console.log(typeof(5 + '')); 

// //to Number

// // 1)
// console.log(typeof(Number('4'))); 

// // 2)
// console.log(typeof(+'4')); 

// // 3)
// console.log(typeof(parseInt("15px", 10))); 
// console.log(parseInt("15px", 10)); 

// // to Boolean

// // false  Это 0, '', null, undefined, NaN

// let switcher = null;

// if (switcher) {
//     console.log('go go');
// }

// switcher = 1; 

// if (switcher) {
//     console.log('go go');
// }

// // 2)
// console.log(typeof(Boolean('4'))); 

// // 3)
// console.log(typeof(!!"4444")); 

// chapter 2. lesson 24 Задачи  для собеса

// 1)
// let x =5; alert(x++);

// // 2)
// console.log([] + false - null + true);

// // 3)
//     let y = 1;
//     let x = y = 2;
//     alert(x);
// //4)
//     console.log([] + 1 + 2);

// // 5)
// alert("1"[0]);

// 6)
// console.log(2 && 1 && null && 0 && undefined);
// "ИЛИ" запинается на на лжи и выводит элемент. где он запнулся  null
// "И" запинается на правде

// // 7)
// console.log(!!(1 && 2) === (1 && 2)); 

// 8)
// alert( null || 2 && 3 || 4);

//9)
// const a = [1, 2, 3]; 
// const b = [1, 2, 3]; 
// console.log(a == b)

// 10)

// alert(+"Infinity");

// console.log(typeof(+"Infinity"));

// 11)
// console.log("Ёжик" > "яблоко");

// 12)
// console.log(0 || "" || 2 || undefined || true || falsе);