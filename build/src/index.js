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

var _pug = require('pug');

var _pug2 = _interopRequireDefault(_pug);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { scrapeRoute } from './route/index';
var mongoDB = 'mongodb://root:Acc355c0d3@ds261929.mlab.com:61929/algorithmanalysis';
// database connection
var connection = _mongoose2.default.connect(mongoDB);

var db = _mongoose2.default.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  // we're connected!
  console.log('connected');
});

// starting app
var app = (0, _express2.default)();

var Port = process.env.PORT || 5000;
// console.log(process.env)

// parse application/x-www-form-urlencoded
app.use(_bodyParser2.default.urlencoded({
  extended: false
}));

// // parse application/json
app.use(_bodyParser2.default.json());

// load static files=============
app.use(_express2.default.static(_path2.default.resolve(__dirname, '../../client/public')));

// =============================
app.use((0, _webpackDevMiddleware2.default)((0, _webpack2.default)(_webpack4.default)));
// =======================================

app.set('view engine', 'pug');
app.set("views", _path2.default.join(__dirname, "views"));

app.get('/', function (req, res) {
  res.sendfile(_path2.default.resolve(__dirname, '../../client/public/index.html'));
});

app.get('/contact', function (req, res) {
  res.sendfile(_path2.default.resolve(__dirname, '../../client/public/index.html'));
});

/**
 * start scrapper
 */

app.post('/search', function (req, res) {
  // console.log(req.query)
  var url = decodeURIComponent(req.query.search);
  // console.log(url)

  (0, _request2.default)(url, function (error, response, body) {
    var title = void 0,
        isbn = void 0,
        description = void 0,
        coverages = void 0,
        coverage = void 0;
    coverages = [];
    coverage = [];
    var data = [];

    if (!error) {
      var $ = _cheerio2.default.load(body);

      var content = Array.from($('#results > form > ul > li'));
      content.forEach(function (journal, index) {
        title = journal.children[0].children[0].data;
        isbn = journal.children[1].data;
        description = journal.children[1].next.next.data;
        // 
        $(journal).find("div > ul").each(function (i, cite) {
          coverage = [];
          cite.children.forEach(function (name) {
            if (name.name === 'li') {
              // console.log(name.firstChild.attribs)
              coverage.push({
                link: name.firstChild.attribs,
                text: name.firstChild.children[0].data
              });
            }
          });
        });
        //  coverage.push(coverages);
        data.push({
          title: title,
          isbn: isbn,
          description: description,
          coverage: coverage
        });
      });

      res.send(data);
    } else {
      console.log("We’ve encountered an error: " + error);
    }
  });
});

app.get('/scienceweb', function (req, res) {
  return res.render('index');
});

app.get('/login', function (req, res) {
  return res.render('login');
});
app.get('/scienceweb/pricing', function (req, res) {
  return res.render('pricing');
});
app.get('/scienceweb/institution-signup/:price', function (req, res) {
  return res.render('register');
});
app.get('/scienceweb/payment_summary', function (req, res) {
  return res.render('payment_summary');
});
app.get('/scienceweb/searchResult', function (req, res) {
  return res.render('search_result');
});
app.get('/scienceweb/search/:articleTitle', function (req, res) {
  return res.render('search_details');
});
app.get('/scienceweb/addArticle', function (req, res) {
  return res.render('addarticle');
});
app.get('/scienceweb/articles', function (req, res) {
  return res.render('articles');
});

app.listen(Port, function (req, res) {
  return console.log('server started http://localhost:' + Port);
});
//# sourceMappingURL=index.js.map