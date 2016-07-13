var React = require('react');
var FullPortfolio = require('./FullPortfolio');
import MinimalPortfolio from './MinimalPortfolio.js';

const tranformButtonStyles = {
    marginTop: '20px',
    color: "red",
};

class WebRoot extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "minimal": false
        }
        this.switchResume = this.switchResume.bind(this);
    };

    switchResume() {
        this.setState({"minimal": !this.state.minimal});
    };

    render() {
        if (this.state.minimal) {
            return (
                  <MinimalPortfolio switchResume={this.switchResume} />
            );
        } else {
            return (<FullPortfolio switchResume={this.switchResume} />);
        };
    };
};

module.exports = WebRoot;
