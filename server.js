var express = require('express');//connection and port handled--
var morgan = require('morgan');//log handled
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles= {
    'article-one': {
    title: 'Article-One | Retheesh Gopinatha Menon',
    heading: 'Article One',
    date: 'Sep 21.',
    content: ` 
        <p>
            This is the article one.This is the article one.This is the article one.This is the article one.This is the article one.This is the article one.This is the article one.This is the article one.This is the article one.This is the article one.This is the article one.This is the article one.This is the article one.This is the article one.This is the article one.This is the article one.
        </p>

        <p>
            This is the article one.This is the article one.This is the article one.This is the article one.This is the article one.This is the article one.This is the article one.This is the article one.This is the article one.This is the article one.This is the article one.This is the article one.This is the article one.This is the article one.This is the article one.This is the article one.
        </p>

        <p>
            This is the article one.This is the article one.This is the article one.This is the article one.This is the article one.This is the article one.This is the article one.This is the article one.This is the article one.This is the article one.This is the article one.This is the article one.This is the article one.This is the article one.This is the article one.This is the article one.
        </p>`
    },
    'article-two': {
        title: 'Article-Two | Retheesh Gopinatha Menon',
        heading: 'Article Two',
        date: 'Sep 22.',
         content: ` 
            <p>
                This is the article Two.
            </p>`
    },
    'article-three': {
         title: 'Article-Three | Retheesh Gopinatha Menon',
        heading: 'Article Three',
        date: 'Sep 22.',
         content: ` 
            <p>
                This is the article Three.
            </p>`
    }
};


function createTemplate(data){
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
    
    var htmlTemplate = `
        <html>
        <head>
            <title>
               ${title}
            </title>
            <meta name="viexport" content="width=device-width, initial=scale-1" />
            <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body>
            <div class="container">
                <div>
                    <a href='/'>Home</a>
                </div>
                <hr/>
                
                <h3>
                  ${heading}
                </h3>
                
                <div>
                  ${date}
                </div>
                
                <div>
                    ${content}
                </div>
            </div>
        </body>
    </html>
    `;
    
    return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function (req, res){
    res.send(createTemplate(articles[articleName]));
});

app.get('/article-two', function (req, res){
    res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article-three', function (req, res){
    res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
