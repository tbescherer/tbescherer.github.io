var React = require('react');
import {colorPalette, fullPortfolioStyle} from '../constants';

class FullPortfolio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showAbout: true,
            showProjects: false,
            showContact: false
        };
    }
    renderAppropriateSection() {
        if (this.state.showAbout) {
            return this.renderAbout();
        } else if (this.state.showSkills) {
            return this.renderSkills();
        } else if (this.state.showContact) {
            return this.renderContact();
        }
    }
    renderAbout() {
        return (
            <div>
                <div>
                    <div>Hey! Thanks for taking an interest in me.</div>
                    <div>Or if you ended up here by accident, wow, how did that happen?</div>
                </div>
                <div className="links" style={{paddingTop: '20px'}}>
                    <ul>
                        <li style={{fontWeight: 'bold'}}>Here are the facts:</li>
                        <li>I attended <a href="http://appacademy.io">App Academy.</a></li>
                        <li>I am an Engineer at <a href="http://offerpop.com">Offerpop.</a></li>
                        <li>Check me out on <a href="http://github.com/tbescherer">Github.</a></li>
                        <li>Or read a few of my <a href="http://twitter.com/TomBescherer">Rare Tweets.</a></li>
                    </ul>
                </div>
            </div>
        )
    }

    renderSkills(){
        return (
            <div>
                <div className="skills">
                    <div>Python</div>
                    <div>React/Redux</div>
                    <div>MySQL/PostGreSQL</div>
                    <div>Agile Workflow</div>
                    <div>Communication</div>
                </div>
            </div>
        );
    }

    renderContact() {
        return (
            <div>
                <a style={{display: 'block'}} href="mailto:tbescherer@gmail.com">Email Me!</a>
                <a style={{display: 'block'}} href="https://www.linkedin.com/in/tbescherer">Check me out on LinkedIn</a>
                <a style={{display: 'block'}} href="">Read My Blog</a>
            </div>);
    }

    render() {
        return (
            <div style={fullPortfolioStyle}>
                <div className="heading" style={{backgroundColor: colorPalette.red, color: 'white', display: 'block', height: '200px', textAlign: 'left', position: 'relative'}}>
                    <div style={{float: 'left', height: '50%', width: '100%'}}>
                        <div style={{paddingLeft: '20px', margin: 'auto', height: '100%', maxWidth: '900px', position: 'relative'}}>
                            <div style={{fontSize: '42px', paddingTop: '60px'}}>Tom Bescherer</div>
                            <img id="my-face" style={{width: '200px', position: 'absolute', top: '0px', right: '0px', zIndex: '1'}} src="https://scontent-ord1-1.xx.fbcdn.net/v/t1.0-9/11027516_10204714508802935_7582819730109685739_n.jpg?oh=43a1c23a93949141c3dac43f0e4193f9&oe=582AA0E7" />
                        </div>
                    </div>
                    <div style={{float: 'left', position: 'relative', height: '50%', width: '100%', backgroundColor: 'black'}}>
                        <div style={{height: '100%', paddingLeft: '20px', margin: 'auto', paddingBottom: '5px', fontSize: '24px', paddingTop: '70px', maxWidth: '900px'}}>
                            <div>
                                <span style={(this.state.showAbout ? {backgroundColor: 'white', color: 'black'} : {})} className="header-links" onClick={() => {this.setState({showAbout: true, showSkills: false, showContact: false})}}>About</span>
                            </div>
                            <div>
                                <span style={(this.state.showSkills ? {backgroundColor: 'white', color: 'black'} : {})} className="header-links" onClick={() => {this.setState({showAbout: false, showSkills: true, showContact: false})}}>Skills</span>
                            </div>
                            <div>
                                <span style={(this.state.showContact ? {backgroundColor: 'white', color: 'black'} : {})} className="header-links" onClick={() => {this.setState({showAbout: false, showSkills: false, showContact: true})}}>Contact</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{textAlign: 'left', paddingTop: '20px', paddingLeft: '20px', maxWidth: '900px', margin: 'auto'}}>
                    {this.renderAppropriateSection()}
                </div>
                <div>
                    <span style={{display: 'block', paddingTop: '60px'}}>To see this site as a terminal prompt, click here:</span>
                    <button onClick={this.props.switchResume}>Switch To Terminal Mode</button>
                </div>
            </div>
        );
    }
};

module.exports = FullPortfolio;
