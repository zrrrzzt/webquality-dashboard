'use strict';

var checkWcag = require('./checkWcag');
var checkDesktop = require('./checkDesktop');
var checkMobile = require('./checkMobile');
var checkHtml = require('./checkHtml');
var config = require('../config');
var sites = config.SITES;

function checkSite(site) {
  var jobs = [
    checkMobile,
    checkWcag,
    checkHtml,
    checkDesktop
  ];
  function areWeDoneYet() {
    if (jobs.length > 0) {
      var job = jobs.pop();
      job(site, handleResponse);
    } else {
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
  areWeDoneYet();
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