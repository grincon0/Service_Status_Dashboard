const express = require('express');
const bodyParser = require('body-parser');
const puppeteer = require('puppeteer');
const app = express();

const WebScraper = require('./core/scraper');
const merge = require('./core/merge');


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/api/scrape', (req, res) => {
        WebScraper.scrape().then(value => {
            res.json(value);
        }).catch((error)=>{
            console.log(error)
        });
});


app.listen(3000, ()=> {
    console.log("Server is listening on port 3000");
})