//Vladislav Ligai
//Lab 1
/*
sumOfSquares(num1, num2, num3)
calculate the sum of the squares of 3 numbers and return that result.
*/
function sumOfSquares(num1,num2,num3){
	if (typeof num1 ==='number' && typeof num2 ==='number' && typeof num3 ==='number')
	{
		var x = num1 * num1;
		var y = num2 * num2;
		var z = num3 * num3;
		return x+y+z;
	}
	else if(typeof num1 ==='undefined' || typeof num2 ==='undefined' || typeof num3 ==='undefined')
		throw ("Please enter exactly three numbers!");
	else if(typeof num1 !=='number' || typeof num2 !=='number' || typeof num3 !=='number')
		throw ("Please enter numbers only!");
}
/*
sayHelloTo(firstName, lastName, title)
function that uses console.log to print hello to someone!
*/
function sayHelloTo(firstName, lastName, title){
	if (typeof firstName === 'string' && typeof lastName === 'undefined' && typeof title === 'undefined')
		return "Hello, " + firstName + "!";
	else if (typeof firstName === 'string' && typeof lastName === 'string' && typeof title === 'undefined')
		return "Hello " + firstName + " " + lastName + ". I hope you are having a good day!";
	else if (typeof firstName === 'string' && typeof lastName === 'string' && typeof title === 'string')
		return "Greetings " + title + " " + firstName + " " + lastName + "! Have a good evening!";
	else if (typeof firstName === 'undefined' && typeof lastName === 'undefined' && typeof title === 'undefined')
		throw("Need at least one variable!");
	else
		throw("Enter strings only!");
}	
/*
cupsOfCoffee(howManyCups)
create and return a simple song called 99 Cups of Coffee on the Desk.
*/
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
		str1 = "1 cup of coffee on the desk! 1 cup of coffee!\nPick it up, drink the cup, no more coffee left on the desk!";
	}
	else
		throw ("Please enter a positive number!");
	return str1;
}
/*
occurrencesOfSubstring(fullString, substring)
calculate how many times a substring occurs in a given string.
*/
function occurrencesOfSubstring(fullString, substring){
	var matchesCount = 0;
	var tmplength = 0;
	var ind = 0;
	if (typeof fullString === 'string' && typeof substring === 'string' && fullString && substring)
	{
		//matchesCount = fullString.split(substring).length - 1;
		if(substring.length == 1)
		{
			tmplength = substring.length;
			tmplength += 1;
			while(ind != -1)
			{
				ind = fullString.indexOf(substring,ind);
				if(ind != -1)
				{
					matchesCount ++;
					ind += tmplength - 1;
				}
			}
		}
		else 
		{
			while(ind != -1)
			{
				ind = fullString.indexOf(substring,ind);
				if(ind != -1)
				{
					matchesCount ++;
					ind += substring.length - 1;
				}
			}
		}		
	}
	else if(typeof fullString === 'undefined' || typeof substring === 'undefined')
		throw ("Need at least two variables!");
	else
		throw ("Please use strings!");
	return matchesCount;
}
/*
randomizeSentences(paragraph)
take in a paragraph and randomize the sentences in it.
*/
function randomizeSentences(paragraph){
	if (typeof paragraph === 'string' && paragraph)
	{
		var x = paragraph;
		console.log("\nOriginal: \n" + paragraph + "\n");
		var tokens= new Array();
		tokens = x.split(/(.*?[.!?])/);
		//console.log(tokens);
		var randtokens;
		for (var i = tokens.length - 1; i > 0; i--) 
		{
			var j = Math.floor(Math.random() * (i + 1));
			var temp = tokens[i];
			tokens[i] = tokens[j];
			tokens[j] = temp;
		}
		console.log("Randomised: ");
		tokens = tokens.filter(Boolean);
		randtokens = tokens.join([separator = '']);
		if(randtokens.charAt(0) == " ")
			randtokens = randtokens.substr(1);
		return randtokens;
	}
	else if(typeof paragraph !== 'string')
		throw ("Please use Strings!");
	else
		throw ("Please enter your sentences in a paragraph format!");
}

//just some testing (Test error cases individually cause single one stops other tests)
console.log("Testing Lab1:");
console.log("---------------------------------------");
//TESTING sumOfSquares
console.log("Testing sumOfSquares: " );
console.log("sumOfSquares(2,4,10): ");
console.log(sumOfSquares(2,4,10));
console.log("sumOfSquares(test,4,10): ");
//console.log(sumOfSquares("test",4,10));
console.log("Log: Please enter numbers only!");
console.log("sumOfSquares(5,3,10): ");
console.log(sumOfSquares(5,3,10));
console.log("sumOfSquares(10): ");
//console.log(sumOfSquares(10));
console.log("Log: Please enter exactly three numbers!");
console.log("sumOfSquares(): ");
//console.log(sumOfSquares());
console.log("Log: Please enter exactly three numbers!");
console.log("---------------------------------------");
//TESTING sayHelloTo
console.log("Testing sayHelloTo: " );
console.log("sayHelloTo():");
//console.log(sayHelloTo());
console.log("Log: Need at least one variable!");
console.log("sayHelloTo('Phil'):");
console.log(sayHelloTo("Phil"));
console.log("sayHelloTo('Phil', 'Barresi') :");
console.log(sayHelloTo("Phil", "Barresi"));
console.log("sayHelloTo('Phil', 'Barresi', 'Mr.') :");
console.log(sayHelloTo("Phil", "Barresi", "Mr."));
//TESTING cupsOfCoffee
console.log("---------------------------------------");
console.log("Testing cupsOfCoffee: " );
console.log("cupsOfCoffee():");
//console.log(cupsOfCoffee());
console.log("Log: Please enter a positive number!");
console.log("cupsOfCoffee(5):");
console.log(cupsOfCoffee(5));
//TESTING occurrencesOfSubstring
console.log("---------------------------------------");
console.log("Testing occurrencesOfSubstring: \n" );
console.log("occurrencesOfSubstring():");
//console.log(occurrencesOfSubstring());
console.log("Log: Need at least two variables!");
console.log("occurrencesOfSubstring(1,2):");
//console.log(occurrencesOfSubstring(1,2));
console.log("Log: Please use Strings!");
console.log("occurrencesOfSubstring('hello world', 'o'):");
console.log(occurrencesOfSubstring("hello world", "o"));
console.log("occurrencesOfSubstring('Helllllllo, class!', 'll'):");
console.log(occurrencesOfSubstring("Helllllllo, class!", "ll"));
//TESTING randomizeSentences
console.log("---------------------------------------");
console.log("Testing randomizeSentences: " );
console.log("randomizeSentences()");
//console.log(randomizeSentences());
console.log("Log: Please use Strings!");
console.log("randomizeSentences(Hello, world! I am a paragraph. You can tell that I am a paragraph because there are multiple sentences that are split up by punctuation marks. Grammar can be funny, so I will only put in paragraphs with periods, exclamation marks, and question marks -- no quotations.);");
console.log(randomizeSentences("Hello, world! I am a paragraph. You can tell that I am a paragraph because there are multiple sentences that are split up by punctuation marks. Grammar can be funny, so I will only put in paragraphs with periods, exclamation marks, and question marks -- no quotations."));
console.log(randomizeSentences("Hello, world! I am a paragraph. You can tell that I am a paragraph because there are multiple sentences that are split up by punctuation marks. Grammar can be funny, so I will only put in paragraphs with periods, exclamation marks, and question marks -- no quotations."));
console.log(randomizeSentences("Hello, world! I am a paragraph. You can tell that I am a paragraph because there are multiple sentences that are split up by punctuation marks. Grammar can be funny, so I will only put in paragraphs with periods, exclamation marks, and question marks -- no quotations."));
console.log(randomizeSentences("Hello, world! I am a paragraph. You can tell that I am a paragraph because there are multiple sentences that are split up by punctuation marks. Grammar can be funny, so I will only put in paragraphs with periods, exclamation marks, and question marks -- no quotations."));
