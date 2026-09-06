'use strict';

// Создать массив week и записать в него дни недели в виде строк
// Вывести на экран все дни недели
// Каждый из них с новой строчки
// Выходные дни - курсивом
// Текущий день - жирным шрифтом(использовать объект даты)

const week = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];

let todayIndex = new Date().getDay();
todayIndex = todayIndex === 0 ? 6 : todayIndex - 1;

for (const dayIndex in week) {
  let styles = '';
  if (dayIndex >= 5) {
    styles += 'font-style: italic; ';
  };
  if (dayIndex == todayIndex) {
    styles += 'font-weight: bold; ';
  };

  console.log(`%c${week[dayIndex]}`, styles);
};
