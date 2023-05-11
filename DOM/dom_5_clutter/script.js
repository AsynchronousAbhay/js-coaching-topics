var arr = [
  { name: "Devil Prakash", bio: "Cake murder 31 march, Black Love, KTM Lover, Haq se single, Papa ka para", stat: "Stranger" },
  { name: "Angel Priya", bio: "First kiss on 30 Feb, Papa ki pari", stat: "Stranger" },
  { name: "Angel riya", bio: "First kiss on 30 Feb, Papa ki pari", stat: "Stranger" },
  { name: "Angel riya", bio: "First kiss on 30 Feb, Papa ki pari", stat: "Stranger" },
]
function show() {

  var Kachra = "";
  arr.forEach(function (elem, idx) {
    Kachra += ` <div class="card">
  <h1>${elem.name}</h1>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam debitis est autem aliquam sunt doloribus.</p>
  <h5>${elem.stat}</h5>
  <button id="${idx}">Add Friend</button>
</div>`
})

document.querySelector("#main").innerHTML = Kachra

}
show()

var flag = 0;
document.querySelector("#main").addEventListener("click", function (dets) {
  if (flag === 0) {
    arr[dets.target.id].stat = "Friends"
    flag = 1
    show()
  }
  else{
    arr[dets.target.id].stat = "Stranger"
    flag = 0
    show()
  }
})



