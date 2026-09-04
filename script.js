"use strict";

// 1) Создать переменную num со значением 266219 (тип данных число)
let num = 266219;

// 2) Вывести в консоль произведение (умножение) цифр этого числа. Правильно использовать цикл или методы перебора.
let result = 1;
String(num)
  .split("")
  .forEach((elem) => (result *= Number(elem)));
console.log(result);

// 3) Полученный результат возвести в степень 3, используя только 1 оператор (Math.pow не подходит)
result = result ** 3;
//console.log(result);

// 4) Вывести в консоль первые 2 цифры полученного числа
let firstTwoDigits = result;
while (firstTwoDigits >= 100) {
  firstTwoDigits = Math.floor(firstTwoDigits / 10);
}
// let firstTwoDigits = Number(String(result).substring(0, 2)); // более читабельный, но менее оптимизированный,способ получения первых 2-х цифр
console.log(firstTwoDigits);

//5) В отдельном репозитории для усложненных уроков, добавить папку или ветку со вторым уроком в свой репозиторий на GitHub
