module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let turns = Math.pow(2, disksNumber) - 1;
  let seconds = 3600/turnsSpeed*turns;
  seconds = Math.trunc(seconds);
  let user = {turns: turns, seconds: seconds};
  return user;
};
