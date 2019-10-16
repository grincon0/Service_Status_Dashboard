import { useReducer, useCallback } from 'react';

import axios from 'axios';
import cheerio from 'cheerio';

const initialState = {
    hasScraped: false,
    isLoading: false,
    data: null
};

const scraperReducer = (currentState, action) => {
    switch (action.type) {
        case 'SEND':
            return {
                ...currentState,
                isLoading: true
            }
        case 'RESPONSE':
            return {
                hasScraped: true,
                isLoading: false,
                data: action.response
            }
            
            
        case 'CLEAR':
            return initialArray;
    }
}


const useScraper = () => {

    const [scraperState, dispatchScraper] = useReducer(scraperReducer,initialState);

    const stringToArray = (string) => {
        return string.replace(/\s\s+/g, '').split(" ");
    }


    const scrape = useCallback(() => {
        dispatchScraper({ type: 'SEND'});
        axios.get("https://status.iterable.com")
            .then((response) => {
                let tempArray = [];
                

                const $ = cheerio.load(response.data);
                $('.border-color').each((i, elem) => {
                    let result = {};
                    const outputName = $(elem).find('.name').text();

                    if(outputName !== "" || outputName.length > 2){
                        const serviceName = stringToArray(outputName).join(' ');
                        const serviceStatus = $(elem).find('.component-inner-container').attr('data-component-status');
                    
                        result.name = serviceName;
                        result.status = serviceStatus;

                        tempArray.push(result);
                    }
                });
                return tempArray;
            }).then((tempArray) => {
                dispatchScraper({ type: 'RESPONSE', response: tempArray })

            }).catch(error => {
                console.log(error);
            })
    }, []);


    const serviceScraper = useCallback(() => {

    }, [])

    return {
        scraperData: scraperState,
        scrape: scrape,
        isLoading: scraperState.isLoading,
        hasScraped: scraperState.hasScraped,
        data: scraperState.data
    }
}



export default useScraper;
