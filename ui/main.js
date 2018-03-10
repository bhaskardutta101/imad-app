

//for counter

var button = document.getElementById('counter');
var counter = 0;

button.onclick = function(){
    // create a request object
    
    
    // capture the response and store it in a varianle
    
    //render the variable in the correct span      
            counter= counter + 1;
            var span = document.getElementById('times');
            span.innerHTML = counter.toString();
        

};
/*
 request.onreadystateChange = function(){
        if(request.readystate === XMLHttpRequest.DONE){
            // take some action
            if(request.status === 200){
            var counter = request.responseText;*/