$(document).ready(function(){
  $(window).scroll(function(){
    if(this.scrollY > 20) 
      $(".navbar").addClass("sticky");
    else
      $(".navbar").removeClass("sticky");
  });

  $('.menu-toggler').click(function(){
    $(this).toggleClass("active");
    $(".navbar-menu").toggleClass("active");
  });

  bulmaCarousel.attach('#slider-platform', {
    slidesToScroll: 1,
    slidesToShow: 1,
    infinite: true,
  });

  bulmaCarousel.attach('#slider-features', {
    slidesToScroll: 1,
    slidesToShow: 2.5,
    infinite: true,
  });

  bulmaCarousel.attach('#slider', {
    slidesToScroll: 1,
    slidesToShow: 2,
    infinite: true,
  });

  $(".navbar-burger").click(function() {

    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
    $(".navbar-item").toggleClass("navbar-item-is-active");
});

});
