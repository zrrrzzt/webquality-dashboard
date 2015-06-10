'use strict';

var config = {
  FIREBASE_URL: 'your-firebase-url',
  FIREBASE_DB: 'your-firebase-db',
  ACHECKER_ID: 'your-achecker-api-key',
  GOOGLE_API_KEY: 'your-google-api-key',
  SITES: [
    {
      'id' : 'ake',
      'name': 'Akershus',
      'url': 'http://www.akershus.no/'
    },
    {
      'id' : 'ausa',
      'name': 'Aust-Agder',
      'url': 'https://www.austagderfk.no/'
    },
    {
      'id' : 'vesa',
      'name': 'Vest-Agder',
      'url': 'http://www.vaf.no/'
    },
    {
      'id' : 'bus',
      'name': 'Buskerud',
      'url': 'http://www.bfk.no/'
    },
    {
      'id' : 'fin',
      'name': 'Finnmark',
      'url': 'http://www.ffk.no/'
    },
    {
      'id' : 'hed',
      'name': 'Hedmark',
      'url': 'http://www.hedmark.org/'
    },
    {
      'id' : 'hord',
      'name': 'Hordaland',
      'url': 'http://www.hordaland.no/'
    },
    {
      'id' : 'mrf',
      'name': 'Møre og Romsdal',
      'url': 'https://mrfylke.no/'
    },
    {
      'id' : 'nordl',
      'name': 'Nordland',
      'url': 'https://www.nfk.no/'
    },
    {
      'id' : 'opp',
      'name': 'Oppland',
      'url': 'http://www.oppland.no/'
    },
    {
      'id' : 'rog',
      'name': 'Rogaland',
      'url': 'http://www.rogfk.no/'
    },
    {
      'id' : 'sfj',
      'name': 'Sogn og Fjordane',
      'url': 'http://www.sfj.no/'
    },
    {
      'id' : 'tfk',
      'name': 'Telemark',
      'url': 'http://www.telemark.no'
    },
    {
      'id' : 'trms',
      'name': 'Tromsø',
      'url': 'http://www.tromsfylke.no/'
    },
    {
      'id' : 'ntfk',
      'name': 'Nord-Trøndelag',
      'url': 'http://www.ntfk.no/'
    },
    {
      'id' : 'stfk',
      'name': 'Sør-Trøndelag',
      'url': 'http://www.stfk.no/'
    },
    {
      'id' : 'vfk',
      'name': 'Vestfold',
      'url': 'https://www.vfk.no'
    },
    {
      'id' : 'ost',
      'name': 'Østfold',
      'url': 'http://www.ostfold-f.kommune.no/'
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