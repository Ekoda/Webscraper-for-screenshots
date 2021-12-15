<h1># Webscraper for screenshots</h1>
<h2>A web scraping tool for collecting screenshots of websites used to automate work tasks utilizing pupeteer with an extension for adblock.</h2>

<p>My girlfriend was collecting screenshots of websites manually every week to upload to a public relations company database to show their work for clients. It was tedious work and nothing humans should spend their time on, so I built a webscraper freeing her from a lot of the repetetive elements - allowing her to do her work in half of the time.</p>


<h2>How to use</h2>

<p>1. Install pupeteer. </p>

<blockquote>npm install puppeteer puppeteer-extra puppeteer-extra-plugin-adblocker</blockquote>

<p>2. Configure the getScreens.command file with a text editor and add the directory where you have the screenScraper.js file stored.</p>

<p>3. Open the Enter-Pages.txt file and add the websites you want to get the screenshot of, seperating each website with a comma ","</p>
<blockquote>https://pontusblomqvist.se/,<br> https://www.google.com/, </blockquote>

<p>4. Run the getScreens.command file</p>

<p>The screenshots can be found in the screens folder, I hope you find it useful!</p> 
