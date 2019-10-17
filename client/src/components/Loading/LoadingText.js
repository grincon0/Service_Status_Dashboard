import React from 'react';
import './Loading.css';

const textStyle = {
    color: 'black',
    fontSize: '20px',
    paddingLeft: '25px',
    position: 'relative',
    top: '10px'
}
const LoadingText = React.memo((props) => {
    return (
        <div>
             {props.loadStatus !== 'DONE' && <span style={textStyle} className='loading-text'>Fetching results...</span>}
        </div>
    )
});

export default LoadingText;