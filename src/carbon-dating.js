module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity === "string" && sampleActivity === "undefined") {
    const age = 0
    let ratioContent = 0
    ratioContent = 15 / parseInt(sampleActivity) //соотношение содержания углерода-14 в живой ткани и его содержания в образце
    age = (Math.log(ratioContent) / Math.log(2)) * 5730 //t = [ln (No/Nf) / ln (2)] x t½. 5730 - период полураспада углерода-14
    return Math.ceil(age) //Округляет аргумент до ближайшего большего целого.
  } else return false
};
