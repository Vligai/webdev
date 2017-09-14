/*
Vladislav Ligai
CS546 lab 2 
*/
//Function taken from the lecture code https://github.com/Stevens-CS546/CS-546-WS-Summer-1/blob/master/Lecture%20Code/lecture_02/calculator_module_example/calculator.js
function checkIsProperNumber(val, variableName) {
    if (val === undefined || typeof val !== "number") 
        throw `${variableName || 'provided variable'} is not a number`;
}

module.exports = {
	description: "This app prints shapes for CS-546",
	
	//Printing Triangles
	triangle: function(lines) {
		checkIsProperNumber(lines, "Number of Lines");
		if (lines <= 0)
			throw ("Please enter a number that is more than 0!");
		for(i = 0; i < lines; i++)
		{
			var result = "";
			var j = lines - 1;
			var c = 0;
			for (;j >= i; j--)
				result = result + " ";
			result = result + "\/";
			for (;c < i; c++)
			{
				if(i==lines-1)
					result = result + "--";
				else 
					result = result + "  ";			
			}
			result = result + "\\";
			console.log(result);
		}
		console.log('\n');
	},
	
	//Printing Squares
	square: function(lines) {
		
		checkIsProperNumber(lines, "Number of Lines");
		if (lines < 2)
			throw ("Number of lines provided is less than 2!");
		for(i = 0; i < lines; i++)
		{
			var result = "";
			var j = lines - 1;
			var c = 0;
			result = result + "|";
			while(c < lines)
			{
				if(i == 0 || i == j)
					result = result + "-";
				else 
					result = result + " ";
				c++;
			}
			result = result + "|";
			console.log(result);
			//return result;
		}
		console.log('\n');
	},
	
	//Printing Rhombuses
	rhombus: function (lines) {
        checkIsProperNumber(lines, "Number of Lines");
		if (lines < 2)
			throw ("Number of lines provided is less than 2!");
		if (lines % 2 != 0)
			throw ("Number of lines provided is not even!");
		var x = 1;
        for (i = 0; i < lines; i++) {
			// top half of rhombus
			if (i < lines/2)
			{
				var output = "";
				for (j = 0; j < lines/2 - i - 1; j++)
				output = output + " ";
				output = output + "\/";
				for (c = 0; c <= i; c++) 
				{
					if (i == 0 && c == 0)
						output = output + "-"
					else if (i == 1) 
					{
						output = output + "   ";
						break;
					}
					else if (c == i)
						output = output + " ";
					else
						output = output + "  ";
				}
				output = output + "\\";
				console.log(output);
			}
			// bottom half of rhombus
			else 
			{
				var output2 = "";
				for (k = 1; k < x; k++)
					output2 = output2 + " ";
				output2 = output2 + "\\";
				var con = 0;
				for (ii = lines / 2 - x; ii >= 0; ii--) 
				{
					//console.log(x);
					if (x == lines / 2 && ii == 0)
						output2 = output2 + "-";
					else if (x == lines / 2 - 1) 
					{
						output2 = output2 + "   ";
						break;
					}
					else if (con == 0) 
					{
						con = 1;
						output2 = output2 + " ";
					}
					else
						output2 = output2 + "  ";
				}
				x++;
				output2 = output2 + "\/";
				console.log(output2);
			}
		}
		console.log('\n');
	}
}
	