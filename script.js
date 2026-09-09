'use strict';

// 1) Выведите на страницу текущую дату и время в 2-х форматах:
//   a) 'Сегодня Вторник, 4 февраля 2020 года, 21 час 5 минут 33 секунды'
//   б) '04.02.2020 - 21:05:33'
// 2) Для вывода в формате (а) напишите функцию, которая будет менять склонение слов в зависимости от числа, "час, часов, часа"
// 3) Для вывода в формате (б) напишите функцию, которая будет добавлять 0 перед значениями которые состоят из одной цифры (из 9:5:3 1.6.2019 сделает 09:05:03 01.06.2019)
// 4) С помощью функции setInterval, реализуйте обновление даты и времени каждую секунду

const daysOfWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

/**
 * Функция выбора одной из 3-х возможных строк (переданных в параметрах one, two, five), следующей после num и зависящей от значения num (выбор последующей строки в нужном падеже)
 * @param {number} num - числовое значение, от которого зависит, в каком падеже будет последующая строка
 * @param {*} one - строка, следующая за числами, оканчивающимися на 1 (кроме 11) 
 * @param {*} two - строка, следующая за числами, оканчивающимися на 2,3,4 (кроме 12, 13, 14) 
 * @param {*} five - строка, следующая за всеми остальными числами, включая 11, 12, 13, 14
 * @returns {string} - одна из 3-х строк, переданных в параметрах one, two, five
 */
function getCorrespondingValue(num, one, two, five) {
  num %= 100;

  if (num >= 5 && num <= 20) {
    return five;
  };

  num %= 10;

  if (num === 1) {
    return one;
  };

  if (num >= 2 && num <= 4) {
    return two;
  };

  return five;
};

/**
 * Функция добавления 0 перед значениями, которые состоят из одной цифры
 * @param {number} num - число из даты в диапазоне 1..31
 * @returns {string} - число в виде строки из двух символов
 */
function addStartZero(num) {
  return num < 10 ? '0' + num : num;
};

function updateDateTime() {
  console.clear();

  const now = new Date();
  const dayOfWeek = daysOfWeek[now.getDay()] // .getDay() возвращает порядковый номер дня недели (нумерация с нуля, 0 ~ воскресенье)
  const day = now.getDate();
  const month = now.getMonth(); // порядковый номер месяца (нумерация с нуля, 0 ~ январь)
  const year = now.getFullYear();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  console.log(`Сегодня ${dayOfWeek}, ${day} ${months[month]} ${year} года, ${hours} ${getCorrespondingValue(hours, "час", "часа", "часов")} ${minutes} ${getCorrespondingValue(minutes, "минута", "минуты", "минут")} ${seconds} ${getCorrespondingValue(seconds, "секунда", "секунды", "секунд")}`);
  console.log(`${addStartZero(day)}.${addStartZero(month + 1)}.${year} - ${addStartZero(hours)}:${addStartZero(minutes)}:${addStartZero(seconds)}`);
};

setInterval(updateDateTime, 1000);