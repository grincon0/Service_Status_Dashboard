const express = require('express');
const bodyParser = require('body-parser');
const puppeteer = require('puppeteer');
const app = express();


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/api/scrape_atlassian', (req, res) => {
    res.json({
        "message": "API is operational"
    });
});


app.listen(3000, ()=> {
    console.log("Server is listening on port 3000");
})