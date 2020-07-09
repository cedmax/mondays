var mondays = require("../index");

test("isMonday", () => {
  var date = new Date(2017, 0, 30);
  expect(mondays.isMonday(date)).toBe(true);

  date = new Date(2017, 0, 31);
  expect(mondays.isMonday(date)).toBe(false);

  date = new Date(2017, 0, 23);
  expect(mondays.isMonday(date)).toBe(true);
});

test("getNextMonday", () => {
  var date = new Date(2017, 0, 30);
  expect(mondays.getNextMonday(date)).toEqual(new Date(2017, 1, 6));

  date = new Date(2017, 0, 31);
  expect(mondays.getNextMonday(date)).toEqual(new Date(2017, 1, 6));

  date = new Date(2017, 1, 6);
  expect(mondays.getNextMonday(date)).toEqual(new Date(2017, 1, 13));
});

test("getPrevMonday", () => {
  var date = new Date(2017, 0, 30);
  expect(mondays.getPrevMonday(date)).toEqual(new Date(2017, 0, 23));

  date = new Date(2017, 0, 31);
  expect(mondays.getPrevMonday(date)).toEqual(new Date(2017, 0, 30));

  date = new Date(2017, 0, 23);
  expect(mondays.getPrevMonday(date)).toEqual(new Date(2017, 0, 16));
});

test("daysUntilMonday", () => {
  var date = new Date(2017, 0, 30);
  expect(mondays.daysUntilMonday(date)).toBe(7);

  date = new Date(2017, 0, 31);
  expect(mondays.daysUntilMonday(date)).toBe(6);

  date = new Date(2017, 1, 6);
  expect(mondays.daysUntilMonday(date)).toBe(7);
});

test("daysSinceMonday", () => {
  var date = new Date(2017, 0, 30);
  expect(mondays.daysSinceMonday(date)).toBe(7);

  date = new Date(2017, 0, 31);
  expect(mondays.daysSinceMonday(date)).toBe(1);

  date = new Date(2017, 0, 23);
  expect(mondays.daysSinceMonday(date)).toBe(7);
});
