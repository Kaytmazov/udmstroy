jQuery('.home-slider').slick({ 
  autoplay: true,
  slidesToShow: 2,
  speed: 1500,
  pauseOnHover: false,
  responsive: [
    {
      breakpoint: 815,
      settings: {
        arrows: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 1
      }
    },
    {
      breakpoint: 575,
      settings: {
        arrows: false,
        slidesToShow: 1,
        speed: 700
      }
    },
  ]
});