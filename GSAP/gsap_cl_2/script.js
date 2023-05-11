// var tl = gsap.timeline()

// tl.from("#nav",{
//     y:-100,
//     opacity:0,
//     duration:0.5,
//     ease:Power0.easeOut
// })
// .from("#center h1",{
//     opacity:0,
//     duration:0.5
// })
// .from("#center p",{
//     opacity:0,
//     duration:0.5,
// },"0.5")
// .from("#center button",{
//     scale:0.5,
//     duration:0.5,
//     opacity:0
// })
// .from("#img1",{
//     opacity:0,
//     x:-200,
//     duration:0.5
// })
// .from("#img2",{
//     opacity:0,
//     x:200,
// })
// .from("i",{
//     scale:0,
//     opacity:0
// })
// .to("i",{
//     y:40,
//     repeat:-1,
//     yoyo:true

// })

gsap.from("#page1 h1",{
    scale:0.2,
    opacity:0
})
gsap.from("#page2 h1",{
    scrollTrigger:{
        trigger:"#page2 h1",
        scroller:"body",
        markers:true,
        start:"top 60%",
    },
    scale:0.2,
    opacity:0
})