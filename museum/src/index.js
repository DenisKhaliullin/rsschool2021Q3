

window.onload = function() {
    console.log('Hello');

    const welcomeSlider = new Swiper('.swiper', {
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

