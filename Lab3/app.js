/*
Vladislav Ligai
*/
const bluebird = require("bluebird");
const Promise = bluebird.Promise;
const fs = require('fs');
const fsp = Promise.promisifyAll(fs);
const fileData = require('./fileData');
const textMetrics = require('./textMetrics')
/*
main method
perform operation described below on each of .txt files
*/
async function main(){
	try {
		const files = ['chapter1.txt', 'chapter2.txt', 'chapter3.txt'];
		for (x in files) {
			const chapters = files[x];
			const jsonFile = chapters.replace('.txt', '.result.json');
			fsp.exists(jsonFile, async function(exists){
				const debugFile = chapters.replace('.txt', '.debug.txt');
				//If no result file is found, get the contents of the file using getFileAsString
				//Simplify the text, and store that text in a file named fileName.debug.txt
				const sim = await textMetrics.simplify(await fileData.getFileAsString(chapters));
				await fileData.saveStringToFile(debugFile, sim);
				//Run the text metrics, and store those metrics in fileName.result.json
				await fileData.saveJSONToFile(jsonFile, textMetrics.createMetrics(sim));
				/*
				Check if a corresponding result file already exists for this file, 
				if so query and print the result already stored.
				print the resulting metrics
				*/
				console.log(exists ? jsonFile + " already stored" : await fileData.getFileAsString(jsonFile));
			});
		}
	} catch (err) {
		throw err;
	}
}
main();
