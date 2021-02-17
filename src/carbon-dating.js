module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity === 'string' && sampleActivity === 'undefined') {
    let age = 0;
    let ratioContent = 0;
    ratioContent = 15 / Number(sampleActivity);
    age = Math.log(ratioContent) / Math.log(2) * 5730;
    return Math.ceil(age);
  }
  else return false;
};
