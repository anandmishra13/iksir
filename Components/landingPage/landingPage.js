$(function(){
  $('.slider').slick({
      // dots: true,
infinite: false,
speed: 200,
slidesToShow: 4,
arrows: true,
// fade: true,
// cssEase: 'linear',
slidesToScroll: 1,
responsive: [
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3,
      infinite: true,
    }
  },
  {
    breakpoint: 800,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      cssEase: 'linear',
    }
  }

]
  });
});

$(function(){
$('.slider2').slick({
    infinite: false,
    speed: 300,
    dots: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          dots: true,
          slidesToScroll: 2,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          dots: true,
          slidesToScroll: 1,
          fade: true,
          cssEase: 'linear',
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          dots: true,
          slidesToScroll: 1,
          fade: true,
        cssEase: 'linear',
        }
      }

    ]
});
});