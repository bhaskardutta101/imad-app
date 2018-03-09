console.log('Loaded!');
//change main content

var element = document.getElementById('maintext');

element.innerHTML = 'new content by innerHTML';

//move image by click


element.onClick = function(){
  
  img.style.marginLeft = '100px';
    
};
