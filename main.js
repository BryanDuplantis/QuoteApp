// var QUOTE_API_URL = 'http://api.theysaidso.com/qod?category=love'
var FIREBASE_LOVE_URL = 'https://my-cappstone.firebaseio.com/'
var loveBtn;
var truthBtn;
var beautyBtn;

function getQuotes () {

};

// Button click code

loveBtn = $(".loveBtn");
truthBtn = $(".truthBtn");
beautyBtn = $(".beautyBtn");

$(".loveBtn").on("click", function() {
  $.get(FIREBASE_LOVE_URL + "quotes.json", function (data) {

    var quote = data[0].quote;
    var author = data[0].author;

    $("#quote").html(quote)
    $("#author").html(author)
})
  });

$(".truthBtn").on("click", function() {
  $.get(FIREBASE_LOVE_URL + "quotes.json", function (data) {

    var quote = data[9].quote;
    var author = data[9].author;

    $("#quote").html(quote)
    $("#author").html(author)

})
  });

$(".beautyBtn").on("click", function() {
  $.get(FIREBASE_LOVE_URL + "quotes.json", function (data) {

    var quote = data[11].quote;
    var author = data[11].author;

    $("#quote").html(quote)
    $("#author").html(author)

})
  });

loveArr = [];
truthArr = [];
beautyArr = [];

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
            });






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



// TeamTreeHouse code for parsing JSON data

// var xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function() {
//   if(xhr.readyState === 4) {
//     var employees = JSON.parse(xhr.responseText);
//     var statusHTML = '<ul class="bulleted">';
//     for (var i=0; i<employees.length; i += 1) {
//       if (employees[i].inoffice === true) {
//         statusHTML += '<li class="in">';
//       } else {
//         statusHTML += '<li class="out">';
//       }
//       statusHTML += employees[i].name;
//       statusHTML += '</li>';
//     }
//     statusHTML += '</ul>';
//     document.getElementById('employeeList').innerHTML = statusHTML;
//   }
// };
// xhr.open('GET', 'data/employees.json');
// xhr.send();

// end of JSON code
