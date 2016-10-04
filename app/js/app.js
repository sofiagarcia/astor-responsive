
$(document).ready(function(){
  // Initialize collapse button
  $(".button-collapse").sideNav();

  $('.parallax').parallax();

  // Hoverable menu items
$('.nav-main > li > a').hover(function(){
  $(this).addClass('z-depth-3');
},
function(){
  $(this).removeClass('z-depth-3');
}
);
$('.nav-main > li').hover(function(){
  $(this).removeClass('text-gray');
  $(this).addClass('text-white');
},
function(){
  $(this).removeClass('text-white');
  $(this).addClass('text-gray');
});




});
