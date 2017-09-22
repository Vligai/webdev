/*
Vladislav Ligai
*/

const bluebird = require("bluebird");
const Promise = bluebird.Promise;
const fse = require('fs-extra');
const fs = require('fs');
const fsp = Promise.promisifyAll(fs);

/*
This method will, when given a path, 
return a promise that resolves to a string with the contents of the files.
*/
async function getFileAsString(path) {
	try{
		if (typeof path !== 'string') 
			throw("Path must be in a string format!");
		strPromise = await fse.readFile(path, 'utf8');
		return strPromise;
	} catch(err) {
		reject(err);
	}
}
/*
This method will, when given a path, return a promise that resolves to a JavaScript object. 
*/
async function getFileAsJSON(path) {
	try{
		if (typeof path !== 'string') 
			throw("Path must be in a string format!");
		strp = getFileAsString(path);
		strPromise = await JSON.parse(strp);
		return strPromise;
	}catch(err) {
		reject(err);
	}
}
/*
This method will take the text supplied, and store it in the file specified by path. 
*/
async function saveStringToFile(path, text){
	try{
		if (typeof path !== 'string' || typeof text !== 'string')
			throw("Path and text must be in a string format!");
		strtofl = await fse.writeFile(path, text);
		return strtofl;
	}catch(err) {
		reject(err);
	}
}
/*
This method will take the obj supplied and convert it into a JSON string so 
that it may stored as in a file.
*/
async function saveJSONToFile(path, obj){
	try{
		if (typeof path !== 'string')
			throw("Path must be in a string format!");
		if (typeof obj !== 'object')
			throw("Obj must be in object format!");
		const jsontofl = await fse.writeJSON(path, obj, { spaces: '\t' });
		return jsontofl;
	}catch(err) {
		reject(err);
	}
}
/*
module.exports = {
	getFileAsString,
	getFileAsJSON,
	saveStringToFile,
	saveJSONToFile
};
*/
