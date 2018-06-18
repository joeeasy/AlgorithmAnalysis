import express from 'express';
import path from 'path';
import Crawler from "crawler";
import request from "request";
import cheerio from "cheerio";
import bodyParser from 'body-parser';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../../webpack.config';
// import { scrapeRoute } from './route/index';
import session  from 'express-session';
import expressValidator from 'express-validator';
import flash from 'connect-flash';
import pug from 'pug';
import expressMessage from 'express-messages';
import mongoose from 'mongoose';
import Article from './models/articles';
import User from './models/users';
import cloudinary from 'cloudinary';
import upload from 'express-fileupload';
import passport from 'passport';
import moment from 'moment';
import { Strategy }  from 'passport-local';


const LocalStrategy = Strategy;
// cloudinary configuration
cloudinary.config({ 
  cloud_name: 'dsxfchez8', 
  api_key: '557836499496183', 
  api_secret: 'PKUHg16h73APhZPubaRw25mfbdE' 
});


const mongoDB = 'mongodb://root:test123@ds255260.mlab.com:55260/algorithmanalysis';
// database connection
const connection = mongoose.connect(mongoDB);
 
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('connected')
});

// starting app
const app = express();


const Port = process.env.PORT || 5000;
// console.log(process.env)



// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: false
}))

// file upload
app.use(upload());

// // parse application/json
app.use(bodyParser.json())

// load static files=============
app.use(express.static(path.resolve(__dirname, '../../client/public')));
 
// =============================
app.use(webpackMiddleware(webpack(webpackConfig)));
// =======================================

app.set('view engine', 'pug');
app.set("views", path.join(__dirname, "views"));

/// Express Session
app.use(session({
  secret: 'secret',
  saveUninitialized: true,
  resave: true
}));

// Passport init
app.use(passport.initialize());
app.use(passport.session());

// Express Validator
app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
      var namespace = param.split('.')
      , root    = namespace.shift()
      , formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg   : msg,
      value : value
    };
  }
}));

// Express message
app.use(flash());

// Global Vars
app.use(function (req, res, next) {
  res.locals.messages= expressMessage(req, res);
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  res.locals.user = req.user || null;
  next();
});

// 
app.get('/', (req, res) => {
  res.sendfile(path.resolve(__dirname, '../../client/public/index.html'));
});

app.get('/contact', (req, res) => {
  res.sendfile(path.resolve(__dirname, '../../client/public/index.html'));
});

/**
 * start scrapper
 */


app.post('/search', (req, res) => {
  // console.log(req.query)
  let url = decodeURIComponent(req.query.search);
  // console.log(url)

  request(url, function (error, response, body) {
    let title, isbn, description, coverages, coverage;
    coverages = [];
    coverage = [];
    let data = [];

    if (!error) {
      let $ = cheerio.load(body)

      let content = Array.from($('#results > form > ul > li'));
      content.forEach((journal, index) => {
        title = journal.children[0].children[0].data;
        isbn = journal.children[1].data;
        description = journal.children[1].next.next.data;
        // 
        $(journal).find("div > ul").each((i, cite) => {
          coverage = [];
          cite.children.forEach(name => {
            if (name.name === 'li') {
              // console.log(name.firstChild.attribs)
              coverage.push({
                link: (name.firstChild.attribs),
                text: name.firstChild.children[0].data
              });


            }
          });

        })
        //  coverage.push(coverages);
        data.push({
          title,
          isbn,
          description,
          coverage
        });

      })

      res.send(data);
    } else {
      console.log("We’ve encountered an error: " + error);
    }
  });
});

// GET ROUTES
app.get('/scienceweb', (req, res) => res.render('index'));

app.get('/login', (req, res) => res.render('login') );
app.get('/scienceweb/pricing', (req, res) => res.render('pricing'));
app.get('/scienceweb/institution-signup', (req, res) => {
  res.render('register');
});

app.get('/scienceweb/payment_summary/:id', (req, res) => {
  let id = req.params.id;
  let date = moment().format("MMMM Do YYYY");

  User.findOne({_id: id},(err, user) => {
    console.log(user)
    res.render('payment_summary', {user, date });
  });
});

app.get('/scienceweb/searchResult', (req, res) => res.render('search_result'));

app.get('/scienceweb/search/:articleID', (req, res) => {
  Article.find({_id: req.params.articleID},(err, articles) => {
    res.render('search_details', {articles});
  })
});
app.get('/scienceweb/addArticle', (req, res) => res.render('addarticle'));
app.get('/scienceweb/articles', (req, res) =>{
  Article.find((err, articles) => {
    // console.log(articles);
    res.render('articles', {articles});
  });
  
});

// POST ROUTES creating articles
app.post('/scienceweb/addArticle', (req, res) => {
  if (!req.files)
    return res.status(400).send('No files were uploaded.');
 
  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  let image = req.files.thumbnail;
    console.log(image)
    // let file = req.files.filename,
    //     filename = filename;
    //     file.mv('../upload/'+filename);
  // console.log(__dirname, req.body.thumbnail);
  cloudinary.uploader.upload(__dirname+'/'+req.body.thumbnail, function(result) { 
    console.log(result) 
  });

  let article = new Article({
    title: req.body.articleTitle,
    author:  req.body.authorname,
    branch:  req.body.branch,
    volume:  req.body.volume,
    issues:  req.body.issues,
    pages:  req.body.pages,
    publishedDate:  req.body.publishedDate,
    articleContent:  req.body.tcontent,
    abstract:  req.body.abstract,
    thumbnail: req.body.thumbnail,
    paper: req.body.paper,
    roi: req.body.roi
  });

  // save the newly created article
  article.save((err) => {
    if (err) return handleError(err);
    // saved!
    console.log('article was created');
  });
  res.redirect('/scienceweb/articles')
  
});


// post search result 
app.post('/scienceweb/searchResult', (req, res) => {
  // console.log(req.body.search)
  let keyword = req.body.search;
  let articles = [];
  Article.find( (err, arts) => {
    arts.filter(art => {
      // console.log(art.title)
     if( art.title.includes(keyword)) {
        articles.push(art);
      }
    })
    // console.log(articles);
    res.render('search_result', {articles, keyword});
  });
});

// EDIT ARTICLE
app.get('/scienceweb/article/edit', (req, res) => {
  let id = req.query.articleId;
  Article.find({_id: id}, (err, articles) => {
    res.render('editArticle', {articles})
  })
});

// UPDATE EDITTED ARTICLES
app.post('/scienceweb/article/update', (req, res) => {
  // console.log(req.params.id);

  let id = req.body.id;
  let articleModified = {
    title: req.body.articleTitle,
    author:  req.body.authorname,
    branch:  req.body.branch,
    volume:  req.body.volume,
    issues:  req.body.issues,
    pages:  req.body.pages,
    publishedDate:  req.body.publishedDate,
    articleContent:  req.body.tcontent,
    abstract:  req.body.abstract,
    thumbnail: req.body.thumbnail,
    paper: req.body.paper,
    roi: req.body.roi
  }
  Article.updateOne({ _id: id }, articleModified, function(err, res) {
    console.log(res);

  });
  res.redirect('/scienceweb/articles');
});

//DELETE ARTICLE
app.post('/scienceweb/article/delete', (req, res) => {
  let id = req.body.id;
  Article.deleteOne({ _id: id }, (err) => {
    if (err) return handleError(err);
    
    // deleted at most one tank document
    res.redirect('/scienceweb/articles');
    console.log('success');

  });
});

// SIGN UP POST
app.post('/institution-signup/', (req, res) => {
  let price = req.params.price;
  let email = req.body.email;
  let userId = '';

  // Validation
  req.checkBody('fname', 'First name is required').notEmpty();
  req.checkBody('lname', 'Last name is required').notEmpty();
  req.checkBody('iname', 'Institution name is required').notEmpty();
  req.checkBody('phone', 'Phone number is required').notEmpty();
  req.checkBody('email', 'Email is not valid').isEmail();
  req.checkBody('password', 'Password is required').notEmpty();
  req.checkBody('cpassword', 'Passwords do not match').equals(req.body.password);
  req.checkBody('userType', 'Usertype is required').notEmpty();
  req.checkBody('cardHolderName', 'Please provide name on card').notEmpty();
  req.checkBody('expiringDate', 'Please provide expiring date on card').notEmpty();
  req.checkBody('ccv', 'Please provide ccv on card').notEmpty();
  req.checkBody('baddress', 'Please provide billing address').notEmpty();
  req.checkBody('postalCode', 'Please provide postal code').notEmpty();
  req.checkBody('country', 'Please enter a country').notEmpty();

  let errors =  req.validationErrors();

  if(errors) {
    console.log(errors)
    res.render('register', {errors, price});
  }
  else {
    //checking for email and username are already taken

      User.findOne({ email: { 
        "$regex": "^" + email + "\\b", "$options": "i"
    }}, function (err, email) {
        if (email) {
          res.render('register', {
            email, price
          });
        }
        else {
          
          let user = new User(req.body);
          // save the newly created user
          userId = user._id;
          user.save((err) => {
            if (err) return handleError(err);
            // saved!
            console.log('New  user added');
            
          });
          res.redirect('/scienceweb/payment_summary/'+userId);
        }
      });
  }
});

// LOGIN
passport.use(new LocalStrategy(
  function(email, password, done) {
    User.findOne({ email: email }, function(err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username or password.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password or username.' });
      }
      return done(null, user);
    });
  }
));

app.listen(Port, (req, res) => console.log('server started http://localhost:' + Port));