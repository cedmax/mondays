var nextDay = require("next-day");
var prevDay = require("prev-day");
var MONDAY = 1;

module.exports = {
  isMonday: (date = new Date()) => date.getDay() === MONDAY,
  getNextMonday: (date = new Date()) => nextDay(date, MONDAY).date,
  getPrevMonday: (date = new Date()) => prevDay(date, MONDAY).date,
  daysUntilMonday: (date = new Date()) => nextDay(date, MONDAY).dayLeft,
  daysSinceMonday: (date = new Date()) => prevDay(date, MONDAY).daySince,
};
