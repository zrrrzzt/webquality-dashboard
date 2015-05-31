'use strict';

var React = require('react');
var Firebase = require('firebase');
var ShowStatus = require('../../elements/showStatus');
var ShowScore = require('../../elements/showScore');
var config = require('../../config');
var sites = config.SITES;
var fbUrl = config.FIREBASE_URL + config.FIREBASE_DB;

var App = React.createClass({
  getInitialState: function() {
    return {data:{}};
  },
  componentWillMount: function() {
    this.firebaseRef = new Firebase(fbUrl);
    this.firebaseRef.on("value", function(dataSnapshot) {
      var data = dataSnapshot.val();
      console.log(data);
      this.setState({
        data: data
      });
    }.bind(this));
  },
  render: function(){
    var self = this;
    return (
      <div>
        <table>
          <thead>
          <tr>
            <th className="explain">Factor</th>
            {sites.map(function(site){
              return <th className="explain">{site.name}</th>;
            })}
          </tr>
          </thead>
          <tbody>
          <tr>
            <td className="explain">Valid html</td>
            {sites.map(function(site){
              return <ShowStatus data={self.state.data} filter="html" instance={site.id}></ShowStatus>;
            })}
          </tr>
          <tr>
            <td className="explain">Accessibility</td>
            {sites.map(function(site){
              return <ShowStatus data={self.state.data} filter="wcag" instance={site.id}></ShowStatus>;
            })}
          </tr>
          <tr>
            <td className="explain">Speed desktop</td>
            {sites.map(function(site){
              return <ShowStatus data={self.state.data} filter="desktopSpeed" instance={site.id}></ShowStatus>;
            })}
          </tr>
          <tr>
            <td className="explain">Speed mobile</td>
            {sites.map(function(site){
              return <ShowStatus data={self.state.data} filter="mobileSpeed" instance={site.id}></ShowStatus>;
            })}
          </tr>
          <tr>
            <td className="explain">User experience mobile</td>
            {sites.map(function(site){
              return <ShowStatus data={self.state.data} filter="mobileUX" instance={site.id}></ShowStatus>;
            })}
          </tr>
          <tr>
            <td className="explain">Total quality</td>
            {sites.map(function(site){
              return <ShowScore data={self.state.data} instance={site.id}></ShowScore>;
            })}
          </tr>
          </tbody>
        </table>
  </div>
  );
  }
});

React.render(
  <App />,
  document.getElementById('app')
);