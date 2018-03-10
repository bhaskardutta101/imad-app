var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    
    'article-one': {
        
    tit : `Article-One`,
    heading : `articleOne`,
    date : `8 March 2018`,
    content : `    
                <p>
                    Here will be the content for artivcle-one. Here will be the content for artivcle-one. Here will be the content for artivcle-one. Here will be the content for artivcle-one. Here will be the content for artivcle-one.
                 </p>
                
                 <p>
                    Here will be the content for artivcle-one. Here will be the content for artivcle-one. Here will be the content for artivcle-one. Here will be the content for artivcle-one. Here will be the content for artivcle-one.
                 </p>
                
                 <p>
                    Here will be the content for artivcle-one. Here will be the content for artivcle-one. Here will be the content for artivcle-one. Here will be the content for artivcle-one. Here will be the content for artivcle-one.
                 </p>`
                
        },
        
     'article-two': {
        tit : `Article-Two`,
        heading : `articleTwo`,
        date : `8 March 2018`,
        content :     
                `<p>
                    Here will be the content for artivcle-two.
                </p>`
        },
        
     'article-three': {
        tit : `Article-Three`,
        heading : `articleThree`,
        date : `8 March 2018`,
        content : 
                ` <p>
                    Here will be the content for artivcle-three.
                </p>`
                
     }
};

function createTemplate (data)
{
 var tit = data.tit;
 var heading = data.heading;
 var date = data.date;
 var content = data.content;
 
 
var htmlTemplate = `
    <html>

  <head>
      <title> ${tit} </title>
      <link href="/ui/style.css" rel="stylesheet" />
  </head>
  
  <body>
   <div class="container">
      <div>
          <a href="/"> Home </a>
        <hr />  
      </div>
     
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
</html>`  ;

return htmlTemplate;
}


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function(req, res){
    //articleName = article-one
    
    //articles[articleName] = {} content object for article one
    
    var articleName = req.params.articleName;
     res.send(createTemplate(articles[articleName]));
     
});



app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

var counter = 0;

app.get('/counter', function(req, res){
    counter = counter + 1;
    res.send(counter.toString());
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
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
