module.exports = function createDreamTeam(members) {
  if (Array.isArray(members)) {
    let arrLetters = []
    for (let member of members) {
      if (typeof member === "string") {
        const stringWithoutSpace = member.trim() //без пробелов.
        arrLetters.push(stringWithoutSpace[0])
      }
    }
    for (let k = 0; k < arrLetters.length; k++) {  // Возник вопрос. Почему не работает в новом синтаксисе?
      arrLetters[k] = arrLetters[k].toUpperCase()
    } // если элементы будут с разным регистром, сортировака будет работать не коректно

    return arrLetters.sort().join("") //sort() - сравнивает в соответствии с порядком в Unicode.
  } else {
    return false
  }
}
