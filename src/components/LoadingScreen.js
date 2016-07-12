import React from 'react';

class LoadingScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        }
        this.tick = this.tick.bind(this);
    }
    componentDidMount() {
        this.timer = setInterval(this.tick, 1000);
    }
    componentWillUnmount() {
        clearInterval(this.timer);
    }
    tick() {
        this.setState({count: this.state.count + 1})
        if (this.state.count > 6) {
            this.props.mountTerminal();
            clearInterval(this.timer);
        };
    }
    render() {
        const loadingStyles = Object.assign(
            {
            },
            this.props.styles
        )
        return (
            <div style={loadingStyles}>
                <div>Loading...</div>
                  {this.state.count >=1 ? <div>Hotswapping Buzzwords...</div> : null}
                  {this.state.count >=2 ? <div>Adding more magic to the numbers...</div> : null}
                  {this.state.count >=4 ? <div>Rewriting in latest Javascript framework...</div> : null }
                <br/>
                {this.state.count >=5 ? (<div><div>To see available data on Tom Bescherer, enter "ls".</div><div>For a more traditional personal site, enter "rm -rf /".</div><div>For more options, enter "help".</div><div> ...And to get it out of the way, no, this is not a fully functional terminal.</div></div>) : null }
            </div>
        );
    }
};

module.exports = LoadingScreen;
