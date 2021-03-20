


// $('.slick-slider').slick({
//   centerMode: true,
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   dots: false,
//   arrows: true,
//   swipe: true,
//   infinite: true,
//   swipeToSlide: true,
//   adaptiveHeight: true,
//    prevArrow: '<div class="slick-prevs"><i class="fa fa-angle-left" aria-hidden="true"></i></div>',
//   nextArrow: '<div class="slick-nexts"><i class="fa fa-angle-right" aria-hidden="true"></i></div>',
// });

$('.slick-slider').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
   prevArrow: '<div class="slick-prevs"><i class="fa fa-angle-left" aria-hidden="true"></i></div>',
  nextArrow: '<div class="slick-nexts"><i class="fa fa-angle-right" aria-hidden="true"></i></div>',
  responsive: [

    {
      breakpoint: 1024,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 2
      }
    },

    {
      breakpoint: 992,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 2
      }
    },

    {
      breakpoint: 768,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    },
  ]
});

/*$('.slick-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
  changecolor("white", 0);
});
$('.slick-slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
  changecolor("red", 30);
});
function changecolor(color, padding) { 
  $('.slick-slider .slick-current').css("background-color", color);
  $('.slick-slider .slick-current').css("padding", padding);
  //$('.slick-slider').slick("setPosition");
//  $('.slick-slider').slick('resize');
}
changecolor("red", 30);*/


// -----------------------news slider------------------------

$('.news-slider').slick({
  dots: false,
  arrows: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
   prevArrow: '<div class="slick-prevs"><i class="fa fa-angle-left" aria-hidden="true"></i></div>',
  nextArrow: '<div class="slick-nexts"><i class="fa fa-angle-right" aria-hidden="true"></i></div>'
});


// ----------------------testimonial-slider--------------------------
$('.testimonial-slider').slick({
  dots: false,
  arrows: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
   prevArrow: '<div class="slick-prevs"><img src="images/testimonial-left.png" class="img-fluid" alt=""></div>',
  nextArrow: '<div class="slick-nexts"><img src="images/testimonial-right.png" class="img-fluid" alt=""></div>'
});


// ----------------------meat-our-team-slider--------------------------
$('.team-slider').slick({
  dots: false,
  arrows: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
   prevArrow: '<div class="slick-prevs"><i class="fa fa-angle-left" aria-hidden="true"></i></div>',
  nextArrow: '<div class="slick-nexts"><i class="fa fa-angle-right" aria-hidden="true"></i></div>',
 responsive: [

    {
      breakpoint: 1024,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 2
      }
    },

    {
      breakpoint: 992,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 2
      }
    },

    {
      breakpoint: 768,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    },
  ]
});



// ...................................................property-description-page-start....................................


jQuery('.main-img-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  arrows: false,
  fade:true,
  autoplay: true,
  autoplaySpeed: 4000,
  speed: 300,
  lazyLoad: 'ondemand',
  asNavFor: '.thumb-nav'
});
// Thumbnail/alternates slider for product page
$('.thumb-nav').slick({
  slidesToShow: 9,
  slidesToScroll: 1,
  infinite: true,
  centerPadding: '0px',
  asNavFor: '.main-img-slider',
  dots: false,
  centerMode: true,
  draggable: true,
  speed:200,
  focusOnSelect: true,
  prevArrow: '<div class="slick-prev"><img src="images/left.png" class="img-fluid" alt=""></div>',
  nextArrow: '<div class="slick-next"><img src="images/right.png" class="img-fluid" alt=""></div>'  
});


//keeps thumbnails active when changing main image, via mouse/touch drag/swipe
$('.main-img-slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
  //remove all active class
  $('.thumb-nav .slick-slide').removeClass('slick-current');
  //set active class for current slide
  $('.thumb-nav .slick-slide:not(.slick-cloned)').eq(currentSlide).addClass('slick-current');  
});

// ...................................................property-description-page-end....................................




