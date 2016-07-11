import React from 'react';
import {colorPalette, terminalInputStyles} from '../constants';

class TerminalInput extends React.Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }
    handleChange(event) {
        this.props.onUserInput(
            event.target.value
        )
    }
    handleKeyPress(e){
        if (e.key === 'Enter') {
            this.props.evaluateInput();
        };
    }

    render() {
        return (
            <div>
                <span>~ $ </span>
                <input
                    value={this.props.userInput}
                    style={terminalInputStyles}
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress}
                    type="text"
                    autoFocus={true}
                />
            </div>
        );
    }
};

module.exports = TerminalInput;
