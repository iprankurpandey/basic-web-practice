const body = document.querySelector('#body')
const text = document.querySelector('#text')
const red =document.querySelector('#red')
const green =document.querySelector('#green')
const orange= document.querySelector('#orange')

function Red(red){
body.style.backgroundColor = "red";
text.innerHTML = 'color changed to red '
return red;
}

function Green(){
body.style.backgroundColor = "green";
text.innerHTML = 'color changed to green '

} 
function Orange(){
body.style.backgroundColor = "orange";
text.innerHTML = 'color changed to orange '

}

red.addEventListener("click",Red);
green.addEventListener("click",Green);
orange.addEventListener("click",Orange);
