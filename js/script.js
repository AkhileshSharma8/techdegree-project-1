/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

//Array with multiple objects containing details about qoutes.
var quotes = [

  {

    quote: "They always say that time changes things, but you actually to change them yourself.",

    source: "Andy Warhol",

    citation: "The Philosophy of Andy Warhol",

    year: "1975",

    tag: "Inspiration"

  },

  {

    quote: "The way to get started is to quit talking and begin doing.",

    source: "Walt Disney",

    tag: "Business"
  

  },

  {

    quote: "When something is important enough, you do it even if the odds are not in your favor.",

    source: "Elon Musk",

    tag: "Business"

  },

  {

    quote: "You only have to do a very few things right in your life so long as you don't do too many things wrong.",

    source: "Warren Buffet",

    tag: "Business"

  },

  {

    quote: "I think I have learned that the best way to lift one's self up is to help someone else",

    source: "Booker T. Washington",

    year: '1850',

    tag: "Inspiration"

  },

  {

    quote: "People seldom see the halting and painful steps by which the most insignificant success is achieved",

    source: "Anne Sullivan",

    tag: "Inspiration"

  } 

];



//function to call random quotes.
function getRandomQuote () {

    var randomNumber= Math.floor(Math.random()* quotes.length);

      return quotes[randomNumber];

}

//printQuote function to print random quotes
function printQuote () {

  var randomQuote = getRandomQuote();

  var HTML = '';

    HTML += '<p class="quote">' + randomQuote.quote + '</p>';

    HTML += '<p class="source">' + randomQuote.source; 
    
    if (randomQuote.citation) {
        HTML += '<span class="citation">' + randomQuote.citation + '</span>'
    } 
    
    if (randomQuote.year){
        HTML +=  '<span class="year">' + randomQuote.year + '</span>'
        }
    
    HTML += '<span class="tag">' + randomQuote.tag + '.' + '</span>'; 
  
    HTML += '</p>';
    
    random_bg_color()
  
    return document.getElementById("quote-box").innerHTML = HTML;

 
}
// DOM function to change the background color.
function random_bg_color() {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var bgColor = "rgb(" + x + "," + y + "," + z + ")";

  document.body.style.background = bgColor;
}

//Function statement to print the result of function "printQuote" when "Show another quote" button is clicked.
 document.getElementById('loadQuote').addEventListener("click", printQuote, false);

 //Function that sets interval to 25 seconds. This function will change the quote displayed without clicking the button.
setInterval (function() {printQuote()}, 25000);
