import React from 'react';

import './Loading.css';


const loadingContainerStyle = {
    width:'100%',
    height: '400px',
   
}
const LoadingIndicator = () => (
    <div style={loadingContainerStyle}>
        <div className="lds-ring">
            <div />
            <div />
            <div />
            <div />
        </div>
    </div>

);

export default LoadingIndicator;