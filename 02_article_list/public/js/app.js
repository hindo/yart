(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports=[
  {
    "title":"Five Jobs That Hardly Existed 10 Years Ago",
    "description":"If you're looking for a new career or career change then make sure you're looking forwards and not backwards.",
    "url":"http://www.finder.com.au/jobs-that-hardly-existed",
    "thumbnail":"http://findercdn.com.au.s3-website-ap-southeast-2.amazonaws.com/shopping/images/hero/1510-photo.jpg"
  },
  {
    "title":"McAfee Promo Codes and Coupons June 2015",
    "description":"McAfee offers a range of online security products determined to keep you and your data safe online.",
    "url":"http://www.finder.com.au/mcafee-promo-codes",
    "thumbnail":"http://findercdn.com.au.s3-website-ap-southeast-2.amazonaws.com/finder-au/wp-uploads/2015/06/McAfee.Feature.jpg"
  },
  {
    "title":"Etsy Australia: What to find and buy at the online local market",
    "description":"Find something truly unique on the world’s biggest online marketplace for handmade, collectable, and vintage items: Etsy.",
    "url":"http://www.finder.com.au/etsy-australia",
    "thumbnail":"http://findercdn.com.au.s3-website-ap-southeast-2.amazonaws.com/finder-au/wp-uploads/2015/06/Lamps.Logo_.Crop_.jpg"
  },
  {
    "title":"Earn $$ and Get Jobs Done for Cheap with Fiverr June 2015",
    "description":"Need a job done fast, professionally, and on the cheap? Fiverr is the answer.",
    "url":"http://www.finder.com.au/fiverr-discounts",
    "thumbnail":"http://findercdn.com.au.s3-website-ap-southeast-2.amazonaws.com/finder-au/wp-uploads/2015/06/Fiverr.gif"
  },
  {
    "title":"Hockey Monkey Coupons and Promo Codes June 2015",
    "description":"Hockey Monkey is an online retailer of all things hockey (ice hockey, that is!)",
    "url":"http://www.finder.com.au/hockey-monkey-coupons",
    "thumbnail":"http://findercdn.com.au.s3-website-ap-southeast-2.amazonaws.com/finder-au/wp-uploads/2015/06/Hockey-Monkey-Feature.jpg"
  },
  {
    "title":"Needy Money Personal Loan Review",
    "description":"Bridge any financial gap with a Personal Loan from Needy Money",
    "url":"http://www.finder.com.au/needy-money-personal-loan"
  },
  {
    "title":"Loans for the unemployed",
    "description":"Worried you won't meet the employment requirements to borrow? Find out about unemployed loans",
    "url":"http://www.finder.com.au/unemployed-loans",
    "thumbnail":"http://findercdn.com.au.s3-website-ap-southeast-2.amazonaws.com/finder-au/wp-uploads/2014/12/centrelink.jpg"
  },
  {
    "title":"Swift Loans Review",
    "description":"Do you want a simple online loan? Apply with Swift Loans and secure a lower-than-normal payday loan interest rate.",
    "url":"http://www.finder.com.au/swift-loans"
  },
  {
    "title":"Needy Money Quick Small Loan Review",
    "description":"Apply for a Quick Small Loan through Needy Money, no matter what your credit history looks like.",
    "url":"http://www.finder.com.au/needy-money-small-loan"
  },
  {
    "title":"How much does it cost to renovate a bathroom in Australia?",
    "description":"How much you'll need to spend to update your bathroom",
    "url":"http://www.finder.com.au/bathroom-renovation-costs-australia",
    "thumbnail":"http://findercdn.com.au.s3-website-ap-southeast-2.amazonaws.com/finder-au/wp-uploads/2015/06/bathroom-renovation-costs-guide.jpg"
  }
]

},{}],2:[function(require,module,exports){
'use strict';

var _feed = require('../data/feed.json');

var _feed2 = _interopRequireDefault(_feed);

var _articleList = require('./articleList');

var _articleList2 = _interopRequireDefault(_articleList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var list = (0, _articleList2.default)({ items: _feed2.default });

var rApp = function rApp(data) {
  return '\n    <div>' + data.list + '</div>\n  ';
};

document.querySelector('.app').innerHTML = rApp({ list: list });

},{"../data/feed.json":1,"./articleList":4}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _helpers = require('./helpers');

var rListItem = function rListItem(data) {
  return '<article class="article">\n    <figure class="article__thumbnail">\n      <a href="' + data.url + '">\n        <img src="' + (data.thumbnail || 'http://via.placeholder.com/600/228dbe/ffffff?text=' + (0, _helpers.stripText)((0, _helpers.plusifyText)(data.title))) + '" />\n      </a>\n    </figure>\n    <div class="article__text">\n      <div class="article__text-content">\n        <a class="article__title" href="' + data.url + '">\n          <span>' + data.title + '</span>\n        </a>\n        <p class="article__description">' + data.description + '</p>\n        <a href="' + data.url + '" class="article__link">Read more...</a>\n      </div>\n    </div>\n  </article>';
};

exports.default = rListItem;

},{"./helpers":5}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _articleItem = require('./articleItem');

var _articleItem2 = _interopRequireDefault(_articleItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rList = function rList(data) {
  return '<section class="articles">\n    ' + data.items.map(function (item) {
    return (0, _articleItem2.default)(item);
  }).join('') + '\n  </section>';
};

exports.default = rList;

},{"./articleItem":3}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var stripText = exports.stripText = function stripText(str) {
  return str.replace(/^\s+|\s+$/g, '');
};

var plusifyText = exports.plusifyText = function plusifyText(str) {
  return str.replace(/\+/g, '%2b').replace(/\s/g, '+');
};

},{}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvZGF0YS9mZWVkLmpzb24iLCJzcmMvanMvYXBwLmpzIiwic3JjL2pzL2FydGljbGVJdGVtLmpzIiwic3JjL2pzL2FydGljbGVMaXN0LmpzIiwic3JjL2pzL2hlbHBlcnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUMzREE7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTSxPQUFPLDJCQUFNLEVBQUMscUJBQUQsRUFBTixDQUFiOztBQUVBLElBQU0sT0FBTyxTQUFQLElBQU8sQ0FBQyxJQUFELEVBQVU7QUFDckIseUJBQ1MsS0FBSyxJQURkO0FBR0QsQ0FKRDs7QUFNQSxTQUFTLGFBQVQsQ0FBdUIsTUFBdkIsRUFBK0IsU0FBL0IsR0FBMkMsS0FBSyxFQUFDLFVBQUQsRUFBTCxDQUEzQzs7Ozs7Ozs7O0FDWEE7O0FBRUEsSUFBTSxZQUFZLFNBQVosU0FBWSxDQUFDLElBQUQsRUFBVTtBQUMxQixpR0FFZSxLQUFLLEdBRnBCLCtCQUdrQixLQUFLLFNBQUwsMkRBQXVFLHdCQUFVLDBCQUFZLEtBQUssS0FBakIsQ0FBVixDQUh6Riw4SkFRd0MsS0FBSyxHQVI3Qyw0QkFTZ0IsS0FBSyxLQVRyQix1RUFXd0MsS0FBSyxXQVg3QywrQkFZaUIsS0FBSyxHQVp0QjtBQWdCRCxDQWpCRDs7a0JBbUJlLFM7Ozs7Ozs7OztBQ3JCZjs7Ozs7O0FBRUEsSUFBTSxRQUFRLFNBQVIsS0FBUSxDQUFDLElBQUQsRUFBVTtBQUN0Qiw4Q0FDSSxLQUFLLEtBQUwsQ0FBVyxHQUFYLENBQWUsVUFBQyxJQUFELEVBQVU7QUFDekIsV0FBTywyQkFBVSxJQUFWLENBQVA7QUFDRCxHQUZDLEVBRUMsSUFGRCxDQUVNLEVBRk4sQ0FESjtBQUtELENBTkQ7O2tCQVFlLEs7Ozs7Ozs7O0FDVlIsSUFBTSxnQ0FBWSxTQUFaLFNBQVksQ0FBQyxHQUFELEVBQVM7QUFDaEMsU0FBTyxJQUFJLE9BQUosQ0FBWSxZQUFaLEVBQTBCLEVBQTFCLENBQVA7QUFDRCxDQUZNOztBQUlBLElBQU0sb0NBQWMsU0FBZCxXQUFjLENBQUMsR0FBRCxFQUFTO0FBQ2xDLFNBQU8sSUFBSSxPQUFKLENBQVksS0FBWixFQUFtQixLQUFuQixFQUEwQixPQUExQixDQUFrQyxLQUFsQyxFQUF5QyxHQUF6QyxDQUFQO0FBQ0QsQ0FGTSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJtb2R1bGUuZXhwb3J0cz1bXG4gIHtcbiAgICBcInRpdGxlXCI6XCJGaXZlIEpvYnMgVGhhdCBIYXJkbHkgRXhpc3RlZCAxMCBZZWFycyBBZ29cIixcbiAgICBcImRlc2NyaXB0aW9uXCI6XCJJZiB5b3UncmUgbG9va2luZyBmb3IgYSBuZXcgY2FyZWVyIG9yIGNhcmVlciBjaGFuZ2UgdGhlbiBtYWtlIHN1cmUgeW91J3JlIGxvb2tpbmcgZm9yd2FyZHMgYW5kIG5vdCBiYWNrd2FyZHMuXCIsXG4gICAgXCJ1cmxcIjpcImh0dHA6Ly93d3cuZmluZGVyLmNvbS5hdS9qb2JzLXRoYXQtaGFyZGx5LWV4aXN0ZWRcIixcbiAgICBcInRodW1ibmFpbFwiOlwiaHR0cDovL2ZpbmRlcmNkbi5jb20uYXUuczMtd2Vic2l0ZS1hcC1zb3V0aGVhc3QtMi5hbWF6b25hd3MuY29tL3Nob3BwaW5nL2ltYWdlcy9oZXJvLzE1MTAtcGhvdG8uanBnXCJcbiAgfSxcbiAge1xuICAgIFwidGl0bGVcIjpcIk1jQWZlZSBQcm9tbyBDb2RlcyBhbmQgQ291cG9ucyBKdW5lIDIwMTVcIixcbiAgICBcImRlc2NyaXB0aW9uXCI6XCJNY0FmZWUgb2ZmZXJzIGEgcmFuZ2Ugb2Ygb25saW5lIHNlY3VyaXR5IHByb2R1Y3RzIGRldGVybWluZWQgdG8ga2VlcCB5b3UgYW5kIHlvdXIgZGF0YSBzYWZlIG9ubGluZS5cIixcbiAgICBcInVybFwiOlwiaHR0cDovL3d3dy5maW5kZXIuY29tLmF1L21jYWZlZS1wcm9tby1jb2Rlc1wiLFxuICAgIFwidGh1bWJuYWlsXCI6XCJodHRwOi8vZmluZGVyY2RuLmNvbS5hdS5zMy13ZWJzaXRlLWFwLXNvdXRoZWFzdC0yLmFtYXpvbmF3cy5jb20vZmluZGVyLWF1L3dwLXVwbG9hZHMvMjAxNS8wNi9NY0FmZWUuRmVhdHVyZS5qcGdcIlxuICB9LFxuICB7XG4gICAgXCJ0aXRsZVwiOlwiRXRzeSBBdXN0cmFsaWE6IFdoYXQgdG8gZmluZCBhbmQgYnV5IGF0IHRoZSBvbmxpbmUgbG9jYWwgbWFya2V0XCIsXG4gICAgXCJkZXNjcmlwdGlvblwiOlwiRmluZCBzb21ldGhpbmcgdHJ1bHkgdW5pcXVlIG9uIHRoZSB3b3JsZOKAmXMgYmlnZ2VzdCBvbmxpbmUgbWFya2V0cGxhY2UgZm9yIGhhbmRtYWRlLCBjb2xsZWN0YWJsZSwgYW5kIHZpbnRhZ2UgaXRlbXM6IEV0c3kuXCIsXG4gICAgXCJ1cmxcIjpcImh0dHA6Ly93d3cuZmluZGVyLmNvbS5hdS9ldHN5LWF1c3RyYWxpYVwiLFxuICAgIFwidGh1bWJuYWlsXCI6XCJodHRwOi8vZmluZGVyY2RuLmNvbS5hdS5zMy13ZWJzaXRlLWFwLXNvdXRoZWFzdC0yLmFtYXpvbmF3cy5jb20vZmluZGVyLWF1L3dwLXVwbG9hZHMvMjAxNS8wNi9MYW1wcy5Mb2dvXy5Dcm9wXy5qcGdcIlxuICB9LFxuICB7XG4gICAgXCJ0aXRsZVwiOlwiRWFybiAkJCBhbmQgR2V0IEpvYnMgRG9uZSBmb3IgQ2hlYXAgd2l0aCBGaXZlcnIgSnVuZSAyMDE1XCIsXG4gICAgXCJkZXNjcmlwdGlvblwiOlwiTmVlZCBhIGpvYiBkb25lIGZhc3QsIHByb2Zlc3Npb25hbGx5LCBhbmQgb24gdGhlIGNoZWFwPyBGaXZlcnIgaXMgdGhlIGFuc3dlci5cIixcbiAgICBcInVybFwiOlwiaHR0cDovL3d3dy5maW5kZXIuY29tLmF1L2ZpdmVyci1kaXNjb3VudHNcIixcbiAgICBcInRodW1ibmFpbFwiOlwiaHR0cDovL2ZpbmRlcmNkbi5jb20uYXUuczMtd2Vic2l0ZS1hcC1zb3V0aGVhc3QtMi5hbWF6b25hd3MuY29tL2ZpbmRlci1hdS93cC11cGxvYWRzLzIwMTUvMDYvRml2ZXJyLmdpZlwiXG4gIH0sXG4gIHtcbiAgICBcInRpdGxlXCI6XCJIb2NrZXkgTW9ua2V5IENvdXBvbnMgYW5kIFByb21vIENvZGVzIEp1bmUgMjAxNVwiLFxuICAgIFwiZGVzY3JpcHRpb25cIjpcIkhvY2tleSBNb25rZXkgaXMgYW4gb25saW5lIHJldGFpbGVyIG9mIGFsbCB0aGluZ3MgaG9ja2V5IChpY2UgaG9ja2V5LCB0aGF0IGlzISlcIixcbiAgICBcInVybFwiOlwiaHR0cDovL3d3dy5maW5kZXIuY29tLmF1L2hvY2tleS1tb25rZXktY291cG9uc1wiLFxuICAgIFwidGh1bWJuYWlsXCI6XCJodHRwOi8vZmluZGVyY2RuLmNvbS5hdS5zMy13ZWJzaXRlLWFwLXNvdXRoZWFzdC0yLmFtYXpvbmF3cy5jb20vZmluZGVyLWF1L3dwLXVwbG9hZHMvMjAxNS8wNi9Ib2NrZXktTW9ua2V5LUZlYXR1cmUuanBnXCJcbiAgfSxcbiAge1xuICAgIFwidGl0bGVcIjpcIk5lZWR5IE1vbmV5IFBlcnNvbmFsIExvYW4gUmV2aWV3XCIsXG4gICAgXCJkZXNjcmlwdGlvblwiOlwiQnJpZGdlIGFueSBmaW5hbmNpYWwgZ2FwIHdpdGggYSBQZXJzb25hbCBMb2FuIGZyb20gTmVlZHkgTW9uZXlcIixcbiAgICBcInVybFwiOlwiaHR0cDovL3d3dy5maW5kZXIuY29tLmF1L25lZWR5LW1vbmV5LXBlcnNvbmFsLWxvYW5cIlxuICB9LFxuICB7XG4gICAgXCJ0aXRsZVwiOlwiTG9hbnMgZm9yIHRoZSB1bmVtcGxveWVkXCIsXG4gICAgXCJkZXNjcmlwdGlvblwiOlwiV29ycmllZCB5b3Ugd29uJ3QgbWVldCB0aGUgZW1wbG95bWVudCByZXF1aXJlbWVudHMgdG8gYm9ycm93PyBGaW5kIG91dCBhYm91dCB1bmVtcGxveWVkIGxvYW5zXCIsXG4gICAgXCJ1cmxcIjpcImh0dHA6Ly93d3cuZmluZGVyLmNvbS5hdS91bmVtcGxveWVkLWxvYW5zXCIsXG4gICAgXCJ0aHVtYm5haWxcIjpcImh0dHA6Ly9maW5kZXJjZG4uY29tLmF1LnMzLXdlYnNpdGUtYXAtc291dGhlYXN0LTIuYW1hem9uYXdzLmNvbS9maW5kZXItYXUvd3AtdXBsb2Fkcy8yMDE0LzEyL2NlbnRyZWxpbmsuanBnXCJcbiAgfSxcbiAge1xuICAgIFwidGl0bGVcIjpcIlN3aWZ0IExvYW5zIFJldmlld1wiLFxuICAgIFwiZGVzY3JpcHRpb25cIjpcIkRvIHlvdSB3YW50IGEgc2ltcGxlIG9ubGluZSBsb2FuPyBBcHBseSB3aXRoIFN3aWZ0IExvYW5zIGFuZCBzZWN1cmUgYSBsb3dlci10aGFuLW5vcm1hbCBwYXlkYXkgbG9hbiBpbnRlcmVzdCByYXRlLlwiLFxuICAgIFwidXJsXCI6XCJodHRwOi8vd3d3LmZpbmRlci5jb20uYXUvc3dpZnQtbG9hbnNcIlxuICB9LFxuICB7XG4gICAgXCJ0aXRsZVwiOlwiTmVlZHkgTW9uZXkgUXVpY2sgU21hbGwgTG9hbiBSZXZpZXdcIixcbiAgICBcImRlc2NyaXB0aW9uXCI6XCJBcHBseSBmb3IgYSBRdWljayBTbWFsbCBMb2FuIHRocm91Z2ggTmVlZHkgTW9uZXksIG5vIG1hdHRlciB3aGF0IHlvdXIgY3JlZGl0IGhpc3RvcnkgbG9va3MgbGlrZS5cIixcbiAgICBcInVybFwiOlwiaHR0cDovL3d3dy5maW5kZXIuY29tLmF1L25lZWR5LW1vbmV5LXNtYWxsLWxvYW5cIlxuICB9LFxuICB7XG4gICAgXCJ0aXRsZVwiOlwiSG93IG11Y2ggZG9lcyBpdCBjb3N0IHRvIHJlbm92YXRlIGEgYmF0aHJvb20gaW4gQXVzdHJhbGlhP1wiLFxuICAgIFwiZGVzY3JpcHRpb25cIjpcIkhvdyBtdWNoIHlvdSdsbCBuZWVkIHRvIHNwZW5kIHRvIHVwZGF0ZSB5b3VyIGJhdGhyb29tXCIsXG4gICAgXCJ1cmxcIjpcImh0dHA6Ly93d3cuZmluZGVyLmNvbS5hdS9iYXRocm9vbS1yZW5vdmF0aW9uLWNvc3RzLWF1c3RyYWxpYVwiLFxuICAgIFwidGh1bWJuYWlsXCI6XCJodHRwOi8vZmluZGVyY2RuLmNvbS5hdS5zMy13ZWJzaXRlLWFwLXNvdXRoZWFzdC0yLmFtYXpvbmF3cy5jb20vZmluZGVyLWF1L3dwLXVwbG9hZHMvMjAxNS8wNi9iYXRocm9vbS1yZW5vdmF0aW9uLWNvc3RzLWd1aWRlLmpwZ1wiXG4gIH1cbl1cbiIsImltcG9ydCBmZWVkIGZyb20gJy4uL2RhdGEvZmVlZC5qc29uJ1xuaW1wb3J0IHJMaXN0IGZyb20gJy4vYXJ0aWNsZUxpc3QnXG5cbmNvbnN0IGxpc3QgPSByTGlzdCh7aXRlbXM6IGZlZWR9KVxuXG5jb25zdCByQXBwID0gKGRhdGEpID0+IHtcbiAgcmV0dXJuIGBcbiAgICA8ZGl2PiR7ZGF0YS5saXN0fTwvZGl2PlxuICBgXG59XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hcHAnKS5pbm5lckhUTUwgPSByQXBwKHtsaXN0fSlcbiIsImltcG9ydCB7c3RyaXBUZXh0LCBwbHVzaWZ5VGV4dH0gZnJvbSAnLi9oZWxwZXJzJ1xuXG5jb25zdCByTGlzdEl0ZW0gPSAoZGF0YSkgPT4ge1xuICByZXR1cm4gYDxhcnRpY2xlIGNsYXNzPVwiYXJ0aWNsZVwiPlxuICAgIDxmaWd1cmUgY2xhc3M9XCJhcnRpY2xlX190aHVtYm5haWxcIj5cbiAgICAgIDxhIGhyZWY9XCIke2RhdGEudXJsfVwiPlxuICAgICAgICA8aW1nIHNyYz1cIiR7ZGF0YS50aHVtYm5haWwgfHwgYGh0dHA6Ly92aWEucGxhY2Vob2xkZXIuY29tLzYwMC8yMjhkYmUvZmZmZmZmP3RleHQ9JHtzdHJpcFRleHQocGx1c2lmeVRleHQoZGF0YS50aXRsZSkpfWB9XCIgLz5cbiAgICAgIDwvYT5cbiAgICA8L2ZpZ3VyZT5cbiAgICA8ZGl2IGNsYXNzPVwiYXJ0aWNsZV9fdGV4dFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImFydGljbGVfX3RleHQtY29udGVudFwiPlxuICAgICAgICA8YSBjbGFzcz1cImFydGljbGVfX3RpdGxlXCIgaHJlZj1cIiR7ZGF0YS51cmx9XCI+XG4gICAgICAgICAgPHNwYW4+JHtkYXRhLnRpdGxlfTwvc3Bhbj5cbiAgICAgICAgPC9hPlxuICAgICAgICA8cCBjbGFzcz1cImFydGljbGVfX2Rlc2NyaXB0aW9uXCI+JHtkYXRhLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgPGEgaHJlZj1cIiR7ZGF0YS51cmx9XCIgY2xhc3M9XCJhcnRpY2xlX19saW5rXCI+UmVhZCBtb3JlLi4uPC9hPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvYXJ0aWNsZT5gXG59XG5cbmV4cG9ydCBkZWZhdWx0IHJMaXN0SXRlbVxuIiwiaW1wb3J0IHJMaXN0SXRlbSBmcm9tICcuL2FydGljbGVJdGVtJ1xuXG5jb25zdCByTGlzdCA9IChkYXRhKSA9PiB7XG4gIHJldHVybiBgPHNlY3Rpb24gY2xhc3M9XCJhcnRpY2xlc1wiPlxuICAgICR7ZGF0YS5pdGVtcy5tYXAoKGl0ZW0pID0+IHtcbiAgICAgIHJldHVybiByTGlzdEl0ZW0oaXRlbSlcbiAgICB9KS5qb2luKCcnKX1cbiAgPC9zZWN0aW9uPmBcbn1cblxuZXhwb3J0IGRlZmF1bHQgckxpc3RcbiIsImV4cG9ydCBjb25zdCBzdHJpcFRleHQgPSAoc3RyKSA9PiB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgJycpXG59XG5cbmV4cG9ydCBjb25zdCBwbHVzaWZ5VGV4dCA9IChzdHIpID0+IHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9cXCsvZywgJyUyYicpLnJlcGxhY2UoL1xccy9nLCAnKycpXG59XG4iXX0=
