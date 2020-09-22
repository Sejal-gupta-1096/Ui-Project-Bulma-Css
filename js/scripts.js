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
});