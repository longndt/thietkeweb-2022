function tienganh() {
   document.getElementById("text").innerHTML = "University of Transport & Communications"
}

function tiengviet() {
   document.getElementById("text").innerHTML = "Đại học giao thông vận tải"
}

function maudo() {
   document.getElementsByTagName("h1")[0].style = "color: red"
}

function mauxanh() {
   document.getElementsByClassName("blue")[0].style.color = "blue"
}

function gachchaninhoa() {
   document.getElementById("text").style = "text-decoration: underline; text-transform: uppercase"
}

function sayHello() {
   var input = document.getElementsByName("yourname")[0].value
   document.getElementsByTagName("h3")[0].innerHTML = "Hello " + input + " !"
}

