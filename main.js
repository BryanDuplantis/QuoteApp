// var QUOTE_API_URL = 'http://api.theysaidso.com/qod?category=love'
var FIREBASE_URL = 'https://my-cappstone.firebaseio.com/'
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
  $.get(FIREBASE_URL + "quotes.json", function (data) {
    console.log(data[0].author);
    console.log(data[0].quote);

    var quote = data[0].quote;
    var author = data[0].author;

    $("#quote").html(quote)
    $("#author").html(author)
})
  });

$(".truthBtn").on("click", function() {
  $.get(FIREBASE_URL + "quotes.json", function (data) {
    console.log(data[1].author);
    console.log(data[1].quote);

    var quote = data[1].quote;
    var author = data[1].author;

    $("#quote").html(quote)
    $("#author").html(author)

})
  });

$(".beautyBtn").on("click", function() {
  $.get(FIREBASE_URL + "quotes.json", function (data) {
    console.log(data[2].author);
    console.log(data[2].quote);

    var quote = data[2].quote;
    var author = data[2].author;

    $("#quote").html(quote)
    $("#author").html(author)

})
  });

// function addQuoteDetail(data) {

//   var detail = createMovieNode(data);
//   var target = $('#quote');

//   target.empty();
//   target.append(detail);
// }




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
