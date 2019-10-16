import axios from 'axios';

export default {
    getAtlassianStatus : () => {
        return axios.get('/api/scrape').catch((error) => {
            console.log(error);
        })
    }

}