module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error();
  }
  myArr = [];
  let iNext;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "--discard-next") {
      iNext = i + 1;
      i++;//не записываем в новый массив элемент равный строке "--discard-next" и пропускаем следующее заначение
    } else if (arr[i] === "--discard-prev") {
      if (myArr.length && iNext !== i - 1) {
        myArr.pop(); //Метод pop() удаляет последний элемент из массива и возвращает его значение.
      }
    } else if (arr[i] === "--double-prev") {
      if (myArr.length && iNext !== i - 1) { // проверяем вот такую ситуацию [1, 2, 3, "--discard-next", 4, "--double-prev", 5], 
        myArr.push(myArr[myArr.length - 1]); // когда элемент 4 уже удален и "--double-prev" ничего не удваивает
      }
    } else if (arr[i] === "--double-next") {
      if (i < arr.length - 1) {
        myArr.push(arr[i + 1]); //Метод push() добавляет один или более элементов в конец массива и возвращает новую длину массива.
      }
    } else {
      myArr.push(arr[i]);
    }
  }
  return myArr;
};
