'use strict';

var checkWcag = require('./checkWcag');
var checkDesktop = require('./checkDesktop');
var checkMobile = require('./checkMobile');
var checkHtml = require('./checkHtml');
var config = require('../config');
var sites = config.SITES;

function checkSite(site) {
  var jobsTodo = 4;
  var jobsDone = 0;

  function areWeDoneYet() {
    jobsDone++;
    if (jobsDone === jobsTodo) {
      next()
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

  checkWcag(site, handleResponse);
  checkMobile(site, handleResponse);
  checkHtml(site, handleResponse);
  checkDesktop(site, handleResponse);

}

function weAreFinished() {
  console.log('Finished! kthxbye...');
  process.exit(0);
}

function next() {
  if(sites.length > 0) {
    var site = sites.pop();
    checkSite(site);
  } else {
    weAreFinished();
  }
}

next();