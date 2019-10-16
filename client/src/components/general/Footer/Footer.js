import React from 'react';

const footerStyle = {
    backgroundColor: '#f5f5f5',
    color: 'rgb(9, 173, 214)',
    fontWeight: 'bold',
    fontSize: '25px',
    height: '100px'
}

const Footer = (props) => {

    return(
        <footer style={footerStyle}>{props.children}</footer>
    )

}

export default Footer;