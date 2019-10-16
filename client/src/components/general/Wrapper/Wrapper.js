import React from 'react';

const wrapperStyle = {
    minHeight: '100vh',
    marginRight: 'auto',
    marginLeft: 'auto',
    maxWidth: '960px'

    
}

const Wrapper = (props) => {

    return(
        <div style={wrapperStyle}>
            {props.children}
        </div>
    )
}



export default Wrapper;