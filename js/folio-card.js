$('.gallery-for').slick({
  arrows: true,
  draggable: true,
  asNavFor: '.gallery-nav'
});

$('.gallery-nav').slick({
  slidesToShow: 3,
  arrows: false,
  focusOnSelect: true,
  draggable: true,
  asNavFor: '.gallery-for'
});