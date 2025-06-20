import { Scraper } from 'gutenbergscraper';

const scraper = new Scraper({
	useBooknum: [1260, 1260],
	FormatOutput: 'txt',
	userAgent: 'Mozilla/5.0',
	timeout: 5000
}, 1, 3);

scraper.scrape().then((): void => {
	console.log('Scraping complete!');
}).catch((err: unknown): void => {
	console.error('Error during scraping:', err);
});
