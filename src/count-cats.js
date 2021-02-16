/* const CustomError = require("../extensions/custom-error"); */

module.exports = function countCats(matrix) {
  var number = 0;
  var ears = "^^";

  function Search(ElementArr) {
    for (var i = 0; i < ElementArr.length; i++) {
      if (ElementArr[i] == ears) {
        number = number + 1;
      }
    }
  }
  matrix.forEach(Search);
  return number;
};
