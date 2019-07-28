/*
 * Custom code goes here.
 * A template should always ship with an empty custom.js
 */
$( document ).ready(function() {
  // The slider being synced must be initialized first
  jQuery('#carousel').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    itemWidth: 135,
    itemMargin: 5,
    prevText: 'aa',
    nextText:'bb',
    asNavFor: '#slider'
  });
 
  jQuery('#slider').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    sync: "#carousel"
  });
});



//var navbar2 = document.getElementById("my-header");
var navbar2 = document.getElementById("my-header");
var navbar_header = document.getElementById("header");
//var navbar1 = document.getElementById("product-left-content");
// Get the navbar
var navbar = document.getElementById("sticky-product");
var navbar1 = document.getElementById("product-left-content");
var navbar3 = document.getElementById("rp-desc");
var navbar_mobile = document.getElementById("custom-head-mobile");
var shippinandreturn = document.getElementById("rp-desc");

// When the user scrolls the page, execute myFunction 
window.onscroll = function() {//myFunction();
	/*if(navbar_mobile)
		myFunction_mobile(); */
	/*if(navbar && navbar1 && navbar3)
		myFunction1();*/
};

// Get the offset position of the navbar
var sticky1 =0;
if(navbar2)
 sticky1 = navbar2.offsetTop;
//alert(sticky);
// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
	//alert(window.pageYOffset);
  if (window.pageYOffset > (sticky1 + 50)) {
	  //alert(sticky1 );
    navbar_header.classList.add("sticky-h");
	
  } else {
    jQuery('#header').removeClass("sticky-h");
  }
}

/*if(navbar_mobile)
	var sticky_mobile = navbar_mobile.offsetTop;
function myFunction_mobile() {
  if (window.pageYOffset > sticky_mobile) {
	  
    navbar_mobile.classList.add("sticky-hm")
  } else {
    jQuery('#custom-head-mobile').removeClass("sticky-hm");
  }
}*/




// Get the offset position of the navbar
if(navbar1)
	var sticky = navbar1.offsetTop;

if(navbar3)	
	var sticky2 = navbar3.offsetTop;

if(shippinandreturn)
	var sticky_shippinandreturn = shippinandreturn.offsetTop;
	
// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
/*function myFunction1() {
	//if(window.pageYOffset < $(window).height()){
	  if (window.pageYOffset >= sticky) {  
	    navbar.classList.add("sticky")
		if ($( document ).width() == 768) {$('.product-description').css('margin-top','0px');}
	  } else {
	    jQuery('#sticky-product').removeClass("sticky");
		if ($( document ).width() == 768) {$('.product-description').css('margin-top','-150px');}
	  }
	  //var ccc(sticky-product.sticky);
	  //console.log($(window).scrollTop());
	  if ($("#rp-desc").offset().top-$(window).scrollTop()<=jQuery('#sticky-product').height()+70) {
		  //console.log(window.pageYOffset);
		jQuery('#sticky-product').removeClass("sticky");
	  }
  //}
}*/

/*$( document ).ready(function() {
    if($('input[name="group[1]"]').is(':checked')) {
	    $('.select-taille').html($('input[name="group[1]"]:checked + span').html());
	}
	
});*/
$('input[name="group[1]"]').change(function(){
	$('.h-mobile').hide();
});
var i = 0;
$("#top-menu .responsive-menu .dropdown-item").click(function() {
	if(i%2 == 0){
		$("#top-menu li").hide();
		$("#top-menu li.responsive-menu").show();
		$("#top-menu li.responsive-menu li").show();
	}else{
		$("#top-menu li").show();
	}
	i++;
});
/*$('#top-menu .dropdown-item').click(function() {
	if($("#top-menu .dropdown-item").attr("aria-expanded")== "true"){
		$("#top-menu li").show();
	}
	
});*/

$(".to-top a").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("body").offset().top
    }, 1000);
});
var j = 1;
$(".scroll-box-arrows-1 .right").click(function() {
    var total = $('.product-images.js-qv-product-images li').length;
    if(j<total){
	    j++;
    }else{
	    j=1;
    }
    $('img.js-qv-product-cover').attr('src', $('.product-images.js-qv-product-images li:nth-child('+j+') img').attr('data-image-large-src')).effect( "slide", { direction: "right" } , "normal" );
});
$(".scroll-box-arrows-1 .left").click(function() {
    var total = $('.product-images.js-qv-product-images li').length;
    if(j>1){
	    j--;
    }else{
	    j=total;
    }
    $('img.js-qv-product-cover').attr('src', $('.product-images.js-qv-product-images li:nth-child('+j+') img').attr('data-image-large-src')).effect( "slide", { direction: "left" } ,  "normal" );
});

var k =  1;//$('.thumb.js-thumb.selected').parent().index();
$(".scroll-box-arrows-0 .right").click(function() {
    var total = $('.product-images.js-qv-product-images li').length;
    if(k<total){
	    k++;
    }else{
	    k=1;
    }
    $('#current-slide').html(k);
    $('img.js-modal-product-cover.product-cover-modal').attr('src', $('.product-images.js-qv-product-images li:nth-child('+k+') img').attr('data-image-large-src'));
});

$(".scroll-box-arrows-0 .left").click(function() {
    var total = $('.product-images.js-qv-product-images li').length;
    if(k>1){
	    k--;
    }else{
	    k=total;
    }
    $('img.js-modal-product-cover.product-cover-modal').attr('src', $('.product-images.js-qv-product-images li:nth-child('+k+') img').attr('data-image-large-src'));
});

$('#menu-icon').click(function(){
	$(this).hide();
});
$('.btn-close-menu').click(function(){
	$('#menu-icon').show();
});


  
  $( ".js-qv-product-cover" ).swipe( {
    //Generic swipe handler for all directions
    swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
      if(direction=='left'){
	      $( ".scroll-box-arrows-1 .right" ).trigger( "click" );
      } else{
	      $( ".scroll-box-arrows-1 .left" ).trigger( "click" ); 
      } 
    }
  });













