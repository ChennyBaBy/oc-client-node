'use strict';
module.exports.data = function(e, a) {
  var n = e.acceptLanguage;
  n = n && n.length && n.length > 0 ? n[0].code : 'en';
  var t = { en: 'english', ja: 'japanese' };
  a(null, { language: t[t[n] ? n : 'en'] });
};
