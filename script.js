
var show = document.querySelector("#done")
var cl = document.querySelector("#ar1")
cl.addEventListener("mousemove",function(){
    gsap.to(show,{
        opacity: 100,
       
    })
})
cl.addEventListener("mouseleave",function(){
    gsap.to(show,{
        opacity: 0,
    })
})

var tl = gsap.timeline({scrollTrigger:{
    trigger:"#scroll",
    scroll:"#flip",
    start:"20% 40%",
    end:"50% 40%",
    scrub:true,
}})
tl.to("#sd1",{
    opacity:1,

    
})
tl.to("#sd2",{
    opacity:1,
    
    
})
tl.to("#sd3",{
    opacity:1,
   
    
})
tl.to("#sd4",{
    opacity:1,
   
   
    
})

tl.to("#sd5",{
    opacity:1,
   
   
    
})

tl.to("#sd6",{
    opacity:1,
   
   
    
})


// part2 animation

var tl = gsap.timeline({scrollTrigger:{
    trigger:"#pf",
    scroll:"#insta",                                                                                                                                             
    start:"20% 40%",
    end:"50% 40%",
    scrub:true,
}})

tl.to("#pf",{
    y: "82%",
    opacity:100,

})


// part 3 animation

var tl = gsap.timeline({scrollTrigger:{
    trigger:"#pg2",
    scroll:"#insta",                                                                                                                                             
    start:"30% 40%",
    end:"50% 40%",
    scrub:true,
}})

tl.to("#pg2",{
    
    y: "-40%",
    opacity:100,


})

// part 4 animation

var tl = gsap.timeline({scrollTrigger:{
    trigger:"#const",
    scroll:"#scroll",                                                                                                                                             
    start:"10% 120%",
    end:"60% 47%",
    scrub:true,
}})

tl.from("#const",{
    x:"120%",
    opacity:100,
  
})
