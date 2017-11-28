

$(document).ready(function(){
    //fixed header
    $("header").removeClass("header_fixed");
    $(window).scroll(function(){
        if ($(this).scrollTop() > 20) {
            $("header").addClass("header_fixed");
        } else {
            $("header").removeClass("header_fixed");
        };
    });


    //burger
    $(".burger").click(function(){
        $(this).next().slideToggle();
    });

    $('.burger').click(function(){
        $(this).toggleClass('open');
    });

    //scroll navigation
    $(".nav").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 2000);
        if ($('.burger').hasClass('open')) {
          $(".burger").removeClass("open");
          $(".nav").css("display","none");
          $(document).mouseup(function (e) {
              var fsd = $('.nav');
              if (!fsd.is(e.target)&& fsd.has(e.target).length === 0){
                $(".burger").removeClass("open");
                $(".nav").css("display","none");
              }
          });
        }
    });

//search


      if ($(".search").css("display","none")){
        $("span .fa-search").click(function( event){
          $(".search").css("display","inline-block");
          event.preventDefault();
          if ($(".search").css("display","inline-block")) {
            $("span .fa-search").click(function( event){
              $(".search").css("display","none");
              event.preventDefault();
            });
          }
        });
      }

      $( ".search" ).submit(function( event ) {
          $('.thank-you-message').css('display', 'inline-block');
          $(".search").css("display","none");
          event.preventDefault();
          $("span .fa-search").click(function(){
            $(".thank-you-message").css("display","none");
            $(".search").css("display","inline-block");
          });
      });

    //scroll
    $(".scroll").click(function(event){
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $("html, body").animate({
            scrollTop: top}, 1000);
    });

    $(".web_carousel").owlCarousel({
        items: 1,
        loop: true,
        autoPlay: 5000,
        nav: true,
        navText: ['<i class="fa fa-angle-left" ></i>','<i class="fa fa-angle-right"></i>']
    });
    $(".project_carousel").owlCarousel({
      items: 1,
      dots: true,
      autoPlay: 5000,
      loop: true
    });
    $(".do_carousel").owlCarousel({
      items: 1,
      dots: true,
      autoPlay: 5000,
      loop: true
    });
    $(".do_carousel_2").owlCarousel({
      items: 1,
      dots: true,
      autoPlay: 5000,
      loop: true
    });
    $(".feedback_carousel").owlCarousel({
      items: 1,
      loop: true,
      autoPlay: 5000,
      nav: true,
      navText: ['<i class="fa fa-angle-left" ></i>','<i class="fa fa-angle-right"></i>']
    });

    $(window).scroll(function(){
  		if ($(this).scrollTop() > $(this).height()){
  			$('.top').addClass('active');
  		} else {
  			$('.top').removeClass('active');
  		}
	  });
  	$('.top').click(function(){
  		$('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
  	});

    //modal window
    $('.js-overlay-campaign').fadeIn();
    $('.js-overlay-campaign').addClass('disabled');
    $('.js-close-campaign').click(function() {
        $('.js-overlay-campaign').fadeOut();
    });
    $(document).mouseup(function (e) {
        var popup = $('.js-popup-campaign');
        if (e.target!=popup[0]&&popup.has(e.target).length === 0){
            $('.js-overlay-campaign').fadeOut();
        }
    });
    $(window).on('load', function () {
        setTimeout(function(){
            if($('.js-overlay-campaign').hasClass('disabled')) {
                return false;
            } else {
                $(".js-overlay-campaign").fadeIn();
            }
        }, 10000);
    });

//login+Up
    $('.popup_form').click(function(event){
      event.preventDefault();
      $("#form").slideToggle();
      $(document).mouseup(function (e) {
          var forml = $('#form');
          if (e.target!=forml[0]&&forml.has(e.target).length === 0){
              $('#form').fadeOut();
          }
      });
    });
    $( "#form" ).submit(function( event ) {
        $('.thank-you-message-form').css('display', 'block');
        $('#form').css('display', 'none');
        event.preventDefault();
    });
    $('#form').find('input, textarea').on('keyup blur focus', function (e) {

      var $this = $(this),
          label = $this.prev('label');

    	  if (e.type === 'keyup') {
    			if ($this.val() === '') {
              label.removeClass('active highlight');
            } else {
              label.addClass('active highlight');
            }
        } else if (e.type === 'blur') {
        	if( $this.val() === '' ) {
        		label.removeClass('active highlight');
    			} else {
    		    label.removeClass('highlight');
    			}
        } else if (e.type === 'focus') {

          if( $this.val() === '' ) {
        		label.removeClass('highlight');
    			}
          else if( $this.val() !== '' ) {
    		    label.addClass('highlight');
    			}
        }

    });

    $('.tab a').on('click', function (e) {

      e.preventDefault();

      $(this).parent().addClass('active');
      $(this).parent().siblings().removeClass('active');

      target = $(this).attr('href');

      $('.tab-content > div').not(target).hide();

      $(target).fadeIn(600);

    });






        //modal window
            $('.js-overlay-campaign').fadeIn();
            $('.js-overlay-campaign').addClass('disabled');
            $('.js-close-campaign').click(function() {
                $('.js-overlay-campaign').fadeOut();

            });
            $(document).mouseup(function (e) {
                var popup = $('.js-popup-campaign');
                if (e.target!=popup[0]&&popup.has(e.target).length === 0){
                    $('.js-overlay-campaign').fadeOut();
                }
            });
            $(window).on('load', function () {
                setTimeout(function(){
                    if($('.js-overlay-campaign').hasClass('disabled')) {
                        return false;
                    } else {
                        $(".js-overlay-campaign").fadeIn();
                    }
                }, 10000);
            });





});
