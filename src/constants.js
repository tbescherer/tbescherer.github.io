export const colorPalette = {
    feather: '#77C9D4',
    marine: '#57BC90',
    forest: '#015249',
    gray: '#A5A5AF',
    white: '#FFFFFF',
    terminalGreen: '#32CD32',
    red: '#B8160E',
    black: '#000000'
};

export const minimalPortfolioStyle = {
    maxWidth: '900px',
    margin: 'auto',
    height: '100%',
    backgroundColor: 'black',
    color: colorPalette.terminalGreen,
    textAlign: 'left',
    paddingLeft: '5px',
    paddingTop: '10px',
    overflow: 'scroll',
    fontFamily: 'courier'
};

export const fullPortfolioStyle = {
    maxWidth: '900px',
    margin: 'auto',
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
    color: 'black',
    fontFamily: 'arial'
};

export const terminalInputStyles = {
    backgroundColor: 'black',
    color: colorPalette.terminalGreen,
    fontSize: '14px',
    border: '0px solid',
    outline: 'none',
    width: '90%'
}

export const supportedInputs = {
    'clear': '',
    'help': '',
    'rm -rf /': '',
    'ls': '',
    'cat work_history.txt': '',
    'cat personal.txt': '',
    'cat links.txt': ''
}

export const keycodes = {
    ENTER: 13,
    UP: 38,
    DOWN: 40,
    TAB: 9
}
