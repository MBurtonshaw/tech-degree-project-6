/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/



/***
 * `getRandomQuote` function
***/



/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

var message = '';
var quote;
var source;
var Year;

function getRandomQuote (quoteList) {
 var getRandomQuote = Math.floor(Math.random() * quoteList.length);
    for ( var i = 0; i < quoteList.length; i += 1) {
        quote = quoteList[i].quote;
        source = quoteList[i].source;
  
 return getRandomQuote;
}
}
function printQuote(getRandomQuote());


var quoteList = [
    {quote: 'WOOO!!', 
     source: "-Ellen, Queen of Durham",
     Year: 2018
    },
    {quote: "Im your huckleberry", 
     source: "-Doc Holiday, Tombstone"},

    {quote: "In a dark place we find oursleves,  and a little more knowledge lights our way.",
    source: '-Yoda'},

    {quote: "No one likes a grumpy muffin.",
    source: '-Ellen, Queen of Durham',
    Year: 2019
  },

    {quote: "Nothing will work unless you do", 
     source: 'Maya Angelou'},

    {quote: "I learned that courage is not the absence of fear but the triumph over it",
     source: 'Nelson Mandela'},

]



message += '<h2>quoteList' + getRandomQuote + '</h2>'


function print(message) {
  var quoteBoxDiv = document.getElementById("quoteBox");
  quoteBoxDiv.innerHTML = message;
}
print(message);
console.log(quoteList);


document.getElementById('load-quote').addEventListener("click", printQuote, false);