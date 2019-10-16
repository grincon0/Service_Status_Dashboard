const puppeteer = require('puppeteer');
const merge = require('./merge.js');

//name = .product-name
//status = .stub-for-status

const scrape =  async() => {
    const browser = await puppeteer.launch({headless: true});
    const page = await browser.newPage();

    await page.goto('https://status.atlassian.com/', {"waitUntil" : "networkidle0"});


    const result = await page.evaluate(() => {

        let titles = Array.from(document.getElementsByClassName('product-name'), e => e.innerText);
        let status = Array.from(document.getElementsByClassName('stub-for-status'), e => e.innerText);

        return{
            titles,
            status
        }
    }).then((res) => {
        let mergedContent = merge(res.titles, res.status);
        return mergedContent;
    });

    browser.close();

    return result;
}

module.exports = {
    scrape: scrape
}