let menu = document.getElementById('menu-icon');
let navList = document.querySelector('.nav__list');

menu.onclick = () =>{
    
    navList.classList.toggle('open')
}

document.querySelectorAll('.nav__link').forEach(item => item.addEventListener('click', function(){
    navList.classList.remove('open')
}));

const swiper__one = new Swiper('.swiper.episode__slide', {
  // Default parameters
  slidesPerView: 1,
  spaceBetween: 10,
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  mousewheel: true,
  autoplay: {
      delay: 5000,
  },
   // Responsive breakpoints
   breakpoints: {
    280: {
      slidesPerView: 2,
      spaceBetween: 20,
    },

    480: {
      slidesPerView: 3,
      spaceBetween: 30,
    },

    600:{
      slidesPerView: 4,
      spaceBetween: 40
    }
  }

});

const swiper_two= new Swiper('.swiper.testimonial', {
  // Optional parameters
    direction: 'horizontal',
    loop: true,
    mousewheel: true,
    autoplay: {
        delay: 5000,
    },
     // Responsive breakpoints
     breakpoints: {
      // 800: {
      //   slidesPerView: 1,
      // },

      800: {
        slidesPerView: 2,
        spaceBetween: 30
      },

    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },

});

