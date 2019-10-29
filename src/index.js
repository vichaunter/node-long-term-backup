"use strict";
const fs = require("fs");
const DateDiff = require("date-diff");

const config = require("./config.js");

const baseFolder = config.folders.base;
const dailyFolder = config.folders.daily;
const weeklyFolder = config.folders.weekly;
const monthlyFolder = config.folders.monthly;

const syncFile = (origFilePath, destFilePath) => {
  const origFileStats = fs.statSync(origFilePath);
  let destFileStats = null;
  try {
    destFileStats = fs.statSync(destFilePath);
  } catch (err) {}

  if (!destFileStats || origFileStats.size !== destFileStats.size) {
    !config.debug && fs.copyFileSync(origFilePath, destFilePath);
    return `File copied`;
  } else {
    return `Identical files`;
  }
};

fs.readdirSync(baseFolder).forEach(function(file) {
  let filePath = baseFolder + "/" + file;
  let stats = fs.statSync(filePath);
  let mtime = new Date(stats.mtime);
  let now = new Date();

  let weekDay = mtime.getDay();
  let monthDay = mtime.getDate();

  const dateDiff = new DateDiff(now, mtime);

  if (
    monthDay === config.monthDay &&
    dateDiff.months() < config.totals.monthly
  ) {
    const monthlyFileDestPath = monthlyFolder + "/" + file;
    const copyResult = syncFile(filePath, monthlyFileDestPath);
    console.log("Copying month file:", file, copyResult);
  }

  if (weekDay === config.weekDay && dateDiff.weeks() < config.totals.weekly) {
    const weeklyFileDestPath = weeklyFolder + "/" + file;
    const copyResult = syncFile(filePath, weeklyFileDestPath);
    console.log("Copying week file:", file, copyResult);
  }

  if (dateDiff.days() < config.totals.daily) {
    const dailyFileDestPath = dailyFolder + "/" + file;
    const copyResult = syncFile(filePath, dailyFileDestPath);
    console.log("Copying day file:", file, copyResult);
  }
});
