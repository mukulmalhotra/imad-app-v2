var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articleone ={
    title : 'article one',
    heading: 'article one',
    date: 'sep5,2016',
    content:` <p>
            hi this is my first web page  and i want know about fuck 
        </p>
        <p>
            hi my name is mukul wat you think abot me if you thik my the fucking beast then fuckk out of my way
        </p>`
};
var htmltemplate =`<html>
    <head>
        <title>
            $[title]
        </title>
        <meta name="viewport" content="width=device-width,initial-scale=1"/>
          <link href="/ui/style.css" rel="stylesheet" />
       
    </head>
    <body>
        <div class="container">
        <div>
            <a href="/">home</a>
        </div>
        <hr/>
        <h3>
            $[heading]
        </h3>
        <div>
            $[date]
        </div>
      
        </p>
    </div>
`

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one', function (req,res) {
res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
});
app.get('/article-two', function (req,res) {
    res.send('article two request will be serverd here');
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
