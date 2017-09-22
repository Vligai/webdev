/*
Vladislav Ligai
*/
/*
takes a string of text and does the following to it(see below)
*/

function simplify(text){
	if (typeof text !== 'string')
		throw ("text must be in a String format!");
	//1.Convert the text to lowercase
	var newtext = text.toLowerCase();
	//2.Remove all non-alphanumeric and whitespace characters (?.!'," and so on)
	newtext = newtext.replace(/[^0-9a-z\s]/g, '');
	//3.Convert all white space to simple spaces 
	//4.Convert all duplicate spaces to be single spaces
	newtext = newtext.replace(/\s+/g, ' ');
	//5.Return the result.
	return newtext
}

/*
scan through the text, simplify the text, and return an object with the 
following information based on the simplified text:

totalLetters: total number of letters in the simplified text,
totalWords: total number of words in the simplified text; numbers count as words,
uniqueWords: total number of unique words that appear in the simplified text; numbers count as words,
longWords: number of words in the text that are 6 or more letters long; this is a total count of distinct words, not unique words; numbers count as words,
averageWordLength: the average number of letters in a word in the text; numbers count as words,
wordOccurrences: a dictionary of each word and how many times each word occurs in the text; numbers count as words
 }
*/
function createMetrics(text){
	if (typeof text !== 'string') 
		throw ("text must be a string");
	const str = simplify(text);
	const strw = str.split(' ');
	const uniqueWords = (strw.filter((w, index) => strw.indexOf(w) === index)).length;
	const longWords = (strw.filter(w => w.length >= 6)).length;
	const totalLetters = str.replace(/[^A-Z]/gi, "").length;
	const wordOccurrences = {};
	for (const w of strw) 
		wordOccurrences[w] = wordOccurrences[w] ? wordOccurrences[w] + 1 : 1;
	const totalWords = strw.length;
	var wordAvg = 0;
	for (i = 0; i < totalWords; i++)
        wordAvg += strw[i].length;
    var averageWordLength = wordAvg / totalWords;
	return{
	totalLetters,
	totalWords,
	uniqueWords,
	longWords,
	averageWordLength,
	wordOccurrences
	};
}
//exporting methods
module.exports = {
	simplify,
	createMetrics
};
