class VigenereCipheringMachine {
  constructor(value) {
    this.type = value;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error();
    }

    const latinAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let strUpper = message.toUpperCase();
    let keyUpper = key.toUpperCase();
    let result = "";
    let j = 0;

    for (let i = 0; i < strUpper.length; i++) {
      if (latinAlphabet.indexOf(strUpper.split("")[i]) !== -1) {
        let position = 0;
        position +=
          (latinAlphabet.indexOf(strUpper.split("")[i]) +
            latinAlphabet.indexOf(keyUpper.split("")[j])) %
          26; // вычисляет индекс(position) заначение которого из latinAlphabet записывается в result
        result += latinAlphabet.split("")[position];
        j >= keyUpper.length - 1 ? (j = 0) : j++;
      } else {
        result += message.split("")[i]; //добавляет пробелы из message
      }
    }

    if (this.type === undefined || this.type === true) {
      return result.toUpperCase();
    } else {
      return result.split("").reverse().join("").toUpperCase();
    } //если заначение undefuned или false переворачиваем строку
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error();
    }

    const latinAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let strUpper = encryptedMessage.toUpperCase();
    let keyUpper = key.toUpperCase();
    let result = "";
    let j = 0;

    for (let i = 0; i < strUpper.length; i++) {
      if (latinAlphabet.indexOf(strUpper.split("")[i]) !== -1) {
        let position = 0;
        position +=
          (latinAlphabet.indexOf(strUpper.split("")[i]) +
            26 -
            latinAlphabet.indexOf(keyUpper.split("")[j])) %
          26; // вычисляет индекс(position) заначение которого из latinAlphabet записывается в result
        result += latinAlphabet.split("")[position];
        j >= keyUpper.length - 1 ? (j = 0) : j++;
      } else {
        result += encryptedMessage.split("")[i];//добавляет пробелы из закодированной строки
      }
    }

    if (this.type === undefined || this.type === true) {
      return result.toUpperCase();
    } else {
      return result.split("").reverse().join("").toUpperCase();
    } //если заначение undefuned или false переворачиваем строку
  }
}

module.exports = VigenereCipheringMachine;
