var FIREBASE_LOVE_URL = 'https://my-cappstone.firebaseio.com/'
var ref = new Firebase('https://my-cappstone.firebaseio.com/quotes');
var loveBtn;
var truthBtn;
var beautyBtn;

var app = angular.module('myApp', []);

// $('#myModal').modal('show');


$( ".quoteBox" ).hide();

// Button click code

loveBtn = $(".loveBtn");
truthBtn = $(".truthBtn");
beautyBtn = $(".beautyBtn");


$(".loveBtn").on("click", function() {

    getQuotes(getLoveQuote);

  });


$(".truthBtn").on("click", function() {

    getQuotes(getTruthQuote);

  });

$(".beautyBtn").on("click", function() {

    getQuotes(getBeautyQuote);

  });

// creates empty array variables to hold objects
loveArr = [];
truthArr = [];
beautyArr = [];

// loops through array
function getQuotes(cb){
  $.get('https://my-cappstone.firebaseio.com/quotes.json')
            .success(function(data) {
                quotes = data;
                for( var i=0; i < Object.keys(quotes).length; i++) {
                    if( quotes[Object.keys(quotes)[i]].category == 'love' ) {
                        loveArr.push({
                          quote: quotes[Object.keys(quotes)[i]].quote,
                          author: quotes[Object.keys(quotes)[i]].author
                        });
                    }
                    else if ( quotes[Object.keys(quotes)[i]].category == 'truth' ) {
                        truthArr.push({
                          quote: quotes[Object.keys(quotes)[i]].quote,
                          author: quotes[Object.keys(quotes)[i]].author
                        });
                    }
                    else if ( quotes[Object.keys(quotes)[i]].category == 'beauty' ) {
                        beautyArr.push({
                          quote: quotes[Object.keys(quotes)[i]].quote,
                          author: quotes[Object.keys(quotes)[i]].author
                        });
                    }
                }
                cb();
            });
}

function getTruthQuote (){
    var rand = Math.floor(Math.random() * truthArr.length);

    var quote = truthArr[rand].quote;
    var author = truthArr[rand].author;

    $("#quote").html(quote)
    $("#author").html(author)
}

function getLoveQuote (){
    var rand = Math.floor(Math.random() * loveArr.length);

    var quote = loveArr[rand].quote;
    var author = loveArr[rand].author;

    $("#quote").html(quote)
    $("#author").html(author)
}

function getBeautyQuote (){
    var rand = Math.floor(Math.random() * beautyArr.length);

    var quote = beautyArr[rand].quote;
    var author = beautyArr[rand].author;

    $("#quote").html(quote)
    $("#author").html(author)
}


//shows & hides quoteBox on button click

$( ".loveBtn" ).click(function() {
  $( ".quoteBox" ).fadeIn( "fast", function() {
    // Animation complete.
  });
});

$( ".truthBtn" ).click(function() {
  $( ".quoteBox" ).fadeIn( "fast", function() {
    // Animation complete.
  });
});

$( ".beautyBtn" ).click(function() {
  $( ".quoteBox" ).fadeIn( "fast", function() {
    // Animation complete.
  });
});


// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
  if ($(".navbar").offset().top > 50) {
    $(".navbar-fixed-top").addClass("top-nav-collapse");
  } else {
    $(".navbar-fixed-top").removeClass("top-nav-collapse");
  }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
  $('a.page-scroll').bind('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top
    }, 1000, 'easeInOutExpo');
    event.preventDefault();
  });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
  $('.navbar-toggle:visible').click();
});




// always run this function
function getJSON(url, cb) {
  var xhr = new XMLHttpRequest();

  xhr.open('GET', url);
  xhr.onload = function () {
    if (this.status >= 200 && this.status < 400) {
      cb(JSON.parse(this.response));
     }
    };

    xhr.send();
}

















// find template and compile it
// var templateSource = document.getElementById('results-template').innerHTML,
//     template = Handlebars.compile(templateSource),
//     resultsPlaceholder = document.getElementById('results'),
//     playingCssClass = 'playing',
//     audioObject = null;

// var fetchTracks = function (albumId, callback) {
//     $.ajax({
//         url: 'https://api.spotify.com/v1/albums/' + albumId,
//         success: function (response) {
//             callback(response);
//         }
//     });
// };

// var searchAlbums = function (query) {
//     $.ajax({
//         url: 'https://api.spotify.com/v1/search',
//         data: {
//             q: 'artist:' + query,
//             type: 'album',
//             market: "US"
//         },
//         success: function (response) {
//             resultsPlaceholder.innerHTML = template(response);
//         }
//     });
// };

// results.addEventListener('click', function(e) {
//     var target = e.target;
//     if (target !== null && target.classList.contains('cover')) {
//         if (target.classList.contains(playingCssClass)) {
//             audioObject.pause();
//         } else {
//             if (audioObject) {
//                 audioObject.pause();
//             }
//             fetchTracks(target.getAttribute('data-album-id'), function(data) {
//                 audioObject = new Audio(data.tracks.items[0].preview_url);
//                 audioObject.play();
//                 target.classList.add(playingCssClass);
//                 audioObject.addEventListener('ended', function() {
//                     target.classList.remove(playingCssClass);
//                 });
//                 audioObject.addEventListener('pause', function() {
//                     target.classList.remove(playingCssClass);
//                });
//             });
//         }
//     }
// });

// searchAlbums('Beastie Boys');
