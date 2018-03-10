
var element = document.getElementById('maintext');

element.innerHTML = 'New value by innerHTML';

var image = document.getElementById('madi');

var margginLeft = 0;
function moveRight(){
    marginLeft = marginLeft + 10;
    image.style.marginLeft = marginLeft + 'px';
}

image.onclick = function(){
    var interval = setInterval(moveRight, 100);

};






/*
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

};*/