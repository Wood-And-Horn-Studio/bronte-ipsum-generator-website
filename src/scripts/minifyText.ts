import { readFileSync, writeFileSync } from 'fs';

function minifyText() {
	const files = ['./books/book_768.txt', './books/book_1260.txt'];
	let allWords: string[] = [];

	files.forEach(file => {
		const text = readFileSync(file, 'utf8');
		const minified = text.replace(/\s+/g, ' ').trim();
		const cleaned = minified.replace(/[^\w\s']|_/g, '').replace(/\s+/g, ' ');
		let wordsArray = cleaned.split(' ').filter(word => word.length > 0);
		wordsArray = wordsArray.map(word => word.toLowerCase());
		wordsArray = wordsArray.filter(word => word.length > 1);
		allWords = allWords.concat(wordsArray);
	});

	console.log(`Total words: ${allWords.length}`);
	writeFileSync('words.json', JSON.stringify(allWords));
	console.log('Words array saved to words.json');
}

minifyText();