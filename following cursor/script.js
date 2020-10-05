document.addEventListener('mousemove', (event) => {
  gsap.to('.box', {
    x: event.pageX,
    y: event.pageY,
  })
});