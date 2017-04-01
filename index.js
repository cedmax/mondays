var nextDay = require('next-day');
var prevDay = require('prev-day');
var MONDAY = 1;

module.exports = {
  isMonday: function(date) {
    date = date || new Date;
    return date.getDay() === MONDAY;
  },
  getNextMonday: function(date) {
    date = date || new Date;
    return nextDay(date, MONDAY).date;
  },
  getPrevMonday: function(date) {
    date = date || new Date;
    return prevDay(date, MONDAY).date;
  },
  daysUntilMonday: function(date) {
    date = date || new Date;
    return nextDay(date, MONDAY).dayLeft;
  },
  daysSinceMonday: function(date) {
    date = date || new Date;
    return prevDay(date, MONDAY).daySince;
  },
}