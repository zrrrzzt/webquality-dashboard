# webquality-dashboard
Dashboard to monitor the quality of your website in realtime.

It consists of 3 parts. A Firebase instance, a webpage and a script for collecting the data.

The script validates your html at [validator.w3.org/nu/](http://validator.w3.org/nu/), checks the accessibility status 
via [AChecker](http://achecker.ca/) and finally runs Google's PageSpeed Insights for mobile speed, desktop speed and mobile ux.
It returns fail or pass for every test. Which results in a red (fail) og green (pass) status in the dashboard.

## Scoring
Here are the limits to pass the test for the different areas.

**html** - 0 errors

**wcag** - PASS or CONDITIONAL PASS the wcag 2 AA standard

**mobile UX** - 85 or above

**mobile speed** - 85 or above

**desktop speed** - 85 or above

## Prerequisites
You will need to have Node.js/IO.js and npm installed.

In addition you will need a [Firebase](https://www.firebase.com/) account, an [AChecker API-key](http://achecker.ca/register.php) and an API-key for 
[Googles PageSpeed Insight](https://developers.google.com/speed/pagespeed/insights/) you obtain this from the 
[Google Developer Console](https://console.developers.google.com/)

## Installation
Clone from GitHub.

```sh
$ git clone git@github.com:zrrrzzt/webquality-dashboard.git
```

cd into the directory and run the setup script

```sh
$ npm run setup
```

## Configuration

Open config/index.js in your editor of choice and update it with your settings.

**FIREBASE_URL** The url to your Firebase instance,

**FIREBASE_DB** Your Firebase db

**ACHECKER_ID** Your API-key from AChecker

**GOOGLE_API_KEY** Your API-key for Google's PageSpeed Insight

**SITES** An array of objects for sites you want to track

Example of SITES

```javascript
SITES: [
    {
      'id' : 'osl',
      'name': 'Oslo kommune',
      'url': 'https://www.oslo.kommune.no/'
    },
    {
      'id' : 'tfk',
      'name': 'Telemark',
      'url': 'http://www.telemark.no'
    }
]
```
**SCORE** How you'll score the different parts of the test

These are the defaults
```javascript
  SCORE: {
    'html': 10,
    'wcag': 40,
    'mobileSpeed': 10,
    'mobileUX': 20,
    'desktopSpeed': 20
  }
```

## Build/Deployment
After your configuration is correct you run the build script.

```sh
$ npm run build
```

After the build is finished you can serve the contents of the distfolder from a server of your own choice.

## Collect data
To run the tests and update Firebase just run the collector.

```sh
$ npm run collector
```


## Development
If you want to do some changes in the dashboard you can spin up a development server.

```sh
$ npm run dev
```
