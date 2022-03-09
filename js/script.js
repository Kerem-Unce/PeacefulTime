$(window).scroll(function(){
    $('.navbar').toggleClass('scrolled', $(this).scrollTop()>50);
});

$(window).scroll(function(){
    if ($(this).scrollTop() > 50) { 
        $('.navbar').css('color', '#111111');
    }
    else { 
        $('.navbar').css('color', '#fff');
    }
});

$("#SignBtn").click(function(){
    $("#SignBtn").addClass("NavBtn_active");
    $("#WatchBtn").removeClass("NavBtn_active");

});
$("#WatchBtn").click(function(){
    $("#WatchBtn").addClass("NavBtn_active");
    $("#SignBtn").removeClass("NavBtn_active");
});
$(".navbar-toggler").click(function(){
    $('.navbar').css('background', '#fff');
    $('.navbar').css('color', '#111111');


});
var owl = $('.owl-carousel');
owl.owlCarousel({
    loop:true,
    nav:true,
    navText:['<i class="fas fa-arrow-left"></i>','<i class="fas fa-arrow-right"></i>'],
    margin:20,
    dots: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3.7
        }
    }
});
// owl.on('mousewheel', '.owl-stage', function (e) {
//     if (e.deltaY>0) {
//         owl.trigger('next.owl');
//     } else {
//         owl.trigger('prev.owl');
//     }
//     e.preventDefault();
// });

// GO TOP BUTTON
//Get the button
var mybutton = document.getElementById("GoTopbutton");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};


function scrollFunction() {
  if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
    mybutton.style.opacity = "1";
  } else {
    mybutton.style.opacity = "0";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
