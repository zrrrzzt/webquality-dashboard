'use strict';

var validator = require('html-validator');
var sendToFirebase = require('./sendToFirebase');
var config = require('../config');

function countErrors(messages) {
  var errors = 0;
  messages.forEach(function(msg) {
    if (msg.type === 'error') {
      errors++;
    }
  });
  return errors;
}

function checkHtml(options, callback) {
  var validatorOptions = {
    url: options.url,
    format: 'json'
  };
  var firebaseOptions = {
    db: config.FIREBASE_DB,
    category: 'html',
    id: options.id
  };
  console.log('Running html check of ' + options.id);
  validator(validatorOptions, function(error, data){
    if (error) {
      return callback(error, null);
    } else {
      var errors = countErrors(data.messages);
      console.log('Finished checking html for ' + options.id + ': ' + errors);
      if (errors > 0) {
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

module.exports = checkHtml;