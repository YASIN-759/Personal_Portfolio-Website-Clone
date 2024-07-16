var menubtn = document.getElementById("menubtn");
var menu = document.getElementById("navlink");

menubtn.onclick = ()=>{
    menu.style.transition = "0.5s";
if(menu.style.top != "0%")
{
    menu.style.opacity = "1";
    menu.style.top = "0%";
}
else {
    menu.style.opacity = "0";
    menu.style.top = "-70" + "vh"
}
}

gsap.from("#profile_pic",{
    // rotate:30,
    y:"150",
    opacity:0,
    duration:3,
    scrollTrigger:{
        scroller:"body",
        trigger:"#profile_pic",
        markers:false,
        // scrub:3,
        start:"top 100%",
        end:"top 100%"
    }
})




