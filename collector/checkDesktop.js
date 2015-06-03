'use strict';

var gps = require('gpagespeed');
var sendToFirebase = require('./sendToFirebase');
var config = require('../config');

function checkDesktop(options, callback) {
  var gpsOptions = {
    url: options.url,
    key: config.GOOGLE_API_KEY,
    userequest: true,
    apiversion: 'v3beta1',
    strategy: 'desktop'
  };
  var firebaseOptions = {
    db: config.FIREBASE_DB,
    category: 'desktopSpeed',
    id: options.id
  };
  gps(gpsOptions, function(error, data) {
    if (error) {
      return callback(error, null);
    } else {
      var result = JSON.parse(data);
      var score = parseInt(result.ruleGroups.SPEED.score, 10);
      console.log('Finished checking desktopSpeed for ' + options.id + ': ' + score);
      if (score < 85) {
        firebaseOptions.value = -1;
      } else {
        firebaseOptions.value = 1;
      }
      sendToFirebase(firebaseOptions, function(err, msg){
        if (err) {
          return callback(err, null);
        } else {
          return callback(null, msg);
        }
      })
    }
  });
  console.log('Running desktopSpeed check of ' + options.id);
}

module.exports = checkDesktop;