module.exports = function transform(arr) {
  let myArr = arr;
  let length = myArr.length - 1;
  let indexDiscardNext = 0;
  let indexDiscardPrev = 0;
  let indexDoubleNext = 0;
  let indexDoublePrev = 0;
  if (Array.isArray(myArr)) {
    if (myArr.length === []) {
      return [];
    } else {
    for (let i = 0; i < myArr.length; i++) {
      switch(myArr[i]) {
        case '--discard-next':
          indexDiscardNext = myArr.indexOf(myArr[i]);
          if (indexDiscardNext === length) {
            myArr.splice(indexDiscardNext, 1)
          } else {
            myArr.splice(indexDiscardNext, 2)
          }
          break;
          case '--discard-prev':
            indexDiscardPrev = myArr.indexOf(myArr[i]);
            if (indexDiscardPrev === 0) {
              myArr.splice(indexDiscardPrev, 1);
            } else {
              myArr.splice(indexDiscardPrev - 1, 2)
            }
            break;
            case '--double-next':
              indexDoubleNext = myArr.indexOf(myArr[i]);
              if (indexDoubleNext === length) {
                myArr.splice(indexDoubleNext, 1);
              } else {
                myArr.splice(indexDoubleNext, 1, myArr[i + 1]);
              }
              break;
              case '--double-prev':
                indexDoublePrev = myArr.indexOf(myArr[i]);
              if (indexDoublePrev === 0) {
                myArr.splice(indexDoublePrev, 1);
              } else {
                myArr.splice(indexDoublePrev, 1, myArr[i - 1]);
              }
              break;              
      }
      if (myArr[i] === 'undefined') {
        myArr.splice(myArr[i], 1);
      }
    }
    
    
    




    return myArr;
  }
}
  else new Error('Error');
};
