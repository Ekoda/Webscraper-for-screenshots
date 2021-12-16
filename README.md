<h2># Webscraper for screenshots</h2>
<h3>A web scraping tool for collecting screenshots of websites used to automate work tasks utilizing pupeteer with an extension for adblock.</h3>

<p>The goal was to automate a worktask consisting of collecting screenshots of websites manually every week to upload to a public relations company database to show their work for clients. It was tedious work and nothing humans should spend their time on, so I built a webscraper automating a lot of the repetetive elements - allowing the work to be done in half of the time.</p>


<h3>How to use</h3>

<p>1. Install pupeteer. </p>

<blockquote>npm install puppeteer puppeteer-extra puppeteer-extra-plugin-adblocker</blockquote>

<p>2. Configure the getScreens.command file with a text editor and add the directory where you have the screenScraper.js file stored.</p>

<p>3. Open the Enter-Pages.txt file and add the websites you want to get the screenshot of, seperating each website with a comma ","</p>
<blockquote>#Enter-Pages.txt<br>https://pontusblomqvist.se/,<br> https://www.google.com/,<br> https://www.regeringen.se/</blockquote>

<p>4. Run the getScreens.command file</p>

<p>The screenshots can be found in the screens folder, I hope you find it useful!</p> 
