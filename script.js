'use strict';

// 1) Создать массив arr = []
// — Записать в него 7 любых многозначных чисел в виде строк
// — Вывести в консоль только те, что начинаются с цифры 2 или 4 (Должны присутствовать в массиве)

const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
}

const inputArray = function (elemCount) {
  let arr = [];
  let elem;
  for (let i = 0; i < elemCount; i++) {
    do {
      elem = prompt(`Введите ${i + 1}-й элемент массива (он должtн быть многозначным положительным числом). (ESC/Отмена завершит выполнение программы)`);
      if (elem === null)
        return [];
    } while (!isNumber(elem) || elem <= 0 || elem.trim().length < 2);
    arr.push(elem.trim()); // элементы - строки без концевых пробелов, которые м.б. преобразованы в многозначное число
  }
  return arr;
}

let arrayOfString = inputArray(7);

if (arrayOfString.length > 0) {
  console.log("Исходный массив: " + arrayOfString);
  console.log("Числа, начинающиеся с 2 и 4: ");

  // 1-й способ:  
  for (let i = 0; i < arrayOfString.length; i++) {
    if (arrayOfString[i].startsWith('2') || arrayOfString[i].startsWith('4')) {
      console.log(arrayOfString[i]);
    }
  }

  console.log("\n");
  // 2-й способ:
  for (const el of arrayOfString) {
    if (el.startsWith('2') || el.startsWith('4'))
      console.log(el);
  }

  console.log("\n");
  // 3-й способ:
  console.log(arrayOfString.filter(el => el.startsWith('2') || el.startsWith('4')));
}

// ---------------------------------------------------
// 2) Вывести в столбик все простые числа от 1 до 100 (сделать при помощи цикла).
//    Рядом с каждым числом написать оба делителя данного числа. Например: “Делители этого числа: 1 и n”

const isPrime = function (num) {
  for (let i = 2, limit = Math.sqrt(num); i <= limit; i++) {
    if (num % i == 0)
      return false;
  }
  return true;
}

console.log("Простые числа в диапазоне от 1 до 100: ");

for (let num = 2; num < 101; num++) {
  if (isPrime(num))
    console.log(num + "  Делители этого числа: 1 и " + num);
}