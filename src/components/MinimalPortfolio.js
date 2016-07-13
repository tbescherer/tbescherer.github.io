var React = require('react');
import LoadingScreen from './LoadingScreen';
import TerminalInput from './TerminalInput';
import HelpScreen from './HelpScreen';
import {paletteColors, minimalPortfolioStyle} from '../constants';

class MinimalPortfolio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInput: '',
            displaySections: [this.renderLoadingScreen.bind(this)],
            showTerminal: false
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.evaluateInput = this.evaluateInput.bind(this);
        this.renderResume = this.renderResume.bind(this);
        this.mountTerminal = this.mountTerminal.bind(this);
    }

    handleInputChange(value) {
        this.setState({userInput: value});
    }

    mountTerminal() {
        this.setState({showTerminal: true});
    }

    evaluateInput() {
        let newSections = this.state.displaySections.slice();
        switch(this.state.userInput) {
            case 'help':
                newSections.push(this.renderHelpScreen);
                break;
            case 'clear':
                newSections = [];
                break;
            case 'ls':
                newSections.push(this.renderListScreen);
                break;
            case 'cat personal.txt':
                newSections.push(this.renderPersonal);
                break;
            case 'cat work_history.txt':
                newSections.push(this.renderWork);
                break;
            case 'cat links.txt':
                newSections.push(this.renderLinks);
                break;
            case 'rm -rf /':
                this.renderResume()
                break;
            case 'rm -rf/':
                this.renderResume()
                break;
            case 'rm-rf':
                this.renderResume()
                break;
            case 'rm-rf/':
                this.renderResume()
                break;
            default:
                newSections.push(this.renderError);
        };
        this.setState({displaySections: newSections});
        this.setState({userInput: ''});
    }

    renderLoadingScreen() {
        return (<LoadingScreen mountTerminal={this.mountTerminal}/>)
    }

    renderError() {
        return (
            <div>That isn't a valid command</div>
        )
    }

    renderPersonal() {
        return (
            <div>
                <div>~ $ cat personal.txt</div>
                <div>
                    I live in New York City (Bushwick, to be precise).
                </div>
            </div>
        )
    }

    renderWork() {
        return (
            <div>
                <div>~ $ cat work.txt</div>
                <div>
                    <div>Currently I am a Software Engineer at Offerpop.</div>
                    <div>My Skills Include: Python, React/Redux, SQL.</div>
                    <div>Check out my <a href="http://www.github.com/tbescherer">Github</a></div>
                </div>
            </div>
        )
    }

    renderLinks() {
        return (
            <div>
                <div>~ $ cat links.txt</div>
                <div>
                    <div>You can contact me at tbescherer@gmail.com</div>
                    <div>Or by placing an add on any major podcast</div>
                </div>
            </div>
        )
    }

    renderListScreen() {
        return (
            <div>
                <div>~ $ ls</div>
                <span style={{paddingRight: '20px'}}>personal.txt</span>
                <span style={{paddingRight: '20px'}}>work.txt</span>
                <span style={{paddingRight: '20px'}}>links.txt</span>
            </div>
        )
    }

    renderHelpScreen() {
        return (<HelpScreen />)
    }

    renderCustomSections() {
        return (
            <div>
                {this.state.displaySections.map(function(sectionRenderer) {
                    return sectionRenderer()
                })}
                {this.state.showTerminal ?
                <TerminalInput
                    userInput={this.state.userInput}
                    onUserInput={this.handleInputChange}
                    evaluateInput={this.evaluateInput}
                /> : null }
            </div>
        );
    }

    renderResume() {
        this.props.switchResume()
    }

    render() {
        return (
            <div style={minimalPortfolioStyle}>
                {this.renderCustomSections()}
            </div>
        );
    }
};

module.exports = MinimalPortfolio;
