'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var scrapeRoute = (0, _express.Router)();

scrapeRoute.post('/search', function (req, res) {
  // console.log(req.query)
  var url = decodeURIComponent(req.query.search);
  // console.log(url)

  request(url, function (error, response, body) {
    var title = void 0,
        isbn = void 0,
        description = void 0,
        coverages = void 0,
        coverage = void 0;
    coverages = [];
    coverage = [];
    var data = [];

    if (!error) {
      var $ = cheerio.load(body);

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

exports.default = scrapeRoute;
//# sourceMappingURL=scrapper.js.map