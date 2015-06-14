var QUOTE_API_URL = 'http://api.theysaidso.com/qod?category=love'
var FIREBASE_URL = 'https://my-cappstone.firebaseio.com/.json'



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
