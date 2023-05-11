var btn = document.querySelector("#btn")
var main = document.querySelector("#main")
btn.addEventListener("click",function(){
    window.scrollTo(0,100)
    console.log("hey")
})


var num = document.querySelector("#loader h1 span")

setTimeout(function(){
    document.querySelector("#loader").style.top = "-110%"
},3000)
var grow = 0
setInterval(function(){
        if(grow<=100){
        num.innerHTML = grow++
    }else{
        grow = 100
    }
    },20)
