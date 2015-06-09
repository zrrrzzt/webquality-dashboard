'use strict';

var config = {
  FIREBASE_URL: 'https://pythonia.firebaseio.com/',
  FIREBASE_DB: 'webqualitydemo',
  ACHECKER_ID: '32bab43d166df41d242aec90e6ec6c04d9eb241c',
  GOOGLE_API_KEY: 'AIzaSyAu4oe2bKCeP4AnAyo78KL_XZvrS-WVIcw',
  SITES: [
    {
      'id' : 'osl',
      'name': 'Oslo',
      'url': 'https://www.oslo.kommune.no/'
    },
    {
      'id' : 'tfk',
      'name': 'Telemark',
      'url': 'http://www.telemark.no'
    },
    {
      'id' : 'pgr',
      'name': 'Porsgrunn',
      'url': 'https://www.porsgrunn.kommune.no/'
    }
  ],
  SCORE: {
    'html': 10,
    'wcag': 40,
    'mobileSpeed': 10,
    'mobileUX': 20,
    'desktopSpeed': 20
  }
};

module.exports = config;