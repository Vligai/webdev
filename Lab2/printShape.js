/*
Vladislav Ligai
CS546 lab 2 
I haven't reslly used any dependencies, but still installed 'prompt' as per the calculator example
to run: npm start
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
		//check for valid input
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
			//left side
			result = result + "\/";
			for (;c < i; c++)
			{
				//base of the triangle
				if(i==lines-1)
					result = result + "--";
				else 
					result = result + "  ";			
			}
			//right side
			result = result + "\\";
			console.log(result);
		}
		console.log('\n');
	},
	
	//Printing Squares
	square: function(lines) {
		//check for valid input
		checkIsProperNumber(lines, "Number of Lines");
		if (lines < 2)
			throw ("Number of lines provided is less than 2!");
		for(i = 0; i < lines; i++)
		{
			var result = "";
			var j = lines - 1;
			var c = 0;
			//left side
			result = result + "|";
			while(c < lines)
			{
				//horizontal edges
				if(i == j || i == 0 )
					result = result + "-";
				else 
					result = result + " ";
				c++;
			}
			//right side
			result = result + "|";
			console.log(result);
		}
		console.log('\n');
	},
	
	//Printing Rhombuses
	rhombus: function (lines) {
		//check for valid input
        checkIsProperNumber(lines, "Number of Lines");
		if (lines < 2)
			throw ("Number of lines provided is less than 2!");
		if (lines % 2 != 0)
			throw ("Number of lines provided is not even!");
		var x = 1;
        for (i = 0; i < lines; i++) 
		{
			// top half of rhombus
			if (i < lines/2)
			{
				var output = "";
				for (j = 0; j < lines/2 - i - 1; j++)
				output = output + " ";
				//left side
				output = output + "\/";
				for (c = 0; c <= i; c++) 
				{
					if (c == 0 && i == 0)
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
				//right side
				output = output + "\\";
				console.log(output);
			}
			// bottom half of rhombus
			else 
			{
				var output2 = "";
				for (k = 1; k < x; k++)
					output2 = output2 + " ";
				//left side
				output2 = output2 + "\\";
				var con = 0;
				for (ii = 0; ii <= lines / 2 - x; ii++) 
				{
					if (ii == 0 && x == lines / 2)
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
				//right side
				output2 = output2 + "\/";
				console.log(output2);
			}
		}
		console.log('\n');
	}
}
	