'use strict';

var React = require('react');

function getClassName(data, filter, instance) {
  var className = 'unknown';

  if (data && data[filter] && data[filter][instance]) {
    if (parseInt(data[filter][instance], 10) === 1) {
      className = 'success';
    }

    if (parseInt(data[filter][instance], 10) === -1) {
      className = 'fail';
    }
  }

  return className;
}

function getStatusUrl(services, filter, url) {
  var statusUrl = services[filter] + url;
  return statusUrl;
}

var ShowStatus = React.createClass({
  render: function(){
    return (
      <td className={getClassName(this.props.data, this.props.filter, this.props.instance)}>
        <a href={getStatusUrl(this.props.services, this.props.filter, this.props.url)} className="linkBlock" target="_blank">&nbsp;</a>
      </td>
    )
  }
});

module.exports = ShowStatus;