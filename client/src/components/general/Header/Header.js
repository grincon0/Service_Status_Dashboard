import React from 'react';

const headerStyle = {
    background: '-moz-linear-gradient(90deg, rgba(0,255,252,1) 0%, rgba(8,199,222,1) 21%, rgba(0,255,115,1) 100%)',
    background: '-webkit-linear-gradient(90deg, rgba(0,255,252,1) 0%, rgba(8,199,222,1) 21%, rgba(0,255,115,1) 100%)',
    background: 'linear-gradient(90deg, rgba(0,255,252,1) 0%, rgba(8,199,222,1) 21%, rgba(0,255,115,1) 100%)',
    color: '#ffffff',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    height: '1%',
    fontSize: "20px",
    padding: "0"
    
}

const textStyle = {
    margin: '10px',
    fontWeight: '900'
}

const Header = () => {


    return(
        <header style={headerStyle}>
            <p style={textStyle}>Status Report</p>
        </header>
    )
}

export default Header;