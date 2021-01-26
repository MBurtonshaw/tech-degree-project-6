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
var quotes = [
    {quote : "The books that the world calls immoral are books that show the world its own shame. ",
     source : "Oscar Wilde",
     year : 1890,
     citation : "'The Picture of Dorian Gray', written by Oscar Wilde",
     medium : "Novel",
     country : "England"},
    
    {quote : "Nothing is so painful to the human mind as a great and sudden change. ",
     source : "Mary Shelley",
     year : 1818,
     citation : "'Frankenstein, or the Modern Prometheus', written by Mary Shelley",
     medium : "Novel",
     country : "England"},
    
    {quote : "Death has come to your little town, Sheriff. Now, you can either ignore it, or you can help me to stop it. ",
     source : "Donald Pleasance as Dr. Loomis",
     year : 1978,
     citation : "'Halloween', co-written by John Carpenter and Debra Hill",
     medium : "Film",
     country : "United States"},
    
    {quote : "What ain't no country I've ever heard of. They speak English in What? ",
     source : "Samuel L. Jackson as Jules Winnfield",
     year : 1994,
     citation : "'Pulp Fiction', written and directed by Quentin Tarantino",
     medium : "Film",
     country : "United States"},
    
    {quote : "This is not 'Nam. This is bowling. There are rules. ",
     source : "John Goodman as Walter Sobchak",
     year : 1998,
     citation : "'The Big Lebowski', written and directed by Joel and Ethan Coen",
     medium : "Film",
     country : "United States"}
];

/***
 * `getRandomQuote` function
***/


//A little help from "Kelly" (https://stackoverflow.com/questions/5915096/get-random-item-from-javascript-array). Almost had it, but her example cleaned up my syntax on the Math.random part.

function getRandomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
}
/***
 * `printQuote` function
***/

//printQuote loops through the quote object's properties and returns a random quote in a specific HTML format.

function printQuote() {
    for (var i = 0; i < quotes.length; i++) {
        let  quoteVar = getRandomQuote();
        let quoteBox = document.getElementById("quote-box");
        quoteBox.innerHTML = "<p class='quote'>" + quoteVar.quote + "</p>" + "<p class='source'>" + quoteVar.source + "<span class='citation'>" +  quoteVar.citation + "</span>" + "<span class='year'>" + quoteVar.year + "</span>" + "<span class ='citation'>" + quoteVar.medium + "</span>" + "<span class ='citation'>" + quoteVar.country + "</span>" + "</p>";
    }
}

printQuote();
        

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE OF CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);