var navbartoggle = $(".navbar-toggler");
var backgroundmenu = $("#backgroundmenu");
var body_var = $("body");
var menuclose = $(".menuclose");
var navbar_toggler = $(".navbar-toggler");

navbartoggle.on('click', function() {
    backgroundmenu.fadeIn('slow');
    document.getElementById("mynavbar").style.width = "100%";
    navbartoggle.addClass("navbar-tog");
    menuclose.fadeIn('slow');
    body_var.css("overflow", "hidden")
	$(this).fadeOut('slow');
});
backgroundmenu.on('click', function() {
    $(this).fadeOut('slow');
    navbartoggle.removeClass("navbar-tog");
    document.getElementById("mynavbar").style.width = "0";
    menuclose.fadeOut('slow');
    body_var.css("overflow", "scroll")
	navbar_toggler.fadeIn('slow');
});
menuclose.on('click', function() {
    navbartoggle.removeClass("navbar-tog");
    backgroundmenu.fadeOut('slow');
    document.getElementById("mynavbar").style.width = "0";
    $(this).fadeOut('slow');
    body_var.css("overflow", "scroll")
    navbar_toggler.fadeIn('slow');

});




var navbartoggle1 = $(".navbar-toggler1");
var backgroundmenu1 = $("#backgroundmenu1");
var body_var1 = $("body1");
var menuclose1 = $(".menuclose1");

var navbar_toggler1 = $(".navbar-toggler1");
navbartoggle1.on('click', function() {
    backgroundmenu1.fadeIn('slow');
    document.getElementById("mynavbar1").style.width = "100%";
    navbartoggle1.addClass("navbar-tog");
    menuclose1.fadeIn('slow');
    body_var.css("overflow", "hidden")
	$(this).fadeOut('slow');
});
backgroundmenu1.on('click', function() {
    $(this).fadeOut('slow');
    navbartoggle1.removeClass("navbar-tog");
    document.getElementById("mynavbar1").style.width = "0";
    menuclose1.fadeOut('slow');
    body_var.css("overflow", "scroll")
	navbar_toggler1.fadeIn('slow');
});
menuclose1.on('click', function() {
    navbartoggle1.removeClass("navbar-tog");
    backgroundmenu1.fadeOut('slow');
    document.getElementById("mynavbar1").style.width = "0";
    $(this).fadeOut('slow');
    body_var.css("overflow", "scroll")
    navbar_toggler1.fadeIn('slow');

});


$("#owl-demo").owlCarousel({
     items :7, //10 items above 1000px browser width
     itemsDesktop : [1024,6], //5 items between 1000px and 901px
	 itemsDesktopSmall : [768,4], // 3 items betweem 900px and 601px
	 itemsTablet: [767,3], //2 items between 600 and 0;
	 itemsMobile : [600,3], // itemsMobile disabled - inherit from itemsTablet option   
	  itemsMobile : [400,2],   
	 navigation: true	  
});
$(".new-icon").click(function(){
  $(".section-search").toggle();
});
$(".sign-up-slide").click(function(){
  $(".sign_up_copie").css("display", "none")
});

$( ".dropdown-toggle1" ).click(function() {
  $( ".dropdown-menu" ).toggleClass( "highlight" );
});
$(".accept-clos").click(function(){
  $(".section-fixed").css("display", "none")
});