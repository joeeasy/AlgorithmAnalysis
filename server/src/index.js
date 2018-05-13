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

const Port =  process.env.PORT || 5000;
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

app.get('/*', (req, res) => {
  res.sendfile(path.resolve(__dirname, '../../client/public/index.html'));
});

/**
 * start scrapper
 */

app.post('/search', (req, res) => {
  // console.log(req.query)
  var url = decodeURIComponent(req.query.search);
  console.log(url)
 
   request(url, function (error, response, body) {
     let title, isbn, description, coverages, coverage;
     coverages = [];
     coverage = [];
     let data = [];
    
     if (!error) {
       var $ = cheerio.load(body)
       let allBody;
 
       // var title = $('title').text();
       var content = Array.from($('#results > form > ul > li'));
      //  coverages = Array.from($('#results > form > ul > li > div > ul > li > a'));
      //  allBody = $('#results > form > ul').html();
       // var freeArticles = $('.central-featured-lang.lang1 a small').text()
 
       console.log('Loading: ' + url);
       content.forEach((journal, index) => {
         title = journal.children[0].children[0].data;
         isbn = journal.children[1].data;
         description = journal.children[1].next.next.data;
        //  console.log(element.children)
        // console.log($(journal.children.find()))
        //  journal.children.filter((element) => {
        //    /* Array.from(element.next.children).forEach((element) => {
        //     //  console.log(element)
        //    }) */

        // ;
        //    allBody = element.children;
        //    allBody = Array.from($(allBody).find("li > a")).filter((cite) => {
          
        //     return (cite !== ([] || undefined)) ? coverage.push( {link: cite.attribs, text: cite.children[0].data} ) :  "Nothing to show";
        //     // console.log("Coverages :",  coverage)
  
        //    });
        //   console.log(allBody)
        //  })
         $(journal).find("div > ul").each((i, cite) => {
           coverage = [];
           cite.children.forEach(name => {
            if (name.name === 'li') {
              coverage.push({link: name.firstChild.attribs, text: name.firstChild.children[0].data});
              
              
            }
           });
           
          
          // (cite !== undefined) && coverage.push( {link: cite.attribs, text: cite.children[0].data} );

         })
        //  coverage.push(coverages);
          data.push({ title, isbn, description, coverage});

       })

       res.send(data);
     }
     else {
       console.log("We’ve encountered an error: " + error);
     }
   });
 })

app.listen(Port, (req, res) => console.log('server started http://localhost:'+Port))