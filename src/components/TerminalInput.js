import React from 'react';
import {colorPalette, terminalInputStyles, supportedInputs, keycodes} from '../constants';

class TerminalInput extends React.Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.tabToComplete = this.tabToComplete.bind(this);
    }
    handleChange(event) {
        this.props.onUserInput(
            event.target.value
        )
    }

    levenshteinDistance(searchText, key) {
        let m = [], i, j, min = Math.min;

        if (!(searchText && key)) return (searchText || key).length;

        for (i = 0; i <= key.length; m[i] = [i++]);
        for (j = 0; j <= searchText.length; m[0][j] = j++);

        for (i = 1; i <= key.length; i++) {
            for (j = 1; j <= searchText.length; j++) {
                m[i][j] = key.charAt(i - 1) == searchText.charAt(j - 1)
                    ? m[i - 1][j - 1]
                    : m[i][j] = min(
                        m[i - 1][j - 1] + 1,
                        min(m[i][j - 1] + 1, m[i - 1 ][j]))
            }
        }

        return m[key.length][searchText.length];
    }

    tabToComplete(e) {
        let value = e.target.value;
        let matches = [];
        Object.keys(supportedInputs).map((key) => {

            let distance = this.levenshteinDistance(value, key);
            if (distance == 0) {
                matches.push(key);
            };
        });
        if (matches.length === 1) {
            this.handleChange({target: {value: matches[0]}});
        }

    }

    handleKeyPress(e){
        switch (e.keyCode) {
            case keycodes.ENTER:
                this.props.evaluateInput();
                break;
            case keycodes.TAB:
                e.preventDefault();
                this.tabToComplete(e);
                break;
            case keycodes.UP:
                console.log("up");
                break;
            case keycodes.DOWN:
                console.log("down")
                break;
        }
    }

    render() {
        var that = this;
        return (
            <div>
                <span>~ $ </span>
                <input
                    value={this.props.userInput}
                    style={terminalInputStyles}
                    onChange={this.handleChange}
                    onKeyDown={this.handleKeyPress}
                    type="text"
                    autoFocus={true}
                />
            </div>
        );
    }
};

module.exports = TerminalInput;
