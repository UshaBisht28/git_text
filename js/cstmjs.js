//fixed header start
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();    
    if (scroll <= 500) {
        $(".clearheader").removeClass("clearHeader").addClass("darkHeader");
    }
})
//end

//carousel start
$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  });
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:3,
            nav:true,
            loop:false
        }
    }
})
//end