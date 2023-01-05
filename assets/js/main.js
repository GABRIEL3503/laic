/**
* Template Name: Nova - v1.3.0
* Template URL: https://bootstrapmade.com/nova-bootstrap-business-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
document.addEventListener('DOMContentLoaded', () => {
  "use strict";



  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  
  const mobileNavShow = document.querySelector('.mobile-nav-show');
  const mobileNavHide = document.querySelector('.mobile-nav-hide');
  
  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavHide.classList.toggle('d-none');
    mobileNavShow.classList.toggle('d-none');
  }
  
  document.querySelectorAll('.mobile-nav-toggle').forEach(el => {
    el.addEventListener('click', function(event) {
      event.preventDefault();
      mobileNavToogle();
    });
  });
  
  // const navLinks = document.querySelectorAll('.navbar a');
  // navLinks.forEach(link => {
  //   link.addEventListener('click', function() {
  //     // Oculta la navbar
  //     document.querySelector('.navbar').style.display = 'none';
  //     // Muestra mobileNavShow
  //     mobileNavShow.classList.add('d-none');
  //   });
  // });
  
  // // Muestra la navbar cuando se hace clic en el botón de menú
  // document.querySelector('.menu-btn').addEventListener('click', function() {
  //   document.querySelector('.navbar').style.display = 'block';
  //   // Muestra mobileNavShow
  //   mobileNavShow.classList.add('d-none');
  // });
  


  // const mobileNavShow = document.querySelector('.mobile-nav-show');
  // const mobileNavHide = document.querySelector('.mobile-nav-hide');
  
  // function mobileNavToogle() {
  //   document.querySelector('body').classList.toggle('mobile-nav-active');
  //   mobileNavHide.classList.toggle('d-none');
  //   mobileNavShow.classList.toggle('d-none');
  // }
  
  // document.querySelectorAll('.mobile-nav-toggle').forEach(el => {
  //   el.addEventListener('click', function(event) {
  //     event.preventDefault();
  //     mobileNavToogle();
  //   });
  // });
  
  // const navLinks = document.querySelectorAll('.navbar a');
  // navLinks.forEach(link => {
  //   link.addEventListener('click', function() {
  //     // Oculta la navbar
  //     document.querySelector('.navbar').style.display = 'none';
  //   });
  // });
  
  // // Muestra la navbar cuando se hace clic en el botón de menú
  // document.querySelector('.menu-btn').addEventListener('click', function() {
  //   document.querySelector('.navbar').style.display = 'block';
  // });
  

  // codigo funcional
//   const navLinks = document.querySelectorAll('.navbar a');
// navLinks.forEach(link => {
//   link.addEventListener('click', function() {
//     // Oculta la navbar
//     document.querySelector('.navbar').style.display = 'none';
//   });
// });
// // Muestra la navbar cuando se hace clic en el botón de menú
// document.querySelector('.menu-btn').addEventListener('click', function() {
//   document.querySelector('.navbar').style.display = 'block';
// });



  // // menu nav mobile chatgpt3
  // const smallScreen = window.matchMedia('(max-width: 768px)');

  // if (smallScreen.matches) {
  //   // Código para dispositivos con pantalla pequeña
  //   const navLinks = document.querySelectorAll('.navbar a');
  //   navLinks.forEach(link => {
  //     link.addEventListener('click', function () {
  //       // Oculta la navbar si está visible
  //       if (document.querySelector('.navbar').style.display !== 'none') {
  //         document.querySelector('.navbar').style.display = 'none';
  //       }
  //     });
  //   });

  //   // Muestra la navbar cuando se hace clic en el botón de menú
  //   document.querySelector('.menu-btn').addEventListener('click', function () {
  //     document.querySelector('.navbar').style.display = 'block';
  //   });
  // }

  // fin menu nav

  /**
   * Sticky header on scroll
   */
  const selectHeader = document.querySelector('#header');
  if (selectHeader) {
    document.addEventListener('scroll', () => {
      window.scrollY > 100 ? selectHeader.classList.add('sticked') : selectHeader.classList.remove('sticked');
    });
  }



  /**
   * Mobile nav toggle
   */
  // const mobileNavShow = document.querySelector('.mobile-nav-show');
  // const mobileNavHide = document.querySelector('.mobile-nav-hide');

  // document.querySelectorAll('.mobile-nav-toggle').forEach(el => {
  //   el.addEventListener('click', function (event) {
  //     event.preventDefault();
  //     mobileNavToogle();
  //   })
  // });

  // function mobileNavToogle() {
  //   document.querySelector('body').classList.toggle('mobile-nav-active');
  //   mobileNavHide.classList.toggle('d-none');
  //   mobileNavShow.classList.toggle('d-none');
  
  // }

  

  /**
   * Scroll top button
   */
  const scrollTop = document.querySelector('.scroll-top');
  if (scrollTop) {
    const togglescrollTop = function () {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
    window.addEventListener('load', togglescrollTop);
    document.addEventListener('scroll', togglescrollTop);
    scrollTop.addEventListener('click', window.scrollTo({
      top: 0,
      behavior: 'smooth'
    }));
  }

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Init swiper slider with 1 slide at once in desktop view
   */
  new Swiper('.slides-1', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

  /**
   * Init swiper slider with 3 slides at once in desktop view
   */
  new Swiper('.slides-3', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 40
      },

      1200: {
        slidesPerView: 3,
      }
    }
  });

  /**
   * Porfolio isotope and filter
   */
  let portfolionIsotope = document.querySelector('.portfolio-isotope');

  if (portfolionIsotope) {

    let portfolioFilter = portfolionIsotope.getAttribute('data-portfolio-filter') ? portfolionIsotope.getAttribute('data-portfolio-filter') : '*';
    let portfolioLayout = portfolionIsotope.getAttribute('data-portfolio-layout') ? portfolionIsotope.getAttribute('data-portfolio-layout') : 'masonry';
    let portfolioSort = portfolionIsotope.getAttribute('data-portfolio-sort') ? portfolionIsotope.getAttribute('data-portfolio-sort') : 'original-order';

    window.addEventListener('load', () => {
      let portfolioIsotope = new Isotope(document.querySelector('.portfolio-container'), {
        itemSelector: '.portfolio-item',
        layoutMode: portfolioLayout,
        filter: portfolioFilter,
        sortBy: portfolioSort
      });

      let menuFilters = document.querySelectorAll('.portfolio-isotope .portfolio-flters li');
      menuFilters.forEach(function (el) {
        el.addEventListener('click', function () {
          document.querySelector('.portfolio-isotope .portfolio-flters .filter-active').classList.remove('filter-active');
          this.classList.add('filter-active');
          portfolioIsotope.arrange({
            filter: this.getAttribute('data-filter')
          });
          if (typeof aos_init === 'function') {
            aos_init();
          }
        }, false);
      });

    });

  }

  /**
   * Animation on scroll function and init
   */
  function aos_init() {
    AOS.init({
      duration: 800,
      easing: 'slide',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', () => {
    aos_init();
  });

});
