jQuery('.home-slider').slick({ 
  autoplay: true,
  slidesToShow: 2,
  speed: 1500,
  pauseOnHover: false,
  responsive: [
    {
      breakpoint: 815,
      settings: {
        arrows: false,
        dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 1,
        dots: true
      }
    },
    {
      breakpoint: 575,
      settings: {
        arrows: false,
        slidesToShow: 1,
        speed: 700,
        dots: true
      }
    },
  ]
});

jQuery('.mobile-slider').slick({ 
  mobileFirst: true,
  arrows: true,
  pauseOnHover: false,
  responsive: [
    {
      breakpoint: 480,
      settings: 'unslick'
    },
  ]
});