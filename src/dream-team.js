module.exports = function createDreamTeam(members) {
  if (Array.isArray(members)) {
    let arrLetters = []
    for (let i = 0; i < members.length; i++) {
      if (typeof members[i] === "string") {
        const stringWithoutSpace = members[i].trim() //без пробелов.
        arrLetters.push(stringWithoutSpace[0])
      }
    }
    for (let k = 0; k < arrLetters.length; k++) {
      arrLetters[k] = arrLetters[k].toUpperCase()
    } // если элементы будут с разным регистром, сортировака будет работать не коректно

    return arrLetters.sort().join("") //sort() - сравнивает в соответствии с порядком в Unicode.
  } else {
    return false
  }
}
