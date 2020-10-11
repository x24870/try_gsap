document.addEventListener("DOMContentLoaded", (event) => {

  let tl = gsap.timeline();

  tl.fromTo(".title span", 1,
    { bottom: -200, opacity: 0 },
    { ease: "back.out", bottom: 0, opacity: 1, stagger: 0.2 }
  );

});

