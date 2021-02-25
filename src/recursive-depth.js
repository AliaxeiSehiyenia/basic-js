module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let depth = 1;
    for (let i = 0; i <= arr.length; i++) {
      let count = 1;
      if (Array.isArray(arr[i])) {
        count += this.calculateDepth(arr[i]);
        /* на каждом элементе массива вызывается ркурсивно метод calculateDepth и count увеличивается.
        затем если count больше depth, то depth присваивается заначение count. Если нет то depth и есть 
        максимальная глубина массива  */
        depth = Math.max(count, depth);
      }
    }
    return depth;
  }
};
