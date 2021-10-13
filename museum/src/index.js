
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

//tickets

const ticketBasicMinus = document.querySelectorAll('.amount-minus-basic');
const ticketBasicPlus = document.querySelectorAll('.amount-plus-basic');
const ticketSeniorMinus = document.querySelectorAll('.amount-minus-senior');
const ticketSeniorPlus = document.querySelectorAll('.amount-plus-senior');
const ticketBasicAmount = document.querySelectorAll('.basic-amount');
const ticketSeniorAmount = document.querySelectorAll('.senior-amount');
const ticketBasicSum = document.querySelector('.basic__sum');
const ticketSeniorSum = document.querySelector('.senior__sum');
const ticketTotalSum = document.querySelectorAll('.total-sum');

let counterBasic = 1;
let counterSenior = 1;

ticketBasicAmount.forEach(item => item.textContent = counterBasic);
ticketSeniorAmount.forEach(item => item.textContent = counterSenior);
ticketBasicSum.textContent = `${counterBasic * 20}`;
ticketSeniorSum.textContent = `${counterSenior * 10}`;
ticketTotalSum.forEach(item => item.textContent = `${counterBasic * 20 + counterSenior * 10}`);

for (let i = 0; i < ticketBasicMinus.length; i++) {
	ticketBasicMinus[i].addEventListener("click", function () {
		if (counterBasic > 0) {
			counterBasic--
			ticketBasicAmount.forEach(item => item.textContent = counterBasic);
			ticketBasicSum.textContent = `${counterBasic * 20}`;
			ticketTotalSum.forEach(item => item.textContent = `${counterBasic * 20 + counterSenior * 10}`);
		}
	});

	ticketBasicPlus[i].addEventListener("click", function () {
		if (counterBasic < 20) {
			counterBasic++;
			ticketBasicAmount.forEach(item => item.textContent = counterBasic);
			ticketBasicSum.textContent = `${counterBasic * 20}`;
			ticketTotalSum.forEach(item => item.textContent = `${counterBasic * 20 + counterSenior * 10}`);
		}
	});

	ticketSeniorMinus[i].addEventListener("click", function () {
		if (counterSenior > 0) {
			counterSenior--
			ticketSeniorAmount.forEach(item => item.textContent = counterSenior);
			ticketSeniorSum.textContent = `${counterSenior * 10}`;
			ticketTotalSum.forEach(item => item.textContent = `${counterBasic * 20 + counterSenior * 10}`);
		}
	});

	ticketSeniorPlus[i].addEventListener("click", function () {
		if (counterSenior < 20) {
			counterSenior++;
			ticketSeniorAmount.forEach(item => item.textContent = counterSenior);
			ticketSeniorSum.textContent = `${counterSenior * 10}`;
			ticketTotalSum.forEach(item => item.textContent = `${counterBasic * 20 + counterSenior * 10}`);
		}
	});
}

//tickets buy form

function buy() {
  let buyForm = document.querySelector('.tickets-hidden');
  let over = document.querySelector('.overlay-hidden');
  const openForm = document.querySelector('.buy__button');
  const closeForm = document.querySelector('.close__button');

  openForm.addEventListener ('click', function() {
    buyForm.classList.remove("tickets-hidden");
    over.classList.remove("overlay-hidden");
      
  })

  closeForm.addEventListener ('click', function() {
    buyForm.classList.add("tickets-hidden");
    over.classList.add("overlay-hidden");
})

}

//explore slider

function initComparisons() {
  var x, i;
  
  x = document.getElementsByClassName("explore-comparison__overlay");
  for (i = 0; i < x.length; i++) {
    compareImages(x[i]);
  }
  function compareImages(img) {
    var slider, img, clicked = 0, w, h;
    w = img.offsetWidth;
    h = img.offsetHeight;
    img.style.width = (w / 2) + "px";
    slider = document.createElement("DIV");
    slider.setAttribute("class", "img-comp-slider");
    img.parentElement.insertBefore(slider, img);
    slider.style.top = (h / 2) - (slider.offsetHeight / 2) + "px";
    slider.style.left = (w / 2) - (slider.offsetWidth / 2) + "px";
    slider.addEventListener("mousedown", slideReady);
    window.addEventListener("mouseup", slideFinish);
    slider.addEventListener("touchstart", slideReady);
    window.addEventListener("touchstop", slideFinish);
    function slideReady(e) {
      e.preventDefault();
      clicked = 1;
      window.addEventListener("mousemove", slideMove);
      window.addEventListener("touchmove", slideMove);
    }
    function slideFinish() {
      clicked = 0;
    }
    function slideMove(e) {
      var pos;
      if (clicked == 0) return false;
      pos = getCursorPos(e)
      if (pos < 0) pos = 0;
      if (pos > w) pos = w;
      slide(pos);
    }
    function getCursorPos(e) {
      var a, x = 0;
      e = e || window.event;
      a = img.getBoundingClientRect();
      x = e.pageX - a.left;
      x = x - window.pageXOffset;
      return x;
    }
    function slide(x) {
      img.style.width = x + "px";
      slider.style.left = img.offsetWidth - (slider.offsetWidth / 2) + "px";
    }
  }
}

//map-box

mapboxgl.accessToken = 'pk.eyJ1IjoiZGVuaXNraGFsaXVsbGluIiwiYSI6ImNrdW0zZzNueTFzMjQycG15MjkzOTVmcHQifQ.WAma_bRwWN5FjRzMWuuAug';
const map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/light-v10',
center: [2.3364, 48.86091],
zoom: 15.5
});

const marker1 = new mapboxgl.Marker({ color: 'black'})
.setLngLat([2.3333, 48.8602])
.addTo(map);

const marker2 = new mapboxgl.Marker({ color: 'black'})
.setLngLat([2.3397, 48.8607])
.addTo(map);

const marker3 = new mapboxgl.Marker({ color: 'black'})
.setLngLat([2.3364, 48.86091])
.addTo(map);

const marker4 = new mapboxgl.Marker({ color: 'black'})
.setLngLat([2.3330, 48.8619])
.addTo(map);

const marker5 = new mapboxgl.Marker({ color: 'black'})
.setLngLat([2.3365, 48.8625])
.addTo(map);

map.addControl(new mapboxgl.NavigationControl());

//gallery

const animItems = document.querySelectorAll('._anim-items');
if (animItems.length > 0) {
  window.addEventListener('scroll', animOnScroll);
  function animOnScroll() {
    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 3;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;

      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if ((scrollY > animItemOffset - animItemPoint) && scrollY < (animItemOffset + animItemHeight)) {
        animItem.classList.add('_active');
      }else{
        if(!animItem.classList.contains('anim-no-hide'))
        animItem.classList.remove('_active');
      }
    }
  }
  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.scrollX || document.documentElement.scrollLeft,
      scrollTop = window.scrollY || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
  }
}

//video player

const player = document.querySelector('.video-player');
const video = player.querySelector('.video-section-player');
const playButtonBig = player.querySelector('.big-button-play');
const playButton = player.querySelector('.button-play');
const progressBar = player.querySelector('.video-progress');
const soundButton = player.querySelector('.sound-item');
const ranges = player.querySelector('.volume-progress');
const fullScreen =player.querySelector('.fullscreen-item');

function tooglePlay() {

  const method = video.paused ? 'play' : 'pause';
  video[method]();
}

function updateButton() {
  if(this.paused){
    playButton.style.background = `url(/deniskhaliullin-JSFE2021Q3/museum/src/assets/video/play-icon.svg)`
    playButtonBig.style.display = ''
  }else {
    playButton.style.background = `url(/deniskhaliullin-JSFE2021Q3/museum/src/assets/video/pause.svg)`
    playButtonBig.style.display = 'none'
  }
}

function handleRangeUpdate() {
  console.log(this.name)
  console.log(this.value);
}

video.addEventListener('click', tooglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);

playButtonBig.addEventListener('click', tooglePlay);
playButton.addEventListener('click', tooglePlay);


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

// video slider
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
          nextEl: '.swiper-control-right',
          prevEl: '.swiper-control-right'
        },
      },
  });
}


animOnScroll();
initComparisons();
buy();

initSlider();
videoBar();
volumeBar();
videoSlider();

