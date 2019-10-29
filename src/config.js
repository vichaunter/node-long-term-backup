"use strict";

const config = {
  debug: true,
  // total number of copies to keep for each mode (0 = none)
  totals: {
    daily: 7,
    weekly: 4,
    monthly: 12
  },
  //day of week to store the weekly copy (0 = sunday)
  weekDay: 0,
  //day of month to store the monthly copy
  monthDay: 1,
  //relative path to folders where the files are stored
  folders: {
    base: "../incremental", //base folder where are original files
    daily: "../daily",
    weekly: "../weekly",
    monthly: "../monthly"
  }
};

module.exports = config;
