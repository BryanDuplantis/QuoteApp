var QUOTE_API_URL = 'http://api.theysaidso.com/qod?category=love'
var FIREBASE_URL = 'https://my-cappstone.firebaseio.com/.json'
var loveBtn;
var truthBtn;
var beautyBtn;


$.get(FIREBASE_URL + "quotes.json", function (data) {
  Object.keys(data).forEach(function () {
    addQuoteDetail(data);
  });
});

loveBtn = $(".loveBtn");
truthBtn = $("truthBtn");
beautyBtn = $("beautyBtn");

$(".loveBtn").on("click", function (data) {

})




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
