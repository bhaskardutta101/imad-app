//for counter

var button = document.getElementById('counter');

button.onClick = function(){
    // create a request object
    
    var request = new XMLHttpRequest();
    
    // capture the response and store it ina varianle
    
    request.onreadystateChange = function(){
        if(request.readystate === XMLHttpRequest.DONE){
            // take some action
            if(request.status === 200){
            var counter = request.responseText;
            var span = document.getElementById('times');
            span.innerHTML = counter.toString();
        }
    }
    // not done yet
};

};