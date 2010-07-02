// Andrew Lunny and Marak Squires
// Mit yo, copy paste us some credit

// simple fn to get the path given text to translate
var getEnglishTranslatePath = function (lang, text) {

  // set the default input and output languages to English and Spanish
  var input = languages[lang.input] || 'en',
  output = languages[lang.output] || 'es';

  return ['/ajax/services/language/translate?v=1.0&q='
            ,encodeURIComponent(text, lang)
            ,'&langpair=' + input + '|' + output].join("");
}

// stupid if else statement, i felt like actually making his library dual-sided instead of bashing my head against gemini.js 
if(typeof exports === 'undefined'){

  var translate = {
    text: function( lang, text, callback) {
      
      // this is not a good curry recipe. needs moar spice
      if(typeof lang !== 'object'){
        callback = text;
        text = lang;
      }
      
      $.ajax({
        url: 'http://ajax.googleapis.com' + getEnglishTranslatePath(lang, text) + '&callback=?',
        dataType: 'json',
        success: function(rsp){
          callback(rsp.responseData.translatedText);
        }
      });
    }
  };

  
}
else{

  var sys = require('sys')
    , http = require('http');

  var languages = require('./languages').getLangs();
  var translates = exports;

  // http client for accessing google api
  var googleTranslate = http.createClient(80, 'ajax.googleapis.com');

  // translate the text
  exports.text = function (lang, text, callback) {
    // this is not a good curry recipe. needs moar spice
    if(typeof lang !== 'object'){
      callback = text;
      text = lang;
    }
    var req = googleTranslate.request('GET', getEnglishTranslatePath(lang, text),
      {'host': 'ajax.googleapis.com', 'encoding':'utf-8'});
    req.addListener('response', function (response) {
      var responseBody = "";
      response.addListener('data', function (chunk) {
        responseBody += chunk;
      });
      response.addListener('end', function () {
        var bodyObj = JSON.parse(responseBody);
        if (bodyObj.responseStatus === 200) {
          callback(bodyObj.responseData.translatedText);
        } else {
          sys.debug("Translate API call failed");
        }
      });
    });
    req.end();
  }


  
  
}