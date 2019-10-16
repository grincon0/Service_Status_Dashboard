import React from 'react';
import "./style.css"

const spanStyleLeft ={
    paddingLeft: '30px'
}

const runningStyle= {
    color: '#43e630',
    paddingRight: '30px',
    fontWeight: '800'
}

const offlineStyle = {
    color: '#e63f30',
    paddingRight: '30px',
    fontWeight: '800'
}



const Vendor = (props) => {
    const handleSeviceStatus = (isRunning) => {
        
        if(isRunning){
            return runningStyle;
        }else{
            return offlineStyle;
        }
    }

    return (
        <div className={`vendor-block`}>
                <span style={spanStyleLeft}>{props.name || 'null'}</span>
                <span operational={props.operational} style={handleSeviceStatus(props.operational)}>{props.status || 'null'}</span>
        </div>
    );
}

export default Vendor;