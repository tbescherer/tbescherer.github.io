var React = require('react')

const WebRoot = React.createClass({
  render() {
    return (
      <div style={{width: '100%', height: '100%'}}>
        <h4 id="header">
  				Tom Bescherer ["bɛʃɛrərərər"]
  			</h4>
        <div id="autobiography">
  			</div>
  			<div id="main">
  				I develop the Web.
  			</div>
  			<div id="employment">
  				I attended <a href="http://appacademy.io">App Academy.</a>
  				I am an Engineer at <a href="http://offerpop.com">Offerpop.</a>
  			</div>
  			<div id="external-links">
  				Check me out on <a href="http://github.com/tbescherer">Github.</a>
  				Or read a few of my <a href="http://twitter.com/TomBescherer">Rare Tweets.</a>
  			</div>
  			<div id="magic-transformation">
  				Click this button to enact a <button id="magic" onclick="magic()">Magic Transformation</button>
  			</div>
  			<div id="magic-site">
  			</div>
      </div>
    );
  }
});

module.exports = WebRoot;
