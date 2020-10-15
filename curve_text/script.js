window.addEventListener("load", (event) => {
    let uptext = document.getElementById("uptext");
    let bottomtext = document.getElementById("bottomtext");
    new CircleType(uptext).radius(200);
    new CircleType(bottomtext).radius(200).dir(-1);

    let tl = gsap.timeline();
    tl.from("#logo", 1 ,{
        scale: "-10",
        // backgroundPosition: "500px 0px"
    })
    .from("#uptext", 0.5, {opacity: 0})
    .from("#bottomtext", 0.5, {opacity: 0}, "-=0.2")
    .from(".enter-btn", 0.5, {opacity: 0})
    .to(".enter-btn", 0.5, {textShadow: "5px 5px 10px #c0b64d"}, "-=0.2")
});
