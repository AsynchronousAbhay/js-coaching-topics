// var menu = document.querySelector("#nav i")
// var nav = document.querySelector("#full-scr")

// var flag = 0;
// menu.addEventListener("click", function () {
//     if (flag === 0) {
//         nav.style.top = 0
//         flag = 1
//     }else{
//         nav.style.top = "-100%"
//         flag = 0
//     }
// })


var nav = document.querySelector("#full-scr")
var menu = document.querySelector("#menu")
var line1 = document.getElementById("line1")
var line2 = document.getElementById("line2")
var line3 = document.getElementById("line3")
var flag = 0
menu.addEventListener("click",function(){
    if(flag === 0){
        nav.style.top = 0
        line2.style.opacity = 0
        line1.style.transform = 'rotate(40deg)'
        line3.style.transform = 'rotate(-40deg)'
        flag = 1
    }else{
        nav.style.top = "-100%"
        line2.style.opacity = 1
        line1.style.transform = 'rotate(0deg)'
        line3.style.transform = 'rotate(0deg)'
        flag = 0
    }
})