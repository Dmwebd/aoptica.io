
var number = 0;
var maxNumber = $(".test-item").length;
var $element = $(".test-item").find("input, select, textarea");
// var btnPrev = $(".quiz__prev");
var btnNext = $('.quiz__next');
var isValid;
var dataBlock;
var activeSlede = [];

for(var i = 0; i< maxNumber; i++){
  activeSlede[i] = false;
}

$(".test-num-current").text(number + 1);
$(".test-num-all").text( maxNumber - 2);

$element.on('change, input', function (e) {
  var value = $(this).val().trim();

  isValid = value !== "";
  btnActive(!isValid);

  if($(this).hasClass('chnt')){
    $(this).parents('.test-item').find('.check-not').prop('checked', false);
  }

  if($(this).hasClass('chnt-d')){
    
    if($(this).prop('checked')){

      $('.qw6-adrs').fadeIn();
    }else{
       $('.qw6-adrs').fadeOut().val('');
    }
  }

  
});

function btnActive(isValid) {
  if(number === 0){
    // btnPrev.prop('disabled', 'false');
    btnNext.prop('disabled', isValid);
  }else{
    // btnPrev.prop('disabled', false);
    if(activeSlede[number] === true || isValid === false){
      btnNext.prop('disabled', false);
    }else{
      btnNext.prop('disabled', true);
    }
    
  }

}

// sidebar
var $barLevel = 100 / (maxNumber);
var $barWidth = $barLevel;
  function progress(num){
    $(".progress-bar__line").css({"width": $barWidth + '%'});
  }
  progress(0);


$("input[name='qw7']").on('change, input', function() {
 var img = $(this).parent().find('.qw7-img').data('img');
 var title = $(this).parent().find('.qw7t').text().trim();
 // var price = $(this).parent().find('.qw7p').text().trim();


$('.rigm').attr({'src': img});
$('.endrt').text(title);
// $('.endrp').text(price);

});

$("input[name='qw1']").on('change input', function() {
 var ind = $(this).parent().index() - 2;
 $('.test-item-blocks2').hide().eq(ind).fadeIn();

 // console.log(ind);
});

$('.check-not').on('change, input', function() {
 var inds = $(this).parents('.test-item').find('input');
  inds.each(function(index, el) {
    $(this).prop('checked', false);

    if($(this).hasClass('chnt-d')){

      $('.qw6-adrs').fadeOut().val('');
      
    }
  });

  $(this).prop('checked', true);
});


// btn

function btnClick() {



  btnNext.on('click', function(event) {
    event.preventDefault();
    activeSlede[number] = true;
    ++number;
    
    btnActive(!isValid);

    if(activeSlede[number] === true){
      btnNext.prop('disabled', false);
    }else{
      btnNext.prop('disabled', true);
    }

    $(".test-item").hide();
    $(".test-item").eq(number).fadeIn(1000);

   if(number === maxNumber - 1){
      $(".test__btns").hide();
      $(".test__right-wrap-two , .test__right").hide();

      $(".test__right-wrap-two,  .test__right").fadeIn(600);
      $(".progress-bar").addClass('end');
        animateTop ();

        $('.test__quests-progress-text').text('Готово');

    }else if(number === maxNumber - 2){
       $('.test__quests-progress-text').text('Вопрос про подарок');
    }

  if(number === maxNumber - 2){
      $(".test__right-wrap").hide();
      $(".test__right-wrap-two").fadeIn(500);
      // btnNext.hide();

    }

    $barWidth += $barLevel;
    progress(number);

    animateTop ();

    $(".test-num-current").text(number + 1);
    

    $(".test__right-text-item").hide();
    $(".test__right-text-item").eq(number).fadeIn(500);
    $(".tgr-it").hide();
    $(".tgr-it").eq(number).fadeIn(500);
  });


}
btnClick();

function animateTop (eq){
  if($('.test').hasClass('hide')){
    var elem = $('.test-load');
  }else{
    var elem = $('.test-scroll-js');
  }
  
  var top = elem.offset().top - 15;
  $('body,html').animate({scrollTop: top}, 400);
}


$.fn.hasAttr = function(name) {  
   return this.attr(name) !== undefined;
};





 var nForm = false;
  $(function(){
    'use strict';
    var action = './send.php';
    $('form').on('submit', function(e){
      e.preventDefault();
      var formThis = $(this);
      var fd = new FormData( this );
      
      formThis.find('.btn').attr({
        'disabled': 'true'
      });
    
      
      $.ajax({
        url: action,
        type: 'POST',
        contentType: false, 
        processData: false, 
        data: fd,
        success: function(msg){

        if(formThis.find('input[name="formname"]').val() === "price" ){
            var link = document.createElement('a');
            link.setAttribute('href', 'docs/price.pdf');
            link.setAttribute('target', "_blank");
            link.setAttribute('download','');

            if(navigator.userAgent.indexOf('Mac') > 0){
              window.location = 'docs/price.pdf';
            }else{
              simulate( link, "click");
            }

            $('html').addClass('stop');
            $(".overlay").fadeOut();
            $("#modal-thank").fadeIn();

          }else if(formThis.find('input[name="formname"]').val() === "test"){

            
            formThis.find('input').attr({
              'disabled': 'true',
            });
            formThis.find('button').attr({
              'disabled': 'true',
            });

            $(".overlay").fadeOut();
            $(".test__cont , .test__advas , .test-title").hide();
            $('html').addClass('stop');
            // $("#modal-thank").fadeIn();
            $('.tel-end').val(formThis.find('input[name="phone"]').val());

            $('.end-block').fadeIn();
          }else{
            $(".overlay").fadeOut();
            $('html').addClass('stop');
            $("#modal-thank").fadeIn();
          }

          formThis.find('.btn').removeAttr('disabled');
          $('form').trigger('reset');

        },

      });
    });
 });




  // ---------------------

  function simulate(element, eventName)
  {
    var options = extend(defaultOptions, arguments[2] || {});
    var oEvent, eventType = null;

    for (var name in eventMatchers)
    {
      if (eventMatchers[name].test(eventName)) { eventType = name; break; }
    }

    if (!eventType)
      throw new SyntaxError('Only HTMLEvents and MouseEvents interfaces are supported');

    if (document.createEvent)
    {
      oEvent = document.createEvent(eventType);
      if (eventType == 'HTMLEvents')
      {
        oEvent.initEvent(eventName, options.bubbles, options.cancelable);
      }
      else
      {
        oEvent.initMouseEvent(eventName, options.bubbles, options.cancelable, document.defaultView,
          options.button, options.pointerX, options.pointerY, options.pointerX, options.pointerY,
          options.ctrlKey, options.altKey, options.shiftKey, options.metaKey, options.button, element);
      }
      element.dispatchEvent(oEvent);
    }
    else
    {
      options.clientX = options.pointerX;
      options.clientY = options.pointerY;
      var evt = document.createEventObject();
      oEvent = extend(evt, options);
      element.fireEvent('on' + eventName, oEvent);
    }
    return element;
  }

  function extend(destination, source) {
    for (var property in source)
      destination[property] = source[property];
    return destination;
  }

  var eventMatchers = {
    'HTMLEvents': /^(?:load|unload|abort|error|select|change|submit|reset|focus|blur|resize|scroll)$/,
    'MouseEvents': /^(?:click|dblclick|mouse(?:down|up|over|move|out))$/
  }
  var defaultOptions = {
    pointerX: 0,
    pointerY: 0,
    button: 0,
    ctrlKey: false,
    altKey: false,
    shiftKey: false,
    metaKey: false,
    bubbles: true,
    cancelable: true
  }




     $(".js-range-slider").ionRangeSlider({
           min: 10,
           max: 600,
           from: 112,
           onStart: function (data) {
              $('#qw3inp').val($(".js-range-slider").prop("value"));
          },
       });
      var my_range = $(".js-range-slider");

      my_range.on("change input", function () {
          var $inp = $(this);
          var from2 = $inp.data("from");
       $('#qw3inp').val(from2);

    });

      var my_range_instance = my_range.data("ionRangeSlider");
      $('#qw3inp').on('change input', function() {
       var _val = $(this).val();
       my_range_instance.update({
              from: _val,

          });
      });




     $(".js-range-slider4").ionRangeSlider({
           min: 10,
           max: 600,
           from: 120,
           onStart: function (data) {
              $('#qw3inp4').val($(".js-range-slider4").prop("value"));
          },
       });
      var my_range4 = $(".js-range-slider4");

      my_range4.on("change input", function () {
          var $inp = $(this);
          var from2 = $inp.data("from");
       $('#qw3inp4').val(from2);

    });

      var my_range_instance4 = my_range4.data("ionRangeSlider");
      $('#qw3inp4').on('change input', function() {
       var _val = $(this).val();
       my_range_instance4.update({
              from: _val,

          });
      });


       $(".js-range-slider3").ionRangeSlider({
             min: 10,
             max: 600,
             from: 250,
             onStart: function (data) {
                $('#qw3inp3').val($(".js-range-slider3").prop("value"));
            },
         });
        var my_range3 = $(".js-range-slider3");

        my_range3.on("change input", function () {
            var $inp = $(this);
            var from2 = $inp.data("from");
         $('#qw3inp3').val(from2);

      });

        var my_range_instance3 = my_range3.data("ionRangeSlider");
        $('#qw3inp3').on('change input', function() {
         var _val = $(this).val();
         my_range_instance3.update({
                from: _val,

            });
        });