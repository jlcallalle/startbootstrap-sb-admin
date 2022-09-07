(function($) {
  "use strict"; // Start of use strict

  // Toggle the side navigation
  $("#sidebarToggle, #sidebarToggleTop").on('click', function(e) {
    $("body").toggleClass("sidebar-toggled");
    $(".sidebar").toggleClass("toggled");
    if ($(".sidebar").hasClass("toggled")) {
      $('.sidebar .collapse').collapse('hide');
    };
  });

  // Close any open menu accordions when window is resized below 768px
  $(window).resize(function() {
    if ($(window).width() < 768) {
      $('.sidebar .collapse').collapse('hide');
    };
    
    // Toggle the side navigation when window is resized below 480px
    if ($(window).width() < 480 && !$(".sidebar").hasClass("toggled")) {
      $("body").addClass("sidebar-toggled");
      $(".sidebar").addClass("toggled");
      $('.sidebar .collapse').collapse('hide');
    };
  });

  // Prevent the content wrapper from scrolling when the fixed side navigation hovered over
  $('body.fixed-nav .sidebar').on('mousewheel DOMMouseScroll wheel', function(e) {
    if ($(window).width() > 768) {
      var e0 = e.originalEvent,
        delta = e0.wheelDelta || -e0.detail;
      this.scrollTop += (delta < 0 ? 1 : -1) * 30;
      e.preventDefault();
    }
  });

  // Scroll to top button appear
  $(document).on('scroll', function() {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });

  // Smooth scrolling using jQuery easing
  $(document).on('click', 'a.scroll-to-top', function(e) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: ($($anchor.attr('href')).offset().top)
    }, 1000, 'easeInOutExpo');
    e.preventDefault();
  });

 /*  $("#alertsDropdown").on('click', function(e) {
    alert('test');
  }); */

  $('.dropdown-toggle').dropdown();


  $('#menuActividad, #menuCerrar').on('show.bs.dropdown', function () {
		$('.invex-loader-theme').addClass('show');
	});
	
	$('#menuActividad, #menuCerrar').on('hidden.bs.dropdown', function(e) {
		$('.invex-loader-theme').removeClass('show');
  });

})(jQuery); // End of use strict

// MENU NAV 

function darken_screen(yesno){
  if( yesno == true ){
      document.querySelector('.screen-darken').classList.add('active');
  }
  else if(yesno == false){
      document.querySelector('.screen-darken').classList.remove('active');
  }
}

function close_offcanvas(){
  darken_screen(false);
  document.querySelector('.mobile-offcanvas.show').classList.remove('show');
  document.body.classList.remove('offcanvas-active');
}

function show_offcanvas(offcanvas_id){
  darken_screen(true);
  document.getElementById(offcanvas_id).classList.add('show');
  document.body.classList.add('offcanvas-active');
}

document.addEventListener("DOMContentLoaded", function(){
  document.querySelectorAll('[data-trigger]').forEach(function(everyelement){
      
      let offcanvas_id = everyelement.getAttribute('data-trigger');
      
      everyelement.addEventListener('click', function (e) {
          e.preventDefault();
          show_offcanvas(offcanvas_id);
      });
  });

  document.querySelectorAll('.btn-close').forEach(function(everybutton){
      
      everybutton.addEventListener('click', function (e) {
          e.preventDefault();
          close_offcanvas();
        });
  });

  /* document.querySelector('.screen-darken').addEventListener('click', function(event){
      close_offcanvas();
  }); */
  
}); 
// DOMContentLoaded  end