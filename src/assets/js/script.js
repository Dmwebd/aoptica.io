

$(document).ready(function($) {
  

// var offsetTop = $(window).height()*2;
//     $(window).scroll(function(event) {
//       if($(document).scrollTop() > offsetTop ){
//         $('.to_top').addClass('act');
//       }else{
//         $('.to_top').removeClass('act');
//       }
//     });

// $(".to_top").on("click", function (event) {
//       var top = 0;
//       $('body,html').animate({scrollTop: top}, 1000);
//     });

$('.close, .btn-video-end').on('click', function(event) {
	event.preventDefault();
	if($(this).hasClass('close-video')){
		$('.modal-video-body iframe').remove();
	}else if($(this).hasClass('close-nav')){
		$(".nav__wrap").removeClass('active');
	}
	$(".overlay").fadeOut();
	$("html").removeClass('stop');
});

$('.burger__wrap').on('click', function(event) {
  event.preventDefault();
  $('.nav__wrap').addClass('active');
});

 $('.overlay').not('#modal-page').mouseup(function(e){
    var container = $('.modal-wrap');
    if (container.has(e.target).length === 0 && !container.is(e.target)){
        $('html').removeClass('stop');
        $('.overlay').fadeOut();
    }
});


$('.btn-prices-js').on('click', function(event) {
	event.preventDefault();
	$('html').addClass('stop');
	$('#modal-price').fadeIn();
});

$('.btn-zam-cal-js').on('click', function(event) {
	event.preventDefault();
	$('html').addClass('stop');
	$('#modal-zamer-call').fadeIn();
});

$('.btn-zamer-js').on('click', function(event) {
	event.preventDefault();
	$('html').addClass('stop');
	$('#modal-zamer').fadeIn();
});

$('.btn-cb-js').on('click', function(event) {
  event.preventDefault();
  $('html').addClass('stop');
  $('#modal-cb').fadeIn();
});


$('.specials-btn').on('click', function(event) {
	event.preventDefault();
	// $('#dok-inp').val($(this).parents('.specials__text').find('.title-name').text().trim());
	$('html').addClass('stop');
	$('#modal-callback').fadeIn();
});


$('.price-btn').on('click', function(event) {
  event.preventDefault();
  var title = $(this).parents('.price-item').find('.title-prm').text().trim();
  $('.titles-cbp1').text(title);
  $('.titles-cbp').val(title);
  // $('#dok-inp').val($(this).parents('.specials__text').find('.title-name').text().trim());
  $('html').addClass('stop');
  $('#modal-cbp').fadeIn();
});


  d = new Date();
  monthA = 'января,февраля,марта, апреля, мая, июня, июля, августа, сентября, октября, ноября, декабря'.split(',');
  // d.setDate(d.getDate() + 2);
  $('.date-js').text( d.getDate() +' ' + monthA[d.getMonth()] + ' ' + d.getFullYear());


  

  $('.about-ct-sl-wrap').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button class="arrows slidePrev"><img src="assets/img/about/bl.png" alt=""></button>',
    nextArrow: '<button class="arrows slideNext"><img src="assets/img/about/br.png" alt=""></button>',
    adaptiveHeight: true,
    fade: true,
    // dots: true,
    // autoplay:true,
    // autoplaySpeed: 5000,
      responsive: [
      {
        breakpoint: 576,
        settings: {
          autoplay: false,
        }
      },

    ]
    // fade: true
  });




$('.btn-calcs').on('click', function(event) {
  event.preventDefault();
  var id2 = $('.test').offset().top;
  $('body,html').animate({scrollTop: id2}, 500);
});








$('.toshow').on('click', function(event) {
  event.preventDefault();
  $(this).toggleClass('show');
  if($(this).hasClass('show')){
    $(this).find('.test-btn-js').text('Скрыть');
    $('.objects__item').fadeIn();
  }else{
    $(this).find('.test-btn-js').text('Показать еще');
    
        $('.objects__item').each(function(index, el) {
          
            if(index < 4){
              $(this).fadeIn();
            }else{
              $(this).hide();
            }
          
          
        });

      var id = $(this).attr('href'), top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 600);
  }
});





$(".nav a, .footer-block__three a ").on("click", function (event) {
  

  if($(this).attr('href') === '#not'){
    return false;
  }else{
    if($(this).parents(".nav__wrap").hasClass('active')){
      $(".nav__wrap").removeClass("active");
      $('html').removeClass('stop');
    }else{}
    var id = $(this).attr('href'), top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1000);
  }

});


$('.feedback-tab-item').on('click', function(event) {
  event.preventDefault();
  if(!$(this).hasClass('active')){
    $('.feedback-tab-item').removeClass('active');
    $(this).addClass('active');
    $('.feedback-cont__item').hide().eq($(this).index()).fadeIn();
  }
});


  $('.availability-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button class="arrows slidePrev t2"><img src="assets/img/availability/ar-l.png" alt=""></button>',
    nextArrow: '<button class="arrows slideNext t2"><img src="assets/img/availability/ar-r.png" alt=""></button>',
    // adaptiveHeight: true,
    // fade: true,
    // dots: true,
    autoplay:true,
    autoplaySpeed: 5000,
    dots: true,
      responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          autoplay: false,
        }
      },

    ]
    // fade: true
  });


    $('.trust-slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: '<button class="arrows slidePrev t2"><img src="assets/img/availability/ar-l.png" alt=""></button>',
    nextArrow: '<button class="arrows slideNext t2"><img src="assets/img/availability/ar-r.png" alt=""></button>',
    // adaptiveHeight: true,
    // fade: true,
    // dots: true,
    // autoplay:true,
    // autoplaySpeed: 5000,
    dots: true,
      responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          autoplay: false,
        }
      },

    ]
    // fade: true
  });

    if($('body').find('.seob__btn').length > 0){
      $('.seob__btn').on('click', function(event) {
        event.preventDefault();

        if($(this).hasClass('open')){

          $(this).parents('.container-mm').find('.seob__text').addClass('act');
          $(this).removeClass('open');

          console.log('1');
        }else{
          console.log('2');
          $(this).addClass('open');

          var heigtText = $(this).parents('.container-mm').find('.seob__text-wrap').outerHeight();

           $(this).parents('.container-mm').find('.seob__text').removeClass('act').removeAttr('style').css({
           height: heigtText,
         });


        }

      });
    }



    $('.room-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<button class="arrows slidePrev t2"><img src="assets/img/availability/ar-l.png" alt=""></button>',
    nextArrow: '<button class="arrows slideNext t2"><img src="assets/img/availability/ar-r.png" alt=""></button>',
    // adaptiveHeight: true,
    // fade: true,
    // dots: true,
    // autoplay:true,
    // autoplaySpeed: 5000,
    dots: true,
      responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          autoplay: false,
        }
      },

    ]
    // fade: true
  });

//   if($(window).width() < 577){
//     $(".form-w__women").clone().removeClass('desc-v')
//     .appendTo(".woman-mobile");
//     $('.desc-v').remove();

//   }





$('.js-price').on('click', function(event) {
  event.preventDefault();
  var title = $(this).parents('.price-cont__block-items').find('.texts-tl').text().trim();

  $('.mod-prs-t').text(title);
  $('.hdrk').val(title);
  $('html').addClass('stop');
  $('#modal-cbp').fadeIn();
});



$(".btn-prices-js-a").on("click", function (event) {
    event.preventDefault();
    var id = $('#pforms').offset().top;
    $('body,html').animate({scrollTop: id}, 400);
  
});


$('.montaj__tab-item').on('click', function(event) {
  event.preventDefault();
  if(!$(this).hasClass('active')){
    $('.montaj__tab-item').removeClass('active');
    $(this).addClass('active');
    $('.montaj__item').hide().eq($(this).index()).fadeIn();
  }
});


$('.tis').on('click', function(event) {
  event.preventDefault();
  if(!$(this).hasClass('active')){
    $('.tis').removeClass('active');
    $(this).addClass('active');
    $('.price-cont__block').hide().eq($(this).index()).fadeIn();
  }
});

$(".title").not('.title-first').each(anime);
$(".t-min").not('.title-first').each(anime);
// $(".title-descr").not('.subtitle-first').each(anime);
function anime(anim){
  var offsetTop = $(this).offset().top - $(window).height();
  var thisTitle = $(this);
  $(window).scroll(function(event) {
    if($(document).scrollTop() > offsetTop ){
      thisTitle.addClass('fade_in');
    }
  });
}


$('.concerns-tab__item').on('click', function(event) {
  event.preventDefault();
  if(!$(this).hasClass('active')){
    $('.concerns-tab__item').removeClass('active');
    $(this).addClass('active');
    $('.concerns__tab-item').hide().eq($(this).index()).fadeIn();
  }
});


});