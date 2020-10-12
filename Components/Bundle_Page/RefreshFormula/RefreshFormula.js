$(function(){
    $('.slider2').slick({
        infinite: false,
        speed: 300,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        cssEase: 'linear',

        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              dots: true,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              dots: true,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              dots: true,
              slidesToScroll: 1
            }
          }
    
        ]
    });
    });