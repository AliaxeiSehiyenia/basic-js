module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error();
  }
  myArr = [];
  let iNext;
  for (let i = 0; i < arr.length; i++) {
    let iPrev = i - 1;
    let elemArr = arr[i];
    if (elemArr === "--discard-next") {
      iNext = i + 1;
      i++;
    } else if (elemArr === "--discard-prev") {
      if (myArr.length && iNext !== iPrev) {
        myArr.pop();
      }
    } else if (elemArr === "--double-prev") {
      if (myArr.length && iNext !== iPrev) {
        myArr.push(myArr[myArr.length - 1]);
      }
    } else if (elemArr === "--double-next") {
      if (i < arr.length - 1) {
        myArr.push(arr[i + 1]);
      }
    } else {
      myArr.push(arr[i]);
    }
  }
  return myArr;
};
