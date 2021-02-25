module.exports = function countCats(matrix) {
  let number = 0
  const ears = "^^"

  function Search(elementArrs) {
    for (let elementArr of elementArrs) {
      if (elementArr == ears) {
        number = number + 1
      }
    }
  }
  matrix.forEach(Search) // выполняет указанную функцию один раз для каждого элемента в массиве.
  return number
};
