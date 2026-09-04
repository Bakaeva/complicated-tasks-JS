"use strict";

// 1). Переменная lang может принимать 2 значения: 'ru' 'en'.
// Написать условия при котором в зависимости от значения lang будут выводится дни недели на русском или английском языке. Решите задачу
//   a) через if,
//   b) через switch-case
//   c) через многомерный массив без ифов и switch.

let lang = "ru";

// Используется объект, состоящий из двух пар (key, value)
const weekDays = {
  ru: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
  en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
};

//-------------------- a) через if
if (lang == "ru") {
  console.log(weekDays["ru"]);
} else if (lang == "en") {
  console.log(weekDays["en"]);
} else console.log("Недопустимое значение переменной lang");

//-------------------- b) через switch-case
switch (lang) {
  case "ru":
    console.log(weekDays["ru"]);
    break;
  case "en":
    console.log(weekDays["en"]);
    break;
  default:
    console.log("Недопустимое значение переменной lang");
}

//-------------------- c) через многомерный массив без if и switch
console.log(weekDays[lang]);


// -------------------------------------------------------------------
// 2). У нас есть переменная namePerson. Если значение этой переменной “Артем” то вывести в консоль “директор”,
// если значение “Александр” то вывести в консоль “преподаватель”, с любым другим значением вывести в консоль “студент”
// Решить задачу с помощью нескольких тернарных операторов, без использования if или switch
let namePerson = 'Петя';
let strNamePerson = String(namePerson).toLowerCase();

strNamePerson == 'артем'
  ? console.log('директор')
  : strNamePerson == 'александр'
    ? console.log('преподаватель')
    : console.log('студент');
