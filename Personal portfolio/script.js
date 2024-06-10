var menu = document.querySelector("#nav i")
var close = document.querySelector("#menu i")
var tl = gsap.timeline()
var tl2 = gsap.timeline()
tl.to("#menu",{
    right:0,
    duration:0.3,
    delay:0.3
})
tl.from("#menu h4", {
    x:100,
    opacity:0,
    duration:0.3,
    stagger:0.2
})
tl.from("#menu i",{
    opacity:0,
    duration:0.3
})
tl.pause()
menu.addEventListener("click",function(){
    tl.play()
})
close.addEventListener("click",function(){
    tl.reverse()
})

gsap.from("#page2 #part3",{
    x:-200,
    opacity:0,
    duration:1.2,
    scrollTrigger:{
        trigger:"#page2 #part3",
        scroller:"body",
        start:"top 80%",
        end:"top 20%",
        scrub:3,
    }
})
gsap.from("#page2 #part4",{
    x:200,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#page2 #part4",
        Scroller:"body",
        start:"top 80%",
        end:"top 20%",
        scrub:2,
    }
})
tl2.from(".card",{
    x:-200,
    opacity:0,
    duration:1.3,
    stagger:0.5,
    scrollTrigger:{
        trigger:"#page3 .card",
        Scroller:"body",
        start:"top 80%",
        end:"top 20%",
        scrub:5,
    }
})
