
/*
$(document).ready(function() {
    var NavY = $('.nav').offset().top;

    var stickyNav = function(){
        var ScrollY = $(window).scrollTop();

        if (ScrollY > NavY) {
            $('.nav').addClass('sticky');
        } else {
            $('.nav').removeClass('sticky');
        }
    };

    stickyNav();

    $(window).scroll(function() {
        stickyNav();
    });
});*/
$(document).ready(()=>{
   let mark = $('.my-mark');
   let navlinks = $('.nav-links');
   let nowe = document.querySelectorAll('.nav-links li');
   mark.click(() =>
   {

       $(navlinks).toggleClass('nav-active');
       $(mark).toggleClass('mark-active');
       $(mark).toggleClass('toggle');
       nowe.forEach((obj, index) =>
       {
           if(obj.style.animation)
           {
               obj.style.animation ='';
           }
           else
           {
               obj.style.animation = `navlinkShow 0.5s ease forwards ${index/10 +0.4 }s`;
           }

       });
   });

});