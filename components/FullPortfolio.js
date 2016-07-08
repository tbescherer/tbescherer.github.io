var React = require('react');

const colorPalette = {
    feather: '#77C9D4',
    marine: '#57BC90',
    forest: '#015249',
    gray: '#A5A5AF',
    white: '#FFFFFF',
};

const portfolioStyles = {
    width: '900px',
    margin: 'auto',
    height: '100%',
    backgroundColor: colorPalette.feather,
    color: colorPalette.white,
};

class FullPortfolio extends React.Component {
    render() {
        return (
            <div style={portfolioStyles}>
                hello
            </div>
        );
    }
};

module.exports = FullPortfolio;
