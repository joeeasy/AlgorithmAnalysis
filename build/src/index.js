'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _crawler = require('crawler');

var _crawler2 = _interopRequireDefault(_crawler);

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

var _cheerio = require('cheerio');

var _cheerio2 = _interopRequireDefault(_cheerio);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

var _webpackDevMiddleware = require('webpack-dev-middleware');

var _webpackDevMiddleware2 = _interopRequireDefault(_webpackDevMiddleware);

var _webpack3 = require('../../webpack.config');

var _webpack4 = _interopRequireDefault(_webpack3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// starting app
var app = (0, _express2.default)();

var Port = 5000 || process.env.PORT;
// console.log(process.env)

// parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }))

// // parse application/json
// app.use(bodyParser.json())

// app.use(function (req, res) {
//   res.setHeader('Content-Type', 'text/plain')
//   res.write('you posted:\n')
//   res.end(JSON.stringify(req.body, null, 2))
// })
// load static files=============
app.use(_express2.default.static(_path2.default.resolve(__dirname, '../../client/public')));
// =============================
app.use((0, _webpackDevMiddleware2.default)((0, _webpack2.default)(_webpack4.default)));
// =======================================


// app.use(express.static(path.resolve(__dirname, '../../client/public')));

app.get('/*', function (req, res) {
  res.sendfile(_path2.default.resolve(__dirname, '../../client/public/index.html'));
});

/**
 * start scrapper
 */

app.get('/scrape', function (req, res) {
  var url = 'http://mjl.clarivate.com/cgi-bin/jrnlst/jlresults.cgi?PC=A&Word=' + req.query.word;

  (0, _request2.default)(url, function (error, response, body) {
    if (!error) {
      var $ = _cheerio2.default.load(body);
      var allBody = void 0;

      // var title = $('title').text();
      var content = $('body').html();
      allBody = $('p.alphalink');
      // var freeArticles = $('.central-featured-lang.lang1 a small').text()

      console.log('URL: ' + url);
      console.log('Title: ');
      console.log('EN articles: ');
      console.log(allBody.children());
      res.send(content);
    } else {
      console.log("We’ve encountered an error: " + error);
    }
  });
});

app.listen(Port, function (req, res) {
  return console.log('server started http://localhost:' + Port);
});
//# sourceMappingURL=index.js.map