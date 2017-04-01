var nextDay = require('next-day');
var prevDay = require('prev-day');

module.exports = {
  isMonday: function(date) {
    var date = date || new Date;
    return date.getDay() === 1;
  },
  getNextMonday: function(date) {
    date = date || new Date;
    return nextDay(date, 1).date;
  },
  getPrevMonday: function(date) {
    date = date || new Date;
    return prevDay(date, 1).date;
  },
  daysUntilMonday: function(date) {
    date = date || new Date;
    return nextDay(date, 1).dayLeft;
  },
  daysSinceMonday: function(date) {
    date = date || new Date;
    return prevDay(date, 1).daySince;
  },
}