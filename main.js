const inputarea = document.querySelector(".inputarea")
var beep = new Audio("Assets/beep-02.mp3")
console.log(beep.duration)

document.addEventListener('keydown', function(e){
    if(!e.code){return}

});

setInterval(function(){
    inputarea.focus() 
}, 0)