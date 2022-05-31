const inputarea = document.querySelector(".inputarea")
const container = document.querySelector(".textcontainer")
var fansound = new Audio("Assets/fan-sound.wav")

fansound.loop = true;
fansound.play()
document.addEventListener('keydown', function(e){
    if(e.code == "Enter"){
        container.innerHTML += "<p>ubuntu@user:~$ "+inputarea.innerHTML+"</p><br>";
        if(inputarea.innerHTML == "help"){
            help(container)
        }else
        if(inputarea.innerHTML == "clear"){
            clear(container)
        }else
        if(inputarea.innerHTML == "motd"){
            motd(container)
        }else{
            container.innerHTML += `<p>Command not found.</p><br>`
        }
        inputarea.innerHTML = ""
    }
});

setInterval(function(){
    if(inputarea.innerHTML.includes("<br>")){
        inputarea.innerHTML = inputarea.innerHTML.replace('<br>', "")
    }
    inputarea.focus() 
}, 0)