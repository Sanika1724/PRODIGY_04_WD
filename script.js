// Typed Animation

var typed = new Typed("#typing", {
  strings: [
    "Web Developer",
    "Frontend Developer",
    "UI Designer",
    "Programmer"
  ],

  typeSpeed: 100,
  backSpeed: 60,
  loop: true

});

// AOS Animation

AOS.init({
  duration: 1000,
  offset: 100
});