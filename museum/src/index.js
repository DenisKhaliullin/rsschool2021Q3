
 function initSlider() {

    const welcomeSlider = new Swiper('.welcome-section__slider', {
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        loop: true,

        navigation: {
            nextEl: '.swiper-button-right',
            prevEl: '.swiper-button-left'
          },
        
    });
   
    const currentSlide = document.querySelector('.current-item');
    const totalSlide = document.querySelector('.total-item');
    const slide = document.querySelectorAll('.swiper-slide');
    function sliderCount() {
        const indexSlide = welcomeSlider.realIndex;
        const totalSlide = slide.length;
        currentSlide.textContent = `0${indexSlide + 1}`;
        totalSlide.textContent = `0${totalSlide}`;
      }
      welcomeSlider.on('activeIndexChange', sliderCount)
}

//video progress

function videoBar() {
    const progress = document.querySelector('.video-progress');
  
progress.addEventListener('input', function() {
  const value = this.value;
  this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #c4c4c4 ${value}%, #c4c4c4 100%)`
})
}

//volume progress

function volumeBar() {
    const progress = document.querySelector('.volume-progress');
  
progress.addEventListener('input', function() {
  const value = this.value;
  this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #c4c4c4 ${value}%, #c4c4c4 100%)`
})
}

function videoSlider() {
  console.log('Hello');
   const videoSwiper = new Swiper('.video-section__swiper', {
        slidesPerView: 3,
        spaceBetween: 30,
        simulateTouch: false,
        pagination: {
          el: ".video-swiper-pagination",
          clickable: true,

          navigation: {
            nextEl: '.swiper-control-left',
            prevEl: '.swiper-control-right'
          },
        },
    });
}

initSlider();
videoBar();
volumeBar();
videoSlider();

