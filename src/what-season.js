module.exports = function getSeason(date) {
  /* if (date instanceof Date) { */
  if (date != null) {
  if (date.getMonth() >= 0 && date.getMonth() <= 1) {
  return 'winter';
  }
  else if (date.getMonth() >= 2 && date.getMonth() <= 4) {
  return 'spring';
  }
  else if (date.getMonth() >= 5 && date.getMonth() <= 7) {
  return 'summer';
  }
  else if (date.getMonth() == 11) {
  return 'winter';
  }
  else {
  return 'autumn';
  }
}
/* else if (!(date instanceof Date)) {
  return 'THROWN';
} */
else {
  return 'Unable to determine the time of year!';
}
  /* } */
/* else {
  expect(test).to.throw(error);;
} */
};
