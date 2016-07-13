var React = require('react');
import {colorPalette, fullPortfolioStyle} from '../constants';

class FullPortfolio extends React.Component {
    render() {
        return (
            <div style={fullPortfolioStyle}>
                <div className="heading" style={{backgroundColor: colorPalette.red, color: 'white', display: 'block', height: '200px', textAlign: 'left'}}>
                    <div style={{float: 'left', height: '50%', width: '100%'}}>
                        <div style={{fontSize: '42px', position: 'relative', top: '60px', left: '4px'}}>Tom Bescherer</div>
                    </div>
                    <div style={{float: 'left', position: 'relative', height: '50%', width: '100%', backgroundColor: 'black'}}>
                        <div style={{paddingBottom: '5px', fontSize: '24px', position: 'relative', top: '74px', left: '4px'}}>
                            <span style={{width: '20%', display: 'block', float: 'left'}}>About</span>
                            <span style={{width: '20%', display: 'block', float: 'left'}}>Projects</span>
                            <span style={{width: '20%', display: 'block', float: 'left'}}>Contact</span>
                        </div>
                    </div>
                    <img style={{width: '200px', float: 'right', position: 'absolute', top: '0px', right: '0px'}} src="https://scontent-ord1-1.xx.fbcdn.net/v/t1.0-9/11027516_10204714508802935_7582819730109685739_n.jpg?oh=43a1c23a93949141c3dac43f0e4193f9&oe=582AA0E7" />
                </div>
                <div style={{textAlign: 'left', padding: '20px'}}>
                    <div className="skills">
                        <div style={{fontWeight: 'bold', fontSize: '20px', paddingBottom: '10px'}}>Skills</div>
                        <div>Python</div>
                        <div>React/Redux</div>
                        <div>MySQL/PostGreSQL</div>
                    </div>
                    <div className="links" style={{paddingTop: '20px'}}>
                        <div style={{fontWeight: 'bold', fontSize: '20px', paddingBottom: '10px'}}>Links</div>
                        <div>I attended <a href="http://appacademy.io">App Academy.</a></div>
                        <div>I am an Engineer at <a href="http://offerpop.com">Offerpop.</a></div>
                        <div>Check me out on <a href="http://github.com/tbescherer">Github.</a></div>
      				    <div>Or read a few of my <a href="http://twitter.com/TomBescherer">Rare Tweets.</a></div>
                    </div>
                </div>
                <div>
                    <span style={{display: 'block'}}>To see this site as a terminal prompt, click here:</span>
                    <button onClick={this.props.switchResume}>Switch To Terminal Mode</button>
                </div>
            </div>
        );
    }
};

module.exports = FullPortfolio;
