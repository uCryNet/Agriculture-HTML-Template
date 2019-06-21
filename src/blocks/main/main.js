import $ from 'jquery';
import 'slick-carousel';

import AOS from 'aos';
AOS.init();

// Incoming numbers Section Number
(function () {
    const spans = document.querySelectorAll('.__number');
    const spanArr = Array.from(spans);

    function rollUp(object,number,max,delay)
    {
      number = parseInt(number, 10) + 1;
      if(number > max){return}
      else
      {
        object.innerHTML = number;
          setTimeout(() => {rollUp(object,number,max,delay)}, delay);
      }
    }
    spanArr.forEach( (span) => {
      rollUp(span, span.dataset.init, span.dataset.max,50)
    });
})();
// Testimonials slider
$(".testimonials-slider").slick({
  dots: true,
  // autoplay: true,
  autoplaySpeed: 4000,
  arrows: false,
  adaptiveHeight: true,
  speed: 900
});
// Sponsor slider
$(".sponsor-slider").slick({
  dots: true,
  arrows: false,
  adaptiveHeight: true,
  slidesToShow: 5,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        arrows: false,
        centerPadding: '40px',
        slidesToShow: 4
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});
// Go to top button
(function(){
  let upButton = document.getElementById('up-button');
  window.onscroll = () => {
    if (window.pageYOffset >= 800) {
      upButton.style.opacity = '0.7';
      upButton.style.visibility = 'visible';

      upButton.onmouseenter = () => {
        upButton.style.opacity = '1';
      }

      upButton.onmouseleave = () => {
        upButton.style.opacity = '0.7';
      }

      upButton.onclick = () => {
        (function toTop() {
          if(window.pageYOffset > 0) {
            window.scrollBy(0, -80);
            setTimeout(toTop, 10);
          }
        })();
      }
    } else {
      upButton.style.opacity = '0';
      upButton.style.visibility = 'hidden';
    }
  }
})();
