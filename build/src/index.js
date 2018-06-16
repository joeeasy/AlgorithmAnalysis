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

var _expressSession = require('express-session');

var _expressSession2 = _interopRequireDefault(_expressSession);

var _expressValidator = require('express-validator');

var _expressValidator2 = _interopRequireDefault(_expressValidator);

var _connectFlash = require('connect-flash');

var _connectFlash2 = _interopRequireDefault(_connectFlash);

var _pug = require('pug');

var _pug2 = _interopRequireDefault(_pug);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _articles = require('./models/articles');

var _articles2 = _interopRequireDefault(_articles);

var _cloudinary = require('cloudinary');

var _cloudinary2 = _interopRequireDefault(_cloudinary);

var _expressFileupload = require('express-fileupload');

var _expressFileupload2 = _interopRequireDefault(_expressFileupload);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// cloudinary configuration

// import { scrapeRoute } from './route/index';
_cloudinary2.default.config({
  cloud_name: 'dsxfchez8',
  api_key: '557836499496183',
  api_secret: 'PKUHg16h73APhZPubaRw25mfbdE'
});

var mongoDB = 'mongodb://root:test123@ds255260.mlab.com:55260/algorithmanalysis';
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
app.use(function (req, res, next) {
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect('http://' + req.hostname + req.url);
  } else {
    next();
  }
});

var Port = process.env.PORT || 5000;
// console.log(process.env)

// Express session
// app.set('trust proxy', 1) // trust first proxy
app.use((0, _expressSession2.default)({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}));

// Express message
app.use((0, _connectFlash2.default)());
app.use(function (req, res, next) {
  res.locals.messages = require('express-messages')(req, res);
  next();
});

// parse application/x-www-form-urlencoded
app.use(_bodyParser2.default.urlencoded({
  extended: false
}));

// file upload
app.use((0, _expressFileupload2.default)());

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

// GET ROUTES
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
app.get('/scienceweb/search/:articleID', function (req, res) {
  _articles2.default.find({ _id: req.params.articleID }, function (err, articles) {
    res.render('search_details', { articles: articles });
  });
});
app.get('/scienceweb/addArticle', function (req, res) {
  return res.render('addarticle');
});
app.get('/scienceweb/articles', function (req, res) {
  _articles2.default.find(function (err, articles) {
    // console.log(articles);
    res.render('articles', { articles: articles });
  });
});

// POST ROUTES creating articles
app.post('/scienceweb/addArticle', function (req, res) {
  if (!req.files) return res.status(400).send('No files were uploaded.');

  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  var image = req.files.thumbnail;
  console.log(image);
  // let file = req.files.filename,
  //     filename = filename;
  //     file.mv('../upload/'+filename);
  // console.log(__dirname, req.body.thumbnail);
  _cloudinary2.default.uploader.upload(__dirname + '/' + req.body.thumbnail, function (result) {
    console.log(result);
  });

  var article = new _articles2.default({
    title: req.body.articleTitle,
    author: req.body.authorname,
    branch: req.body.branch,
    volume: req.body.volume,
    issues: req.body.issues,
    pages: req.body.pages,
    publishedDate: req.body.publishedDate,
    articleContent: req.body.tcontent,
    abstract: req.body.abstract,
    thumbnail: req.body.thumbnail,
    paper: req.body.paper,
    roi: req.body.roi
  });

  // save the newly created article
  article.save(function (err) {
    if (err) return handleError(err);
    // saved!
    console.log('article was created');
  });
  res.redirect('/scienceweb/articles');
});

// post search result 
app.post('/scienceweb/searchResult', function (req, res) {
  // console.log(req.body.search)
  var keyword = req.body.search;
  var articles = [];
  _articles2.default.find(function (err, arts) {
    arts.filter(function (art) {
      // console.log(art.title)
      if (art.title.includes(keyword)) {
        articles.push(art);
      }
    });
    // console.log(articles);
    res.render('search_result', { articles: articles, keyword: keyword });
  });
});

// EDIT ARTICLE
app.get('/scienceweb/article/edit', function (req, res) {
  var id = req.query.articleId;
  _articles2.default.find({ _id: id }, function (err, articles) {
    res.render('editArticle', { articles: articles });
  });
});

// UPDATE EDITTED ARTICLES
app.post('/scienceweb/article/update', function (req, res) {
  // console.log(req.params.id);

  var id = req.body.id;
  var articleModified = {
    title: req.body.articleTitle,
    author: req.body.authorname,
    branch: req.body.branch,
    volume: req.body.volume,
    issues: req.body.issues,
    pages: req.body.pages,
    publishedDate: req.body.publishedDate,
    articleContent: req.body.tcontent,
    abstract: req.body.abstract,
    thumbnail: req.body.thumbnail,
    paper: req.body.paper,
    roi: req.body.roi
  };
  _articles2.default.updateOne({ _id: id }, articleModified, function (err, res) {
    console.log(res);
  });
  res.redirect('/scienceweb/articles');
});

//DELETE ARTICLE
app.post('/scienceweb/article/delete', function (req, res) {
  var id = req.body.id;
  _articles2.default.deleteOne({ _id: id }, function (err) {
    if (err) return handleError(err);

    // deleted at most one tank document
    res.redirect('/scienceweb/articles');
    console.log('success');
  });
});

app.listen(Port, function (req, res) {
  return console.log('server started http://localhost:' + Port);
});
//# sourceMappingURL=index.js.map