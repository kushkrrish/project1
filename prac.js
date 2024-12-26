var tl=gsap.timeline();
tl.from("#nav h3",{
    y:-50,
    opacity:0,
    duration:0.4,
    delay:0.2,
    stagger:0.2
})
tl.from("#main h1",{
    x:-500,
    opacity:0,
    duration:0.5,
    delay:0.2,
    stagger:0.4

})
tl.from("img",{
    x:100,
    rotate:45,
    opacity:0,
    duration:0.5,
    stagger:0.4
    
})
tl.to("#page2 h1",{
    transform: "translateX(-125%)",
    scrollTrigger :{
        trigger:"#page2",
        scroller:"body",
        start:"top 0",
        end: "top -100%",
        scrub: 3,   /*to make smooth*/
        pin:true,
        markers:true 
    }
})