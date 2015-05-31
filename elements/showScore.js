'use strict';

var React = require('react');
var config = require('../config');
var score = config.SCORE;

function getScore(data, instance) {
  var html = 0;
  var wcag = 0;
  var mobileSpeed = 0;
  var mobileUX = 0;
  var desktopSpeed = 0;

  if(data && data['html'] && data['html'][instance]) {
    if (parseInt(data['html'][instance], 10) === 1) {
      html = score['html'];
    }
  }

  if(data && data['wcag'] && data['wcag'][instance]) {
    if (parseInt(data['wcag'][instance], 10) === 1) {
      wcag = score['wcag'];
    }
  }

  if(data && data['mobileSpeed'] && data['mobileSpeed'][instance]) {
    if (parseInt(data['mobileSpeed'][instance], 10) === 1) {
      mobileSpeed = score['mobileSpeed'];
    }
  }

  if(data && data['mobileUX'] && data['mobileUX'][instance]) {
    if (parseInt(data['mobileUX'][instance], 10) === 1) {
      mobileUX = score['mobileUX'];
    }
  }

  if(data && data['desktopSpeed'] && data['desktopSpeed'][instance]) {
    if (parseInt(data['desktopSpeed'][instance], 10) === 1) {
      desktopSpeed = score['desktopSpeed'];
    }
  }

  return html + wcag + mobileSpeed + mobileUX + desktopSpeed;
}

var ShowScore = React.createClass({
  render: function(){
    return (
      <td className="score">
        {getScore(this.props.data, this.props.instance)} %
      </td>
    )
  }
});

module.exports = ShowScore;