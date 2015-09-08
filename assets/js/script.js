$(function() {
  $("li a").click(function() {
    $("html, body").animate({
      scrollTop: $($(this).attr("href")).offset().top - 48
    }, 500);
    return false;
  });
});