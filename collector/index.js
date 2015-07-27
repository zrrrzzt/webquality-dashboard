'use strict';

var checkWcag = require('./checkWcag');
var checkDesktop = require('./checkDesktop');
var checkMobile = require('./checkMobile');
var checkHtml = require('./checkHtml');
var config = require('../config');
var sites = config.SITES;
var jobsTotal = 4;
var jobsDone = 0;
var pauseTime = 1500;

function areWeDoneYet() {
  jobsDone ++;
  if (jobsDone === jobsTotal) {
    next();
  }
}

function handleResponse(error, message) {
  if (error) {
    console.error(error);
  } else {
    console.log(message);
  }
  areWeDoneYet();
}

function checkSite() {
  setTimeout(function delayMe() {
    var site = sites.pop();
    checkWcag(site, handleResponse);
    checkDesktop(site, handleResponse);
    checkMobile(site, handleResponse);
    checkHtml(site, handleResponse);
  }, pauseTime);
}

function weAreFinished() {
  console.log('Finished! kthxbye...');
  process.exit(0);
}

function next() {
  if(sites.length > 0) {
    jobsDone = 0;
    checkSite();
  } else {
    weAreFinished();
  }
}

next();