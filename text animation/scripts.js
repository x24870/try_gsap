document.addEventListener("DOMContentLoaded", (event) => {

  // let tl = gsap.timeline();

  // tl.fromTo("span", 1,
  //   { bottom: -200, opacity: 0 },
  //   { ease: "back.out", bottom: 0, opacity: 1, stagger: 0.2 }
  // );

  gsap.fromTo(".test span", 2,
    { x: -100, opacity: 0 },
    { x: 0, opacity: 1, stagger: 0.2 }
  );
  // gsap.from(".title sapn", 1, { bottom: -200, opacity: 0, ease: "back.out" })
});

