var quotesArr = [
  ["If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.", "J.K. Rowling", "images/j_k_rowling.jpg", "rgb(222, 146, 185)"],
  ["Two things are infinite: the universe and human stupidity, and I'm not sure about the universe.", "Albert Einstein", "images/albert_einstein.jpg", "rgb(230, 155, 94)"],
  ["So many books, so little time.", "Frank Zappa", "images/frank_zappa.jpg", "rgb(175, 90, 227)"],
  ["Be yourself; everyone else is already taken.", "Oscar Wilde", "images/oscar_wilde.jpg", "rgb(100, 170, 11)"],
  ["Be the change that you wish to see in the world.", "Mahatma Gandhi", "images/mahatma_gandhi.jpg", "rgb(48, 143, 241)"],
  ["But man is not made for defeat. A man can be destroyed but not defeated.", "Ernest Hemingway", "images/ernest_hemingway.jpg", "rgb(198, 196, 33)"],
  ["When you reach the end of your rope, tie a knot in it and hang on.", "Franklin D. Roosevelt", "images/franklin_d_roosevelt.jpg", "rgb(44, 149, 161)"],
  ["Success is not final, failure is not fatal: it is the courage to continue that counts.", "Winston Churchill", "images/winston_churchill.jpg", "rgb(87, 27, 27)"],
  ["Life's most persistent and urgent question is, 'What are you doing for others?'", "Martin Luther King, Jr.", "images/martin_luther_king_jr.jpg", "rgb(129, 102, 23)"],
  ["All our dreams can come true, if we have the courage to pursue them.", "Walt Disney", "images/walt_disney.jpg", "rgb(167, 148, 201)"]
];

function randomRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createQuote(){

  var random = randomRange(0, quotesArr.length-1);

  $("#image").animate({
    opacity: 0
  }, 500, function(){
    $(this).animate({
      opacity: 1
    }, 500);
    $(this).attr("src", quotesArr[random][2]);
  });

  $("#text").animate({
    opacity: 0
  }, 500, function(){
    $(this).animate({
      opacity:1
    }, 500);
    $("#quoteText").html(quotesArr[random][0]);
  });

  $("#quoteAuthor").animate({
    opacity: 0
  }, 500, function(){
    $(this).animate({
      opacity:1
    }, 500);
    $(this).html(quotesArr[random][1]);
  });

  $("body").animate({
    backgroundColor: quotesArr[random][3]
  }, 1000);

  $(".myButton").animate({
    backgroundColor: quotesArr[random][3]
  }, 1000);

  $(".myContainer").animate({
    color: quotesArr[random][3]
  }, 1000);

  $("#tweetQuote").attr("href", "https://twitter.com/intent/tweet?text=" + quotesArr[random][0] + " - " + quotesArr[random][1]);

}

$(document).ready(function(){
  createQuote();
  $("#newQuote").on("click", createQuote);

});
