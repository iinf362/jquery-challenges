/* menu toggle */
$('#menu').click(function(){
  $('.nav-main').slideToggle();

});


/* panels: there are several different ways to do this. */
/* This particular code snippet is adapted from CSS-Tricks */
/* http://css-tricks.com/snippets/jquery/simple-jquery-accordion/ */

var allPanels = $('.panel-content').hide();

$('.panel-title').click(function() {

  var wasVisible = $(this).next().is(":visible");

  if (wasVisible != true){
    allPanels.slideUp();
    $(this).next().slideDown();
  }else {
    $(this).next().slideUp();
  }

});
