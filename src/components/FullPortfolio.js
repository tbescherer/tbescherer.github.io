var React = require('react');
import {colorPalette, fullPortfolioStyle} from '../constants';

class FullPortfolio extends React.Component {
    render() {
        return (
            <div style={fullPortfolioStyle}>
                <div className="heading" style={{fontSize: '24px', backgroundColor: colorPalette.forest, color: 'white', display: 'block',
                padding: '20px',}}>
                    <div>I'm Tom Bescherer: a programmer.</div>
                    {/*<img style={{width: '200px'}} src="https://scontent-ord1-1.xx.fbcdn.net/v/t1.0-9/11027516_10204714508802935_7582819730109685739_n.jpg?oh=43a1c23a93949141c3dac43f0e4193f9&oe=582AA0E7" />*/}

                </div>
                <div style={{textAlign: 'left', padding: '20px'}}>
                    <div className="skills">
                        <div style={{fontWeight: 'bold', fontSize: '20px', paddingBottom: '10px'}}>Skills</div>
                        <div>Python</div>
                        <div>React/Redux</div>
                        <div>MySQL/PostGresSQL</div>
                    </div>
                    <div className="links" style={{paddingTop: '20px'}}>
                        <div style={{fontWeight: 'bold', fontSize: '20px', paddingBottom: '10px'}}>Links</div>
                        <div>I attended <a href="http://appacademy.io">App Academy.</a></div>
                        <div>I am an Engineer at <a href="http://offerpop.com">Offerpop.</a></div>
                        <div>Check me out on <a href="http://github.com/tbescherer">Github.</a></div>
      				    <div>Or read a few of my <a href="http://twitter.com/TomBescherer">Rare Tweets.</a></div>
                    </div>
                </div>
            </div>
        );
    }
};

module.exports = FullPortfolio;
