var React = require('react');
var FullPortfolio = require('./FullPortfolio');

const tranformButtonStyles = {
    marginTop: '20px',
    color: "red",
};

class WebRoot extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "minimal": true
        }
    };

    clickMinimalismButton() {
        this.setState({"minimal": false});
    };

    render() {
        if (this.state.minimal) {
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
              			<button style={tranformButtonStyles} onClick={this.clickMinimalismButton.bind(this)} id="magic-site">
                                Too Minimal?
                        </button>
              			<div id="magic-site">
              			</div>
                  </div>
            );
        } else {
            return (<FullPortfolio />);
        };
    };
};

module.exports = WebRoot;
