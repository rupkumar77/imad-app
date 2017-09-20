var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles= {
    'article-one':{
    title:'Article One | Firse Web',
    heading:'Article One',
    date: 'Sep 20, 2017',
    content: `
            <p> 
               Files on the sidebar represent the source code of your web app. These files are all actually saved in a git repository on your github account. This console allows you to edit these files, deploy your app, and save these files back to your github repository.
            </p>
            <p> 
               Files on the sidebar represent the source code of your web app. These files are all actually saved in a git repository on your github account. This console allows you to edit these files, deploy your app, and save these files back to your github repository.
            </p>
            <p> 
               Files on the sidebar represent the source code of your web app. These files are all actually saved in a git repository on your github account. This console allows you to edit these files, deploy your app, and save these files back to your github repository.
            </p>`
},
    'article-two':  {
    title:'Article Two | First Web',
    heading:'Article Tne',
    date: 'Sep 21, 2017',
    content: `
            <p> 
               This is the content for my second article.
            </p>`
    },
    'article-three':{
    title:'Article Three | Firse Web',
    heading:'Article Three',
    date: 'Sep 22, 2017',
    content: `
            <p> 
               This is the content for my Third article.
            </p>`}
};

function createTemplate (data){
    var title= data.title;
    var heading = data.heading;
    var date = data.date;
    var content= data.content;
var htmlTemplate= `
<!DOCTYPE html>
    <head>
        <title>
            Article-One
        </title>
        <meta name="viewport" content="width-device-width, initial-scale=1"/>
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class="container">
        <div>
            <a href="/">Home</a>
        </div>
        <hr>
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

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/:articleName', function (req, res){
    //articleName == article-one
    // articles[articleName]== {} content object for article one 
  var articleName= req.params.articleName;
  res.send(createTemplate(articles[articleName]));
}); 


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});


app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
