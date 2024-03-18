const cheerio = require('cheerio');
const puppeteer = require('puppeteer')
const axios = require('axios');
const fs = require('node:fs')

async function scrapeSteamStatus(user) {
    const res = await axios.request({
      method: "GET",
      url: user,
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 OPR/106.0.0.0"
      }
    })
    const $ = cheerio.load(res.data)
    const info = {}
    Object.assign(info, {displayName: $('.actual_persona_name').text()})
    Object.assign(info, {avatar: $('.playerAvatarAutoSizeInner > img').attr("src")})
    Object.assign(info, {status: $(".profile_in_game_header").text()})
    Object.assign(info, {activity: $(".profile_in_game_name").text()})
    return info
}

async function scrapeYoutube(link) {
  //Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:123.0) Gecko/20100101 Firefox/123.0
  /*
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(link, {waitUntil: "domcontentloaded"})
    const body = await page.content();


    fs.writeFile('res.txt', body, err => {
        if (err) {
          console.error(err);
        }})

    await browser.close();*/
    const res = await axios.request({
      method: "GET",
      url: link,
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:123.0) Gecko/20100101 Firefox/123.0"
      }
    })

    fs.writeFile('./res.txt', res.data, err => {
      if (err) {
        console.error(err);
      }})
    //console.log(res)
    return res
}

module.exports = { 
    scrapeSteamStatus,
    scrapeYoutube
 }