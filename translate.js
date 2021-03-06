(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.translate = factory());
}(this, (function () { 'use strict';

var google = {
  "afrikaans": "af",
  "albanian": "sq",
  "amharic": "am",
  "arabic": "ar",
  "armenian": "hy",
  "azerbaijani": "az",
  "basque": "eu",
  "belarusian": "be",
  "bengali": "bn",
  "bosnian": "bs",
  "bulgarian": "bg",
  "catalan": "ca",
  "cebuano": "ceb",
  "chichewa": "ny",
  "chinese (simplified)": "zh",
  "chinese (traditional)": "zh-TW",
  "corsican": "co",
  "croatian": "hr",
  "czech": "cs",
  "danish": "da",
  "dutch": "nl",
  "english": "en",
  "esperanto": "eo",
  "estonian": "et",
  "filipino": "tl",
  "finnish": "fi",
  "french": "fr",
  "frisian": "fy",
  "galician": "gl",
  "georgian": "ka",
  "german": "de",
  "greek": "el",
  "gujarati": "gu",
  "haitian creole": "ht",
  "hausa": "ha",
  "hawaiian": "haw",
  "hebrew": "iw",
  "hindi": "hi",
  "hmong": "hmn",
  "hungarian": "hu",
  "icelandic": "is",
  "igbo": "ig",
  "indonesian": "id",
  "irish": "ga",
  "italian": "it",
  "japanese": "ja",
  "javanese": "jw",
  "kannada": "kn",
  "kazakh": "kk",
  "khmer": "km",
  "korean": "ko",
  "kurdish (kurmanji)": "ku",
  "kyrgyz": "ky",
  "lao": "lo",
  "latin": "la",
  "latvian": "lv",
  "lithuanian": "lt",
  "luxembourgish": "lb",
  "macedonian": "mk",
  "malagasy": "mg",
  "malay": "ms",
  "malayalam": "ml",
  "maltese": "mt",
  "maori": "mi",
  "marathi": "mr",
  "mongolian": "mn",
  "myanmar (burmese)": "my",
  "nepali": "ne",
  "norwegian": "no",
  "pashto": "ps",
  "persian": "fa",
  "polish": "pl",
  "portuguese": "pt",
  "punjabi": "pa",
  "romanian": "ro",
  "russian": "ru",
  "samoan": "sm",
  "scots gaelic": "gd",
  "serbian": "sr",
  "sesotho": "st",
  "shona": "sn",
  "sindhi": "sd",
  "sinhala": "si",
  "slovak": "sk",
  "slovenian": "sl",
  "somali": "so",
  "spanish": "es",
  "sundanese": "su",
  "swahili": "sw",
  "swedish": "sv",
  "tajik": "tg",
  "tamil": "ta",
  "telugu": "te",
  "thai": "th",
  "turkish": "tr",
  "ukrainian": "uk",
  "urdu": "ur",
  "uzbek": "uz",
  "vietnamese": "vi",
  "welsh": "cy",
  "xhosa": "xh",
  "yiddish": "yi",
  "yoruba": "yo",
  "zulu": "zu"
};

var yandex = {
  "afrikaans": "af",
  "amharic": "am",
  "arabic": "ar",
  "azerbaijani": "az",
  "bashkir": "ba",
  "belarusian": "be",
  "bulgarian": "bg",
  "bengali": "bn",
  "bosnian": "bs",
  "catalan": "ca",
  "cebuano": "ceb",
  "czech": "cs",
  "welsh": "cy",
  "danish": "da",
  "german": "de",
  "greek": "el",
  "english": "en",
  "esperanto": "eo",
  "spanish": "es",
  "estonian": "et",
  "basque": "eu",
  "persian": "fa",
  "finnish": "fi",
  "french": "fr",
  "irish": "ga",
  "scottish gaelic": "gd",
  "galician": "gl",
  "gujarati": "gu",
  "hebrew": "he",
  "hindi": "hi",
  "croatian": "hr",
  "haitian": "ht",
  "hungarian": "hu",
  "armenian": "hy",
  "indonesian": "id",
  "icelandic": "is",
  "italian": "it",
  "japanese": "ja",
  "javanese": "jv",
  "georgian": "ka",
  "kazakh": "kk",
  "khmer": "km",
  "kannada": "kn",
  "korean": "ko",
  "kyrgyz": "ky",
  "latin": "la",
  "luxembourgish": "lb",
  "lao": "lo",
  "lithuanian": "lt",
  "latvian": "lv",
  "malagasy": "mg",
  "mari": "mhr",
  "maori": "mi",
  "macedonian": "mk",
  "malayalam": "ml",
  "mongolian": "mn",
  "marathi": "mr",
  "hill mari": "mrj",
  "malay": "ms",
  "maltese": "mt",
  "burmese": "my",
  "nepali": "ne",
  "dutch": "nl",
  "norwegian": "no",
  "punjabi": "pa",
  "papiamento": "pap",
  "polish": "pl",
  "portuguese": "pt",
  "romanian": "ro",
  "russian": "ru",
  "sinhalese": "si",
  "slovak": "sk",
  "slovenian": "sl",
  "albanian": "sq",
  "serbian": "sr",
  "sundanese": "su",
  "swedish": "sv",
  "swahili": "sw",
  "tamil": "ta",
  "telugu": "te",
  "tajik": "tg",
  "thai": "th",
  "tagalog": "tl",
  "turkish": "tr",
  "tatar": "tt",
  "udmurt": "udm",
  "ukrainian": "uk",
  "urdu": "ur",
  "uzbek": "uz",
  "vietnamese": "vi",
  "xhosa": "xh",
  "yiddish": "yi",
  "chinese": "zh"
};

var language = (name, engine) => {
    switch (engine) {
        case 'google': engine = google; break;
        case 'yandex': engine = yandex; break;
        default: engine = google;
    }
    // Validate the name string
    if (typeof name !== 'string') {
      throw new Error(`The language must be a string, received ${typeof name}`);
    }
    // Possible overflow errors
    if (name.length > 100) {
      throw new Error(`The language must be a string under 100 characters, received ${name.length}`);
    }
    // Let's work with lowercase for everything
    name = name.toLowerCase();

    return map(name, engine);

    function map(name, engine) {
        let code = Object.entries(engine).find(kv => kv[0] === name || kv[1] === name);
        if (!name || !code) { 
            throw new Error(`The name "${name}" is not suppored by the ${engine} translation API.`);
        }
        return code[1];
    }
};

// Translation engines
// Handle different translations differently to allow for extra flexibility


const google$1 = {
  needkey: true,
  fetch: ({ key, from, to, text }) => [
    `https://translation.googleapis.com/language/translate/v2?key=${key}&format=text&source=${from}&target=${to}&q=${encodeURIComponent(text)}`,
    { method: 'POST' }
  ],
  parse: res => res.json().then(body => {
    if (body.error) {
      throw new Error(body.error.errors[0].message);
    }
    body = body.data.translations[0];
    if (!body) {
      throw new Error('Translation not found');
    }
    return body.translatedText;
  })
};


const yandex$1 = {
  needkey: true,
  fetch: ({ key, from, to, text }) => [
    `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${key}&lang=${from}-${to}&text=${encodeURIComponent(text)}`,
    { method: 'POST', body: '' }
  ],
  parse: res => res.json().then(body => {
    if (body.code !== 200) {
      throw new Error(body.message);
    }
    return body.text[0];
  })
};


var engines = { google: google$1, yandex: yandex$1 };

// From https://www.npmjs.com/package/memory-cache (Rollup didn't want to bundle it otherwise)
'use strict';

function Cache () {
  var _cache = Object.create(null);
  var _hitCount = 0;
  var _missCount = 0;
  var _size = 0;
  var _debug = false;

  this.put = function(key, value, time, timeoutCallback) {
    if (_debug) {
      console.log('caching: %s = %j (@%s)', key, value, time);
    }

    if (typeof time !== 'undefined' && (typeof time !== 'number' || isNaN(time) || time <= 0)) {
      throw new Error('Cache timeout must be a positive number');
    } else if (typeof timeoutCallback !== 'undefined' && typeof timeoutCallback !== 'function') {
      throw new Error('Cache timeout callback must be a function');
    }

    var oldRecord = _cache[key];
    if (oldRecord) {
      clearTimeout(oldRecord.timeout);
    } else {
      _size++;
    }

    var record = {
      value: value,
      expire: time + Date.now()
    };

    if (!isNaN(record.expire)) {
      record.timeout = setTimeout(function() {
        _del(key);
        if (timeoutCallback) {
          timeoutCallback(key, value);
        }
      }.bind(this), time);
    }

    _cache[key] = record;

    return value;
  };

  this.del = function(key) {
    var canDelete = true;

    var oldRecord = _cache[key];
    if (oldRecord) {
      clearTimeout(oldRecord.timeout);
      if (!isNaN(oldRecord.expire) && oldRecord.expire < Date.now()) {
        canDelete = false;
      }
    } else {
      canDelete = false;
    }

    if (canDelete) {
      _del(key);
    }

    return canDelete;
  };

  function _del(key){
    _size--;
    delete _cache[key];
  }

  this.clear = function() {
    for (var key in _cache) {
      clearTimeout(_cache[key].timeout);
    }
    _size = 0;
    _cache = Object.create(null);
    if (_debug) {
      _hitCount = 0;
      _missCount = 0;
    }
  };

  this.get = function(key) {
    var data = _cache[key];
    if (typeof data != "undefined") {
      if (isNaN(data.expire) || data.expire >= Date.now()) {
        if (_debug) _hitCount++;
        return data.value;
      } else {
        // free some space
        if (_debug) _missCount++;
        _size--;
        delete _cache[key];
      }
    } else if (_debug) {
      _missCount++;
    }
    return null;
  };

  this.size = function() {
    return _size;
  };

  this.memsize = function() {
    var size = 0,
      key;
    for (key in _cache) {
      size++;
    }
    return size;
  };

  this.debug = function(bool) {
    _debug = bool;
  };

  this.hits = function() {
    return _hitCount;
  };

  this.misses = function() {
    return _missCount;
  };

  this.keys = function() {
    return Object.keys(_cache);
  };

  this.exportJson = function() {
    var plainJsCache = {};

    // Discard the `timeout` property.
    // Note: JSON doesn't support `NaN`, so convert it to `'NaN'`.
    for (var key in _cache) {
      var record = _cache[key];
      plainJsCache[key] = {
        value: record.value,
        expire: record.expire || 'NaN',
      };
    }

    return JSON.stringify(plainJsCache);
  };

  this.importJson = function(jsonToImport, options) {
    var cacheToImport = JSON.parse(jsonToImport);
    var currTime = Date.now();

    var skipDuplicates = options && options.skipDuplicates;

    for (var key in cacheToImport) {
      if (cacheToImport.hasOwnProperty(key)) {
        if (skipDuplicates) {
          var existingRecord = _cache[key];
          if (existingRecord) {
            if (_debug) {
              console.log('Skipping duplicate imported key \'%s\'', key);
            }
            continue;
          }
        }

        var record = cacheToImport[key];

        // record.expire could be `'NaN'` if no expiry was set.
        // Try to subtract from it; a string minus a number is `NaN`, which is perfectly fine here.
        var remainingTime = record.expire - currTime;

        if (remainingTime <= 0) {
          // Delete any record that might exist with the same key, since this key is expired.
          this.del(key);
          continue;
        }

        // Remaining time must now be either positive or `NaN`,
        // but `put` will throw an error if we try to give it `NaN`.
        remainingTime = remainingTime > 0 ? remainingTime : undefined;

        this.put(key, record.value, remainingTime);
      }
    }

    return this.size();
  };
}

const exp$2 = new Cache();
exp$2.Cache = Cache;

// translate.js
// Translate text into different languages;

// Load a language parser to allow for more flexibility in the language choice
// Load the default engines for translation
// Cache the different translations to avoid resending requests
// Main function
const Translate = function (options = {}) {
  if (!(this instanceof Translate)) {
    return new Translate(options);
  }

  const defaults = {
    from: 'en',
    to: 'en',
    cache: undefined,
    language: language,
    engines: engines,
    engine: 'google',
    keys: {}
  };

  const translate = (text, opts = {}) => {
    // Load all of the appropriate options (verbose but fast)
    // Note: not all of those *should* be documented since some are internal only
    if (typeof opts === 'string') opts = { to: opts };
    opts.text = text;
    opts.from = language(opts.from || translate.from, opts.engine || translate.engine);
    opts.to = language(opts.to || translate.to, opts.engine || translate.engine);
    opts.cache = opts.cache || translate.cache;
    opts.engines = opts.engines || {};
    opts.engine = opts.engine || translate.engine;
    opts.id = opts.id || `${opts.from}:${opts.to}:${opts.engine}:${opts.text}`;
    opts.keys = opts.keys || translate.keys || {};
    for (let name in translate.keys) {
      // The options has stronger preference than the global value
      opts.keys[name] = opts.keys[name] || translate.keys[name];
    }
    opts.key = opts.key || translate.key || opts.keys[opts.engine];

    // TODO: validation for few of those

    // Use the desired engine
    const engine = opts.engines[opts.engine] || translate.engines[opts.engine];

    // If it is cached return ASAP
    const cached = exp$2.get(opts.id);
    if (cached) return Promise.resolve(cached);

    // Target is the same as origin, just return the string
    if (opts.to === opts.from) {
      return Promise.resolve(opts.text);
    }

    // Will load only for Node.js and use the native function on the browser
    if (typeof fetch === 'undefined') {
      global.fetch = require('node-fetch');
    }

    if (engine.needkey && !opts.key) {
      throw new Error(`The engine "${opts.engine}" needs a key, please provide it`);
    }

    const fetchOpts = engine.fetch(opts);
    return fetch(...fetchOpts)
      .then(engine.parse)
      .then(translated => exp$2.put(opts.id, translated, opts.cache));
  };

  for (let key in defaults) {
    translate[key] = typeof options[key] === 'undefined' ? defaults[key] : options[key];
  }
  return translate;
};


// Small hack needed for Webpack/Babel: https://github.com/webpack/webpack/issues/706
const exp = new Translate();
exp.Translate = Translate;

return exp;

})));
