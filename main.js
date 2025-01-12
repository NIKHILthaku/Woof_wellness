
var main = document.querySelector(".main");
var cursor = document.querySelector(".cursor");

main.addEventListener("mousemove", function (dets) {
    gsap.to(cursor, {
        x: dets.x,
        y: dets.y,
        duration: 1
    })
})
gsap.from(".main",{
    y:950,
    duration:3,
    delay:1
})

var tl = gsap.timeline();
tl.from(".name", {
    opacity: 0,
    y: 20,
    duration: 2,
    stagger:1.8
})
tl.from(".heading span",{
    opacity:0,
    y:100,
    duration:1,
    
})
tl.from(".about",{
    opacity:0,
    y:100,
    duration:2,
    
})


