module.exports = function repeater(str, options) {
  const stringForRepeater = String(str);
  let repeatTimes = 0;
  let separator = "+";
  let addition = ""
  let additionRepeatTimes = 0
  let additionSeparator = "|"
  for (var key in options) { // перебор массива и инициализация переменных
    if (key == "repeatTimes") repeatTimes = options[key]
    else if (key == "separator") separator = options[key]
    else if (key == "addition") addition = options[key]
    else if (key == "additionRepeatTimes") additionRepeatTimes = options[key]
    else if (key == "additionSeparator") additionSeparator = options[key]
  }
  function repeatForAddition(str, n, separator) { // повторяет подстроку с addition
    var new_str = ""
    while (n-- > 1) new_str += str + separator
    return (new_str += str)
  }
  function repeatForStr(str, n, strAfterAdd, separator) { // повторяет строку с добавление подстроки
    var new_str = ""
    while (n-- > 1) new_str += str + strAfterAdd + separator
    return (new_str += str + strAfterAdd)
  }
  const strAfterAdd = repeatForAddition(addition, additionRepeatTimes, additionSeparator)
  return repeatForStr(stringForRepeater, repeatTimes, strAfterAdd, separator)
}
