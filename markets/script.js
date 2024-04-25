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
  if (window.innerWidth < 768){

    function openSubMenu(element) {
      const submenu = element.nextElementSibling.querySelector('ul');
      const allSubmenus = document.querySelectorAll('ul');
      allSubmenus.forEach(submenu => {
          if (submenu !== element.nextElementSibling.querySelector('ul')) {
              submenu.style.display = 'none';
          }
      });
      if (submenu.style.display === 'none') {
          submenu.style.display = 'block';
      } else {
          submenu.style.display = 'none';
      }
  }
  }



