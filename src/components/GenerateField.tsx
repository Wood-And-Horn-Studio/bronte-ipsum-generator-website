'use client'

import React from 'react';
import words from '@/src/lib/words.json'
import { Clipboard } from 'lucide-react';

export default function GenerateField() {
	const minWords = 50;

	const generateParagraphs = (count: number) => {
		const paragraphs = [];
		for (let i = 0; i < count; i++) {
			const shuffled = [...words].sort(() => 0.5 - Math.random());
			paragraphs.push(shuffled.slice(0, minWords).join(' ') + '.');
		}
		return paragraphs;
	};

	const [paragraphNumber, setParagraphNumber] = React.useState<number>(1);
	const [text, setText] = React.useState<string[]>([]);

	React.useEffect(() => {
		setText(generateParagraphs(paragraphNumber));
	}, [paragraphNumber]);

	const copyToClipboard = async () => {
		try {
			await navigator.clipboard.writeText(text.join('\n\n'));
			alert('Text copied to clipboard!');
		} catch (err) {
			alert(`Failed to copy text, ${err}`);
		}
	};

	return (
		<div className="flex flex-col items-center justify-center w-full h-full p-16">
			<div className="mt-4">
				<div className='flex items-center justify-center gap-2 mb-4'>
					<label className="block text-sm font-medium text-gray-700" htmlFor="paragraph-select">
						Number of Paragraphs:
					</label>
					<select
						id="paragraph-select"
						value={paragraphNumber}
						onChange={(e) => setParagraphNumber(Number(e.target.value))}
						className="w-15 px-2"
					>
						{[1, 2, 3, 4, 5].map((num) => (
							<option key={num} value={num}>
								{num}
							</option>
						))}
					</select>
					<button
						aria-label='Copy to clipboard'
						title='Copy to clipboard'
						disabled={text.length === 0}
						className="px-4 py-2 text-black cursor-pointer"
						onClick={copyToClipboard}
					>
						<Clipboard strokeWidth={1} />
					</button>
				</div>
			</div>
			<div className="max-h-96 overflow-auto mt-4 w-full max-w-md">
				{text.map((para, i) => (
					<p key={i} className="mb-4 text-justify">{para}</p>
				))}
			</div>
		</div>
	);
}