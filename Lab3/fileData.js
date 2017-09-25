/*
Vladislav Ligai
*/

const bluebird = require("bluebird");
const Promise = bluebird.Promise;
const fs = require('fs');
const fsp = Promise.promisifyAll(fs);

/*
This method will, when given a path, 
return a promise that resolves to a string with the contents of the files.
*/
async function getFileAsString(path) {
    const strPromise = new Promise(async function (resolve, reject) {
		try {
			if (typeof path !== "string")
				throw("Path must be in a string format!");
			await fsp.readFile(path, "utf-8", function (err, res) {
				if (err)
					throw err;
				else
					resolve(res.toString());  
        });
		}
		catch (err) {
             throw err;
        }
    });
    return strPromise;
}
/*
This method will, when given a path, return a promise that resolves to a JavaScript object. 
*/
async function getFileAsJSON(path) {
    const strPromise = new Promise(async (resolve, reject) => {
		try {
			if (typeof path !== "string")
				throw("Path must be in a string format!");
			await fsp.readFile(path, "utf-8", (err, res) => {
				if (err)
					throw err;
				else
					resolve(JSON.parse(res));
        });
		}
		catch (err) {
            throw err;
        }
    });
	return strPromise;
}
/*
This method will take the text supplied, and store it in the file specified by path. 
*/
async function saveStringToFile(path, text) {
    const strPromise = new Promise(async (resolve, reject) => {
        try {
            if (typeof path !== 'string')
				throw("Path must be in a string format!");
			if (typeof text !== 'string')
				throw("Text must be in a string format!");
            await fsp.writeFile(path, text, "utf-8", (err) => {
                if (err)
                    throw err;
                else
                    resolve(`Success`);
		});
		}
		catch (err) {
			throw err;
		}
	});
		return strPromise;
}
/*
This method will take the obj supplied and convert it into a JSON string so 
that it may stored as in a file.
*/
async function saveJSONToFile(path, obj) {
    const strPromise = new Promise(async (resolve, reject) => {
        try {
            if (typeof path !== 'string')
				throw("Path must be in a string format!");
			if (typeof obj !== 'object')
				throw("Obj must be in object format!");
            await fsp.writeFile(path, JSON.stringify(obj, null, 5), "utf-8", (err) => {
                if (err)
                    throw err;
                else 
                    resolve(`Success`);
        });
        }
        catch (err) {
            throw err;
        }
    });
	return strPromise;
}

module.exports = {
	getFileAsString,
	getFileAsJSON,
	saveStringToFile,
	saveJSONToFile
};
