import { Router } from 'express';


let scrapeRoute = Router();
 

scrapeRoute.post('/search', (req, res) => {
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


export default scrapeRoute;