import React, {useState, useEffect} from 'react';
import './Loading.css';

const textStyle={
    color: 'black',
    fontSize: '25px'
}
const LoadingText = (props) => {
    const [loadingClass, setLoadingClass] = useState('');

    
    useEffect(()=>{
        console.log(props.loadStatus)
        switch (props.loadStatus) {
            case 'LOADING':
                setLoadingClass('loading-text');
                            
            case 'UNRESPONSIVE':
                setLoadingClass('bad-text');

            case 'DONE':
                setLoadingClass('loading-done');
            default:
                break;
        }
    }, [props.loadStatus])

    return(
 
    <span style={textStyle} className={loadingClass}>Fetching results...</span>
     
        
    )
}

export default LoadingText;