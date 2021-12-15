const puppeteer = require('puppeteer-extra');
const fs = require('fs');

const AdblockerPlugin = require('puppeteer-extra-plugin-adblocker');
puppeteer.use(AdblockerPlugin({ blockTrackers: true }));

websites = fs.readFileSync('Enter-Pages.txt', 'utf8').split(',');

async function run(URL) {
	let browser = await puppeteer.launch({ headless: true });
	let page = await browser.newPage();
	let name = URL.split('').filter(char => /[a-zA-Z]/.test(char)).join('').replace("httpswww", "").replace("https", "");
	await page.setViewport({ width: 1080, height: 1080 });
	await page.goto(URL);
	await page.screenshot({
		path: './screens/' + name + '.png',
		fullPage: true,
	});
	await browser.close();
}

function multiScraper(li) {
	for (i = 0; i < li.length; i++) {
		run(li[i]);
	}
}

multiScraper(websites);
