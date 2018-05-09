import express from 'express';
import path from 'path';
import Crawler  from "crawler";
import request  from "request";
import cheerio  from "cheerio";
import bodyParser from 'body-parser';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../../webpack.config';

// starting app
const app = express();

// const Port = 5000 || process.env.PORT;
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
app.use(express.static(path.resolve(__dirname, '../../client/public')));
// =============================
app.use(webpackMiddleware(webpack(webpackConfig)));
// =======================================


// app.use(express.static(path.resolve(__dirname, '../../client/public')));

app.get('/', (req, res) => {
  console.log(path.resolve(__dirname, '../../client/public/index.html'))
  res.sendfile(path.resolve(__dirname, '../../client/public/index.html'));
});

/**
 * start scrapper
 */

app.get('/scrape', (req, res) => {
  var url = `http://mjl.clarivate.com/cgi-bin/jrnlst/jlresults.cgi?PC=A&Word=${req.query.word}`;
 
   request(url, function (error, response, body) {
     if (!error) {
       var $ = cheerio.load(body)
       let allBody;
 
       // var title = $('title').text();
       var content = $('body').html();
       allBody = $('p.alphalink');
       // var freeArticles = $('.central-featured-lang.lang1 a small').text()
 
       console.log('URL: ' + url);
       console.log('Title: ' );
       console.log('EN articles: ');
       console.log(allBody.children())
       res.send(content)
     }
     else {
       console.log("We’ve encountered an error: " + error);
     }
   });
 
 })


app.listen(process.env.PORT || 8080)