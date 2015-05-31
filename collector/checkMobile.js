'use strict';

var gps = require('gpagespeed');
var sendToFirebase = require('./sendToFirebase');
var config = require('../config');

function checkMobile(options, callback) {
  var gpsOptions = {
    url: options.url,
    key: config.GOOGLE_API_KEY,
    userequest: true,
    apiversion: 'v3beta1',
    strategy: 'mobile'
  };
  var firebaseOptionsSpeed = {
    db: config.FIREBASE_DB,
    category: 'mobileSpeed',
    id: options.id
  };
  var firebaseOptionsUsability = {
    db: config.FIREBASE_DB,
    category: 'mobileUX',
    id: options.id
  };
  gps(gpsOptions, function(error, data) {
    if (error) {
      return callback(error, null);
    } else {
      var result = JSON.parse(data);
      var score = parseInt(result.ruleGroups.SPEED.score, 10);
      var usability = parseInt(result.ruleGroups.USABILITY.score, 10);
      console.log('Finished checking mobileSpeed for ' + options.id + ': ' + score);
      console.log('Finished checking mobileUX for ' + options.id + ': ' + usability);
      if (score < 90) {
        firebaseOptionsSpeed.value = -1;
      } else {
        firebaseOptionsSpeed.value = 1;
      }
      if (usability < 90) {
        firebaseOptionsUsability.value = -1;
      } else {
        firebaseOptionsUsability.value = 1;
      }
      sendToFirebase(firebaseOptionsSpeed, function(err, msgSpeed){
        if (err) {
          return callback(err, null);
        } else {
          sendToFirebase(firebaseOptionsUsability, function(er, msgUsability){
            if (er) {
              return callback(er, null);
            } else {
              var msg = msgSpeed + '\n' + msgUsability;
              return callback(null, msg);
            }
          })
        }
      })
    }
  });
  console.log('Running desktopSpeed check of ' + options.id);
}

module.exports = checkMobile;