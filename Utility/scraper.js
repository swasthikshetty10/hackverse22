const puppeteer = require("puppeteer"); /// import puppeteer from "puppeteer";
const xlsx = require("xlsx");

// Get the data
async function getPageData(url, page) {
    await page.goto(url);

    //Place Name
    await page.waitForSelector(".x3AX1-LfntMc-header-title-title span");
    const placeName = await page.$eval(
        "#pane > div > div > div > div > div > div > div > div > h1",
        (name) => name?.textContent
    );

    //Place Address
    await page.waitForSelector(".QSFF4-text.gm2-body-2:nth-child(1)");
    let address = await page.$$eval(
        "#pane > div > div > div > div > div > div > button > div > div > div",
        (divs) =>
            Array.from(divs)
                .map((div) => div?.innerText)
                .find((address) => /United States/g.test(address))
    );

    if (address === undefined) {
        address = await page.$$eval(
            "#pane > div > div > div > div > div > div > button > div > div > div",
            (divs) => divs[1]
        );
    }

    //Website
    await page.waitForSelector(".HY5zDd");
    const website = await page.$$eval(
        "#pane > div > div > div > div > div > div > button > div > div > div",
        (divs) =>
            Array.from(divs)
                .map((div) => div?.innerText)
                .find((link) =>
                    /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/.test(
                        link
                    )
                )
    );

    let returnObj = {
        name: placeName?.trim(),
        address: address?.trim(),
        website: website?.trim(),
    };

    console.log(returnObj);

    return returnObj;
    //await browser.close();
}

//Get Links

async function getLinks(page) {
    // Scrolling to bottom of page
    let newScrollHeight = 0;
    let scrollHeight = 1000;
    let divSelector = "#pane > div > div > div > div > div:nth-child(4) > div";

    while (true) {
        await page.waitForSelector(divSelector);

        await page.evaluate(
            (scrollHeight, divSelector) =>
                document.querySelector(divSelector).scrollTo(0, scrollHeight),
            scrollHeight,
            divSelector
        );

        await page.waitForTimeout(300);

        newScrollHeight = await page.$eval(
            divSelector,
            (div) => div.scrollHeight
        );

        if (scrollHeight === newScrollHeight) {
            break;
        } else {
            scrollHeight = newScrollHeight;
        }
    }

    // Get results
    const searchResults = await page.evaluate(() =>
        Array.from(document.querySelectorAll("a"))
            .map((el) => el.href)
            .filter(
                (link) =>
                    link.match(/https:\/\/www.google.com\/maps\//g, link) &&
                    !link.match(/\=https:\/\/www.google.com\/maps\//g, link)
            )
    );

    return searchResults;
}

export default async function main(searchQuery) {
    const browser = await puppeteer.launch({ headless: true });
    const [page] = await browser.pages();

    await page.goto("https://www.google.com/maps/?q=" + searchQuery);
    await page.waitForNavigation({ waitUntil: "domcontentloaded" });
    await page.waitForTimeout(4000);

    let allLinks = [];

    while (
        // Check if the 'Next page' button has been disabled
        !(await page.$$eval(
            "#pane > div > div > div > div > div > div > div",
            (elements) =>
                Array.from(elements).some(
                    (el) => el?.innerText === "No results found"
                )
        ))
    ) {
        // If it hasn't go to the next page
        allLinks.push(...(await getLinks(page)));

        await page.$$eval("button", (elements) =>
            Array.from(elements)
                .find((el) => el.getAttribute("aria-label") === " Next page ")
                .click()
        );

        await page.waitForNavigation({ waitUntil: "load" });
    }

    console.log(allLinks);

    const scrapedData = [];

    for (let link of allLinks) {
        const data = await getPageData(link, page);
        scrapedData.push(data);
    }

    return scrapedData
}

