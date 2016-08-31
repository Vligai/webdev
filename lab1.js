//Vladislav Ligai
//Lab 1
function sumOfSquares(num1,num2,num3){
	if (typeof num1 ==='number' && typeof num2 ==='number' && typeof num3 ==='number')
	{
		var x = num1 * num1;
		var y = num2 * num2;
		var z = num3 * num3;
		return x+y+z;
	}
	else
	{
		throw ("invalid inputs");
}	}

function sayHelloTo(firstName, lastName, title){
	return 0;
}

function cupsOfCoffee(howManyCups){
	var x = howManyCups;
	var finalstr = "";
	var i;
	if (typeof howManyCups ==='number' && howManyCups > 0)
	{
		for (i = 0; i < howManyCups-1; i++) 
		{
			//var num1 = x;
			var num2 = x-1;
			var str1 = " cups of coffee on the desk! ";
			var str2 = " cups of coffee!\n";
			var str3 = "Pick one up, drink the cup, ";
			var str4 = " cups of coffee on the desk!\n";
			console.log(x+str1+x+str2+str3+num2+str4);
			
			x = x - 1;
			//finalstr += str+"<br>";
		}
		str1 = "1 cup of coffee on the desk! 1 cup of coffee!\n Pick it up, drink the cup, no more coffee left on the desk!\n";
	}
	else
	{
		throw ("invalid inputs");
	}
	return str1;
}

function occurrencesOfSubstring(fullString, substring){
	return 0;
}

function randomizeSentences(paragraph){
	return 0;
}
//console.log(sumOfSquares(2,4,10));
//console.log(sumOfSquares('test',4,10));
//console.log(sumOfSquares(5,3,10));
//console.log(sumOfSquares(10));
//console.log(cupsOfCoffee(10));