$(function() {
  // smooth scroll
  $('.nav a').click(function() {
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top - 48
    }, 500);
    return false;
  });

  // hide collapsed navbar on navbar item click
  $('.nav a').click(function() {
  	$('.navbar-collapse').collapse('hide')
  });
});