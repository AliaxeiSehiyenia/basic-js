module.exports = function createDreamTeam(members) {
  if (Array.isArray(members)) {
    let arrLetters = [];
    let regexp = /\w/g;
    for (let i = 0; i < members.length; i++) {
      if (typeof members[i] === "string") {
        let stringWithoutSpace = members[i].match(regexp);
        arrLetters.push(stringWithoutSpace[0]);
      }
    }
    for (let k = 0; k < arrLetters.length; k++) {
      arrLetters[k] = arrLetters[k].toUpperCase();
    }

    return arrLetters.sort().join("").toUpperCase();
  } else {
    return false;
  }
};
