var  mn = $(".main-nav");
    mns = "main-nav-scrolled";
var test = $( window ).height();
$(window).scroll(function() {
  if( $(this).scrollTop() > test ) {
    mn.addClass(mns);
  } else {
    mn.removeClass(mns);
  }
});
$(function() {
  var pull    = $('#pull');
    menu    = $('#nav > .col-sm-2');
    menuHeight  = menu.height();
 
  $(pull).on('click', function(e) {
    e.preventDefault();
    menu.slideToggle();
  });
});
$(window).resize(function(){
  var w = $(window).width();
  if(w > 320 && menu.is(':hidden')) {
    menu.removeAttr('style');
  }
});
$('#pull').on('click', function() {
    $('#nav').toggleClass('clicked');
    $('#navArrow').toggleClass('clicked');
});