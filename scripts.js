// example1
gsap.to("h2.title", { duration: 1, opacity: 0.3 });
// gsap.to(".box", {duration: 2, x: 300});
gsap.to(".orange, .grey", { duration: 2, x: 300 });
gsap.to(".green", { duration: 3, rotation: 360, scale: 0.5 });

// example2
CSSPlugin.defaultTransformPerspective = 400;

gsap.to(".green2", { duration: 3, rotationX: 360 });
gsap.to(".orange2", { duration: 3, rotationY: 360 });
gsap.to(".grey2", { duration: 3, x: 200, y: 100, scale: 2, skewX: 45, rotation: 180 });

// example3
// gsap.from("#logo", {duration: 3, x: 300, opacity: 0, scale: 0.1});
gsap.fromTo("#logo", {width: 0, height: 0}, {duration: 1.5, x: 600, width: 500, height: 200});