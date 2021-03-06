import React from 'react';

class HelpScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div>~ $ help</div>
                <div>clear - clears the terminal</div>
                <div>help - shows list of commands</div>
                <div>cat filename - shows contents of file</div>
                <div>rm -rf / - bring up traditional resume</div>
                <div>ls - list available files</div>
            </div>
        );
    }
};

module.exports = HelpScreen;
