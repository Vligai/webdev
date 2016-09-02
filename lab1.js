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
	else
	{
		throw ("invalid inputs");
	}	
}
/*
sayHelloTo(firstName, lastName, title)
function that uses console.log to print hello to someone!
*/
function sayHelloTo(firstName, lastName, title){
	if (typeof firstName === 'string' && lastName === undefined && title === undefined)
	{
		return "Hi " + firstName;
		
	}
	else if (typeof firstName === 'string' && typeof lastName === 'string' && title === undefined)
	{
		return "Hello " + firstName + " " + lastName;
	}
	else if (typeof firstName === 'string' && typeof lastName === 'string' && typeof title === 'string')
	{
		return "Greetings " + title + " " + firstName + " " + lastName;
	}
	else
	{
		//console.log("kek00");
		throw("invalid inputs");
	}
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
		str1 = "1 cup of coffee on the desk! 1 cup of coffee!\n Pick it up, drink the cup, no more coffee left on the desk!";
	}
	else
	{
		throw ("invalid inputs");
	}
	return str1;
}
/*
occurrencesOfSubstring(fullString, substring)
calculate how many times a substring occurs in a given string.
*/
function occurrencesOfSubstring(fullString, substring){
	var matchesCount = 0;
	if (typeof fullString === 'string' && typeof substring === 'string' && fullString && substring)
	{
		matchesCount = fullString.split(substring).length - 1;
	}
	else
	{
		throw ("invalid inputs");
	}
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
		console.log("Original: \n" + paragraph + "\n");
		var tokens = x.split(".");
		var randtokens;
		for (var i = tokens.length - 1; i > 0; i--) 
		{
			var j = Math.floor(Math.random() * (i + 1));
			var temp = tokens[i];
			tokens[i] = tokens[j];
			tokens[j] = temp;
		}
		console.log("Randomised: \n");
		tokens = tokens.filter(Boolean);
		randtokens = tokens.join([separator = '.']);
		return randtokens;
	}	
	else
	{
		throw ("invalid inputs");
	}
}

//just some testing (Test error cases individually cause single one stops other tests)
console.log("Testing Lab1: \n");
//TESTING sumOfSquares
console.log("Testing sumOfSquares: " );
console.log("sumOfSquares(2,4,10): ");
console.log(sumOfSquares(2,4,10));
//console.log(sumOfSquares('test',4,10));
console.log("sumOfSquares(5,3,10): ");
console.log(sumOfSquares(5,3,10));
//console.log(sumOfSquares(10));
//TESTING sayHelloTo
console.log("\nTesting sayHelloTo: " );
console.log("sayHelloTo('Henrik', 'Svantepolk', 'Doctor') :");
console.log(sayHelloTo("Henrik", "Svantepolk", "Doctor"));
console.log("sayHelloTo('Henrik', 'Svantepolk') :");
console.log(sayHelloTo("Henrik", "Svantepolk"));
console.log("sayHelloTo('Henrik') :");
console.log(sayHelloTo("Henrik"));
//TESTING cupsOfCoffee
console.log("\nTesting cupsOfCoffee: " );
console.log("cupsOfCoffee(4) :");
console.log(cupsOfCoffee(4));
//TESTING occurrencesOfSubstring
console.log("Testing occurrencesOfSubstring: \n" );
console.log("occurrencesOfSubstring('helloww worldwwhello', 'hello') :");
console.log(occurrencesOfSubstring("helloww worldwwhello", "hello"));
//TESTING randomizeSentences
console.log("\nTesting randomizeSentences: " );
console.log("running 4 times :randomizeSentences('My lord flutes the registered choice around a physiology.Beside the needed water mends the cant monster.The stamp briefs a compound wife.') :");
console.log(randomizeSentences("My lord flutes the registered choice around a physiology.Beside the needed water mends the cant monster.The stamp briefs a compound wife."));
console.log(randomizeSentences("My lord flutes the registered choice around a physiology.Beside the needed water mends the cant monster.The stamp briefs a compound wife."));
console.log(randomizeSentences("My lord flutes the registered choice around a physiology.Beside the needed water mends the cant monster.The stamp briefs a compound wife."));
console.log(randomizeSentences("My lord flutes the registered choice around a physiology.Beside the needed water mends the cant monster.The stamp briefs a compound wife."));
