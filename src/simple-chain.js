const chainMaker = {
  str: [],
  getLength() {
    return this.str.length;
  },
  addLink(value) {
    this.str.push(value);// добавляет value в str
    return this; 
  },
  removeLink(position) {
    if (position <= 0 || position > this.str.length) {
      this.str = [];
      throw new Error();
    }
    this.str.splice(position - 1, 1);//удаляет с индексом position - 1
    return this;
  },
  reverseChain() {
    this.str.reverse();
    return this;
  },
  finishChain() {
    let net = `( ${this.str[0]} )`; //добавляет нулевой элемент строки с пробелами
    for (let i = 1; i < this.str.length; i++) {
      net += `~~( ${this.str[i]} )`; //если элементов в строке больше чем один, то добавляем ~~ и элемент с пробелами
    }
    this.str = [];
    return net;
  },
};

module.exports = chainMaker;
