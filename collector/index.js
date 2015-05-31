'use strict';

var checkWcag = require('./checkWcag');
var checkDesktop = require('./checkDesktop');
var checkMobile = require('./checkMobile');
var checkHtml = require('./checkHtml');
var config = require('../config');
var sites = config.SITES;
var jobsTotal = sites.length * 4;
var jobsDone = 0;

function areWeDoneYet() {
  jobsDone ++;
  if (jobsDone === jobsTotal) {
    console.log('Finished! kthxbye...');
    process.exit(0);
  }
}

sites.forEach(function(site){
  checkWcag(site, function(error, message) {
    if (error) {
      console.error(error);
    } else {
      console.log(message);
    }
    areWeDoneYet();
  });
  checkDesktop(site, function(error, message) {
    if (error) {
      console.error(error);
    } else {
      console.log(message);
    }
    areWeDoneYet();
  });
  checkMobile(site, function(error, message) {
    if (error) {
      console.error(error);
    } else {
      console.log(message);
    }
    areWeDoneYet();
  });
  checkHtml(site, function(error, message) {
    if (error) {
      console.error(error);
    } else {
      console.log(message);
    }
    areWeDoneYet();
  });
});