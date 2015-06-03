'use strict';

var config = {
  FIREBASE_URL: 'your-firebase-url',
  FIREBASE_DB: 'your-firebase-db',
  ACHECKER_ID: 'your-achecker-api-key',
  GOOGLE_API_KEY: 'your-google-api-key',
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