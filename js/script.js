$(window).scroll(function(){
  $scrollamout = $(window).scrollTop();
  
  if($scrollamout > 500){
    $(".main-menu").addClass("sticky")
  }else{
    $(".main-menu").removeClass("sticky")
  }

  if($scrollamout > 1000){
    $(".bo-top").fadeIn()
  }else{
    $(".bo-top").fadeOut()
  }
})

$(".bo-top").click(function(){
  $("html,body").animate({
    scrollTop: 0
  },1000)
})





//banner slider start



$('#banner-part .banner-slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                 autoplay: false,
                infinite: true,
                dots: true
            }
    },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: false,
                dots: true,
            }
    },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                 autoplay: true,
                dots: true,
            }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


//banner slider end


//veno box start


$('.venobox').venobox();

//veno box end

//team part slick-slider



$('#team-part .row').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
    arrows:false,
    autoplay:true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
     
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
          autoplay:true,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
          autoplay:true,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});








//team part slick-slider end




//testimonial slick slider start


$('#testimonial-part .testi-slider').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
    arrows:false,
    autoplay:true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
          dots:true,
          autoplay:true,
     
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
          autoplay:true,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
          autoplay:true,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});






//testimonial slick slider end



//membership-part slick slider start



$('#membership-part .slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
    arrows:false,
    autoplay:true,
    centerMode:true,
    centerPadding:true,
    
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
          dots:false,
          autoplay:true,
     
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
          autoplay:true,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
          autoplay:true,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});



//membership-part slick slider end



//counter-part start 

$('.counter').counterUp({
                delay: 10,
                time: 2000
            });



//counter-part end

//colorful tab start


$('#colorful').colorfulTab();



$('#colorful').colorfulTab({
  // 'elliptic', 'flatline'
  theme: '',
});



$('#colorful').colorfulTab({
  overlayColor: "#000",
  overlayOpacity: ".6",

});




//colorful tab end


//brand-part start

$('#brand-part .slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
    arrows:true,
    autoplay:true,
    prevArrow:'<i class="fa fa-chevron-left prev" aria-hidden="true"></i>',
    nextArrow:'<i class="fa fa-chevron-right next" aria-hidden="true"></i>',
    
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
          dots:false,
          autoplay:true,
     
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
          autoplay:true,
          arrows:false,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
          autoplay:true,
          arrows:false,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

//brand-part end




