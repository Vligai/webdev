//Vladislav Ligai
//CS546 lab 2 

//Function taken from the lecture code https://github.com/Stevens-CS546/CS-546-WS-Summer-1/blob/master/Lecture%20Code/lecture_02/calculator_module_example/calculator.js
function checkIsProperNumber(val, variableName) {
    if (val === undefined || typeof val !== "number") {
        throw `${variableName || 'provided variable'} is not a number`;
    }
}

module.exports = {
	description: "This app prints shapes for CS-546",
	//Printing Triangles
	triangle: function(num) {
		checkIsProperNumber(num, "Number of Lines");
		
		