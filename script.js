const currentYear = new Date().getFullYear();
document.getElementById('currentYear').textContent = currentYear;



gsap.registerPlugin(ScrollTrigger);
if (window.innerWidth > 768) {
    gsap.to(".l", {
      y: -400, 
      scrollTrigger: {
        trigger: ".left",
        start: "top center", 
        end: "bottom top", 
        scrub: 3, 
      }
    })
    

    gsap.to(".m", {
      y: -500, 
      scrollTrigger: {
        trigger: ".left",
        start: "top center", 
        end: "bottom top", 
        scrub: 5,
      }
    })
    

    gsap.to(".r", {
      y: -400, 
      scrollTrigger: {
        trigger: ".left",
        start: "top center", 
        end: "bottom top", 
        scrub: 3, 
      }
    })
    gsap.to(".text", {
      x: -400, 
      scrollTrigger: {
        trigger: ".element3",
        start: "top center", 
        end: "bottom top", 
        scrub: 3, 
      }
    })
    gsap.to(".moving-text", {
      x: -400, 
      scrollTrigger: {
        trigger: ".moving",
        start: "top center", 
        end: "bottom top", 
        scrub: 3, 
      }
    })
  }
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
  

    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      centeredSlides: false,
      slidesPerGroupSkip: 1,
      grabCursor: true,
      keyboard: {
        enabled: true,
      },
      breakpoints: {
        769: {
          slidesPerView: 2,
          slidesPerGroup: 2,
        },
      },
      scrollbar: {
        el: ".swiper-scrollbar",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

