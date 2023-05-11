var konHai = document.querySelector("h5")
var btn = document.querySelector("button")

var flag = 0;
btn.addEventListener("click", function () {
    if (flag === 0) {
        konHai.innerHTML = "Sending Request..."
        konHai.style.color = "yellow"
        btn.innerHTML = "Unfriend"
        setTimeout(function () {
            konHai.innerHTML = "Friends"
            konHai.style.color = "green"
            btn.innerHTML = "Unfriend"
            flag = 1
        }, 2000)
    } else {
        konHai.innerHTML = "Stranger"
        konHai.style.color = "red"
        btn.innerHTML = "Add Friend"

        flag = 0
    }
})
var grow = document.querySelector("#growth")
btn.addEventListener("click",function(){

    setTimeout(function(){
        grow.style.width = "100%"
    },2000)
})

