console.log("main.js");

// Create an array that contains the words in the sentence
let sentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];
let sentence2 = ["The", "in", "the", "light", "of", "the", "moon"];
let output = "";
let exclamation = "!";

     // for (let i = 0; i < sentence.length; i++){
     // 	console.log(sentence[i]);
     // }

// Use a function like this one to add to multiple arrays in the document
function addExcitement (theWordArray) {
      // Write a `for` loop that iterates over the array argument and
      // outputs the words.
     for (let i = 0; i < theWordArray.length; i++){
     		// This cl prints each individual word to the console
     		// console.log(theWordArray[i]);

			let currentWord = theWordArray[i];
     		// like above, this cl prints each individual word to the console
     		// console.log(currentWord);

     		//this runs through each word adding a space and the next word in the array to the next until the whole sentence is displayed.
     		output += " " + currentWord;

			// // this one is a doozie...it means if i (the iteration) + 1 (because the index starts at 0) divided by 3 equals 0, then add an exclamation point after that word. 
     		if (i % 3===0) {
     			output += exclamation;

		//this adds the extra exclamation points with every occurence of the third word.
     			exclamation += "!";
     		}
     		console.log(output);
     	}

}
// Invoke the function and pass in the array

addExcitement(sentence);
// addExcitement(sentence2);

// ANOTHER EXAMPLE
// Create an array that contains the words in the sentence
var sentenceBio = "I spent my caterpillar days in marketing, my cocoon days at Nashville Software School, and my butterfly days as a developer.";
var sentenceBioSplit = sentenceBio.split(" ");
let output2 = "";

// The overlyExcited function should accept the array as the sole argument
function overlyExcited (theWordArray) {
for (let i = 0; i < theWordArray.length; i++){
    let currentWord = theWordArray[i];
     output2 += " " + currentWord;
     if (i % 3===0) {
     		output2 += exclamation;
		//this adds the extra exclamation points with every occurence of the third word.
     		exclamation += "!";
     	}
     	console.log(output2);
  }
}
  
overlyExcited(sentenceBioSplit);