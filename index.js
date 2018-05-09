var Crawler = require("crawler");
var request = require('request');
var cheerio = require('cheerio');
var express = require('express');

const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const handlebars = require('handlebars');


//Set our application to use our configured handlebars module as the view engine 
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');


app.get('/scrape', (req, res) => {
 var url = "http://mjl.clarivate.com/cgi-bin/jrnlst/jlresults.cgi?PC=MASTER&Word=Agriculture";

  request(url, function (error, response, body) {
    if (!error) {
      var $ = cheerio.load(body)

      // var title = $('title').text();
      var content = $('body').text();
      // var freeArticles = $('.central-featured-lang.lang1 a small').text()

      console.log('URL: ' + url);
      console.log('Title: ' );
      console.log('EN articles: ');
      res.send(content)
    }
    else {
      console.log("We’ve encountered an error: " + error);
    }
  });

})

app.listen(3000, (req, res) => {
  console.log('server started  at port 3000')
})