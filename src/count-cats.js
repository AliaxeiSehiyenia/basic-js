module.exports = function countCats(matrix) {
  var number = 0
  const ears = "^^"

  function Search(ElementArr) {
    for (var i = 0; i < ElementArr.length; i++) {
      if (ElementArr[i] == ears) {
        number = number + 1
      }
    }
  }
  matrix.forEach(Search) // выполняет указанную функцию один раз для каждого элемента в массиве.
  return number
};
