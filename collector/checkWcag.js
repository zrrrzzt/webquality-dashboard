'use strict';

var wcag = require('wcag');
var sendToFirebase = require('./sendToFirebase');
var config = require('../config');

function checkWcag(options, callback) {
  var wcagOptions = {
    uri: options.url,
    id: config.ACHECKER_ID
  };
  var firebaseOptions = {
    db: config.FIREBASE_DB,
    category: 'wcag',
    id: options.id
  };
  console.log('Running wcag check of ' + options.id);
  wcag(wcagOptions, function(error, report){
    if (error) {
      callback(error, null);
    } else {
      console.log('Finished checking wcag for ' + options.id + ': ' + report.status);
      if (report.status === 'FAIL') {
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
}

module.exports = checkWcag;