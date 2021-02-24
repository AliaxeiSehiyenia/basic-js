module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  const turns = Math.pow(2, disksNumber) - 1; // pow() возвращает основание возведенное в степень
  let seconds = (3600 / turnsSpeed) * turns; // Высчитываем необходимое количество времени
  seconds = Math.trunc(seconds); // Функция Math.trunc() возвращает целую часть числа путём удаления всех дробных знаков.
  let user = { turns: turns, seconds: seconds }; //создаем объект со свойствами turns и seconds
  return user; //возвращаем объект
}