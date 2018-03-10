

//for counter

var button = document.getElementById('counter');

button.onclick = function(){
    // create a request object
    
    var request = new XMLHttpRequest();
    
    
    // capture the response and store it in a varianle
    request.onreadystatechange = function(){
         if (request.readyState === XMLHttpRequest.DONE){
            //take some action
            if (request.status === 200){
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
        
            }
        }
        //not done yet
    };
    // make the request
    request.open('GET', 'http://bitudutta101.imad.hasura-app.io/counter', true);
    request.send(null);
    
};

//submit name


var submit = document.getElementById('submitbutton');

submit.onclick = function() {
    
        // create a request object
    
    var request = new XMLHttpRequest();
    
    
    // capture the response and store it in a varianle
    request.onreadystatechange = function(){
        if (request.readyState === XMLHttpRequest.DONE){
            //take some action
            if (request.status === 200){
                 //capture a list of names and make it a list
                
                var names = request.responseText;
                name = JSON.parse(names);
                var list = '';
                for(i=0; i<names.length; i++){
                    list+= '<li>' + names[i] + '</li>';
        
        }
    var ul = document.getElementById('namelist');
    ul.innerHTML = list;
               
        
        
            }
        }
        //not done yet
    };
    // make the request
    var nameInput = document.getElementById('name');
    var name = nameInput.value;
    request.open('GET', 'http://bitudutta101.imad.hasura-app.io/submit-name?name=' + name, true);
    request.send(null);
    
    
    
    
    //make a request to the server
    
    
    
    //capture a list of names and make it a list
    
    var names = ['name1','name2','name2','name4'];
    var list = '';
    for(i=0; i<names.length; i++){
        list+= '<li>' + names[i] + '</li>';
        
    }
    var ul = document.getElementById('namelist');
    ul.innerHTML = list;
    
};
