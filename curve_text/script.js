document.addEventListener("DOMContentLoaded", (event) => {
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
    .from("#bottomtext", 0.5, {opacity: 0}, "-=0.2");
});
