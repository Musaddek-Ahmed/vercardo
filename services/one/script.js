const currentYear = new Date().getFullYear();
document.getElementById('currentYear').textContent = currentYear;

function goBack() {
  window.history.back();
}
gsap.registerPlugin(ScrollTrigger);


  gsap.to(".text", {
      x: -100, 
      scrollTrigger: {
        trigger: ".element3",
        start: "top center", 
        end: "bottom top", 
        scrub: 3, 
      }
  })
  gsap.to(".text", {
    x: 100, 
    scrollTrigger: {
      trigger: ".elem3",
      start: "top center", 
      end: "bottom top", 
      scrub: 3, 
    }
})
gsap.to(".text", {
  x: -100, 
  scrollTrigger: {
    trigger: ".elem4",
    start: "top center", 
    end: "bottom top", 
    scrub: 3, 
  }
})



