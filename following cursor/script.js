document.addEventListener('mousemove', (event) => {
  gsap.to('.box', {
    x: event.pageX,
    y: event.pageY,
    stagger: 0.1,
  });
  console.log(event.pageX, event.pageY);
});

