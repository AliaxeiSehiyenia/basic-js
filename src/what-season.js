module.exports = function getSeason(date) {
  const error = "Unable to determine the time of year!";
  if (!date) {
    return error;
  }
  if (Date.prototype.isPrototypeOf(date)) {
    let month = date.getUTCMonth(); 
    /* Метод getUTCMonth() возвращает месяц указанной даты по всемирному координированному времени,
     нумерация месяцев начинается с нуля для первого месяца в году. */
    if ((month >= 0 && month <= 1) || month == 11) {
      return "winter";
    } else if (month >= 2 && month <= 4) {
      return "spring";
    } else if (month >= 5 && month <= 7) {
      return "summer";
    } else if (month >= 8 && month <= 10) {
      return "autumn";
    } else {
      return error;
    }
  } else {
    throw new Error();
  }
};
