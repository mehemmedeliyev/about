var open = document.querySelector('#start')
var menu = document.querySelector('.Menu')
var page = document.querySelector('.parallax')
var sosialpage = document.querySelector('.sosialpage')
var body = document.body



// cursor
var cursor = document.querySelector('#cursor');

var cursorListener = function cursorListener(event){
    cursor.style.top = event.y+"px";
    cursor.style.left = event.x+"px";
};

window.addEventListener('mousemove',cursorListener)


open.addEventListener("click",function(){
    menu.classList.toggle('active');
    page.classList.toggle('active');
    sosialpage.classList.toggle('active');
    document.body.classList.toggle('active');   



})





