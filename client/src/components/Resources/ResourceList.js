import React, { useState, useEffect, useMemo, useCallback } from 'react';
import Vendor from './Vendor';
import './style.css';

const sectionStyle = {
    backgroundColor: '#f5ffff',
    border: '1px solid #b0ffff',
    borderRadius: '8px',
    marginBottom: '15px',
    marginTop: '40px',
    overflow: 'hidden'
}

const headerStyle = {
    paddingLeft: '20px',
    fontWeight: '700',
    fontSize: '50px'
}


const ResourceList = props => {

    const [vendorData, setVendor] = useState([]);
    const [vendorElements, setElements] = useState(null)
    const [collapseClass, setCollapse] = useState('');

    useEffect(() => {
        setVendor(props.data);

    }, [props.data]);

    useEffect(() => {
        getVendorList();
        console.log(vendorElements)
    }, [getVendorList, vendorData])



    const handleCollapse = () => {
        console.log(collapseClass);
        switch (collapseClass) {
            case '':
                setCollapse('collapse')
                break;
            case 'collapse':
                setCollapse('collapse expand')
                break;

            case 'collapse expand':
                setCollapse('collapse')
                break;


            default:
                break;
        }
    };



    const getVendorList = useCallback(() => {
        console.log('running getVendorList');

        if (props.data !== null) {

            const handleVendorStatus = (statusString) => {
                return statusString.toLowerCase() === 'operational' ? true : false;
            }

            const elementList = props.data.map((vendor, i) => (
                <Vendor collapseClass={collapseClass} operational={handleVendorStatus(vendor.status)} key={i} name={vendor.name} status={vendor.status} />
            ));

            setElements(elementList)

        }
    }, [props.data]);

    return (
        <section className="balls" style={sectionStyle}>
            <h1 onClick={handleCollapse} style={headerStyle}>{props.name}</h1>
            <div>
                <div id="SERVICE-LIST" className={`vendor-services ${collapseClass}`}>
                    <div>
                        {vendorElements && vendorElements}
                    </div>

                </div>
            </div>
        </section>
    )
};

export default ResourceList;