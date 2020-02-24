$(document).ready(function () {
    $('.owl-one').owlCarousel({
        loop: true,

        nav: true,
        
        autoplay: true,
        dots: true,

        autoplaySpeed: 2000,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items:1
            }
        }
    });

    $('.owl-two').owlCarousel({
        loop:true,
        nav:false,
        dots:false,
        autoplay:true,
         autoplaySpeed: 2000,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    });


    $(".single-icon").each(function (index, el) {

        new Waypoint({
            element: el,
            handler: function () {
                var element = $(this.element),
                    delay = element.attr('data-delay');
                setTimeout(function () {
                    element.addClass('animated fadeInUp');
                }, delay);
                this.destroy();
            },
            offset: '100%'
        });

    });
    
    $(".owl-next span").text(function(){return "Next"});
    $(".owl-prev span").text(function(){return "Previous"});
  
    
    
    $('.gallery').css('opacity', 0);
    $('.gallery').waypoint(function () {
        $('.gallery').css('opacity', 1);
        $('.gallery').addClass('animated fadeInUp');
    }, {
        offset: '100%'
    });

    $('.single-photo').css('opacity', 0);
    $('.single-photo').waypoint(function () {
        $('.single-photo').css('opacity', 1);
        $('.single-photo').addClass('animated fadeInUp');
    }, {
        offset: '100%'
    });

});
