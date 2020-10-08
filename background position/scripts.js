// wait til DOM is ready
document.addEventListener("DOMContentLoaded", (event) => {
  gsap.to("#clouds", 25, {
    backgroundPosition: "-2247px bottom",
    repeat: -1,
    ease: Linear.easeNone,
  })
  gsap.to("#ground", 15, {
      backgroundPosition: "1301px 0px",
      repeat: -1,
      ease: Linear.easeNone,
    })

});