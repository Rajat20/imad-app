console.log('Loaded!');
//change the text the main text
    var element = Document.getElementByID("main-text");
    element.innerHTML='new value';
    
//to move image
var img = document.getElementBYId('img');
img.onclick= function(){
    img.style.marginLeft='100px';
}
