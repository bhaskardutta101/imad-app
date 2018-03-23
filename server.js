var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;

var config = {
    user: 'bitudutta101',
    database: 'bitudutta101',
    host: 'db.imad.hasura-app.io',
    port: '5432',
    password: process.env.DB_PASSWORD
    
};

var app = express();
app.use(morgan('combined'));

var articles = {
    
    'article-one': {
        
    title : `Article-One`,
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
        title : `Article-Two`,
        heading : `articleTwo`,
        date : `8 March 2018`,
        content :     
                `<p>
                    Here will be the content for artivcle-two.
                </p>`
        },
        
     'article-three': {
        title : `Article-Three`,
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
 var title = data.title;
 var heading = data.heading;
 var date = data.date;
 var content = data.content;
 
 
var htmlTemplate = `
    <html>

  <head>
      <title> ${title} </title>
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

var pool = new Pool(config);
app.get('/test-db', function (req, res) {
  //make a select request
  //retuen a response with the results
  pool.query('SELECT * FROM test', function (err, result){
      if(err){
          res.STATUS(500).send(err.toString());
      }
      else{
          res.send(JSON.stringfy(result));
      }
  });
});



var counter = 0;
app.get('/counter', function(req, res){
    counter = counter + 1;
    res.send(counter.toString());
});


var names = [];
app.get('/submit-name/', function(req, res) { //submit-name?name=dhjcbbdhjb
    //get the name from the request
    
    var name = req.query.name;
    
    names.push(name);
    
    //JSON: JAVASCRIPT OBJEST NOTATION
    
    res.send(JSON.stringify(names));
    
});



app.get('/articles/:articleName', function(req, res){
    //articleName = article-one
    
    //articles[articleName] = {} content object for article one
    
    
    pool.query("SELECT * FROM article where title = " + req.params.articleName, function(err, result)
    {
        if(err)
        {
            res.status(500).send(err.toString());
        }
        else
        {
            if(result.rows.length===0){
                res.status(404).send('Article not found');
            }
            else
            {
                var articleData = result.rows[0];
                res.send(createTemplate(articles[articleData]));
     
            }
        }
    });
     
});



app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});




app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
  
});



/*
JSON way od sending data
app.get('/submit-name/:name', function(req, res) {
    //get the name from the request
    
    var name = req.params.name;
    
    names.push(name);
    
    //JSON: JAVASCRIPT OBJEST NOTATION
    
    res.send(JSON.stringify(names));
    
});
*/





// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
