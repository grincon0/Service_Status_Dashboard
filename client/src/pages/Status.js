import React, { useReducer, useCallback, useEffect, useMemo } from 'react';
import ResourceList from '../components/Resources/ResourceList';
import useScraper from '../utils/Scraper';
import Vendor from '../components/Resources/Vendor';
import Loading from '../components/Loading/Loading'


const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    height: '87%',
    paddingBottom: '40px'
}

const buttonStyle = {
    width: '120px',
    height: '30px',
    backgroundColor: '#09add6',
    borderRadius: '9px',
    border: '0',
    color: 'white',
    fontSize: '16px'
}

const statusReducer = (currentVendors, action) => {
    switch (action.type) {
        case 'ADD':
            return action.vendor;

        default:
            throw new Error('Should not go here');
    }
}

const Status = () => {

    const [statuses, dispatch] = useReducer(statusReducer, null);
    const { hasScraped, scrape, scraperData, isLoading, data } = useScraper();

    useEffect(() => {
        if (hasScraped) {
            dispatch({ type: 'ADD', vendor: data });
        } else {
            scrape();
        }
    }, [data, scrape, hasScraped])

    /*     useEffect(()=> {
           console.log(statuses);
        }, [statuses]) */

    const scrapeIterable = useCallback(() => {
        scrape();
    }, [scrape]);

    return (
        <div style={containerStyle}>

            {isLoading && <Loading />}
            {!isLoading && data &&
            <div>
            <ResourceList data={statuses} name="Iterable">
               {/*  {resourceList} */}
            </ResourceList>
            <button style={buttonStyle} onClick={scrapeIterable}>Refresh</button>
            </div>
        
        }
        </div>
    )
}


export default Status;