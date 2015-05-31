'use strict';

var Firebase = require('firebase');
var config = require('../config');

function sendToFirebase(options, callback){
  if (!options) {
    return callback(new Error('Missing required param: options'), null);
  }
  if (!options.db) {
    return callback(new Error('Missing required param: options.db'), null);
  }
  if (!options.category) {
    return callback(new Error('Missing required param: options.category'), null);
  }
  if (!options.id) {
    return callback(new Error('Missing required param: options.id'), null);
  }
  if (!options.value) {
    return callback(new Error('Missing required param: options.value'), null);
  }

  var fbUrl = config.FIREBASE_URL + options.db + '/' + options.category + '/' + options.id;
  var myRootRef = new Firebase(fbUrl);
  myRootRef.set(options.value, function(err) {
    if (err) {
      return callback(err, null);
    } else {
      return callback(null, 'Firebase OK. ' + options.category + ', ' + options.id + ': ' + options.value);
    }
  });

}

module.exports = sendToFirebase;