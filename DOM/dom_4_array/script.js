var arr = [
    {name:"Devil Prakash",bio:"Cake murder 31 march, Black Love, KTM Lover, Haq se single, Papa ka para", stat:"Stranger"},
    {name:"Angel Priya", bio:"First kiss on 30 Feb, Papa ki pari", stat:"Stranger"},
    {name:"Angel riya", bio:"First kiss on 30 Feb, Papa ki pari", stat:"Stranger"},
]
var clutter = "";
arr.forEach(function(elem){
    clutter += `<div class="card">
    <h1>${elem.name}</h1>
    <p>${elem.bio}</p>
    <h5>${elem.stat}</h5>
    <button>Add Friend</button>
  </div>`
})

document.querySelector("#main").innerHTML = clutter;