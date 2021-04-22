
// IE support for "main"
document.createElement('main');

// Object-Fit
// $(function () { objectFitImages() });

// Add target="_blank" rel="noreferrer noopener"
$('a[href^="http://"], a[href^="https://"]').attr({ target:"_blank", rel:"noreferrer noopener" });

// Immersive
// $(document).ready(function($) {
//   var lastScroll = 0;
//     $(window).scroll(function() {
//     setTimeout(function() {
//       var scroll = $(window).scrollTop();
//       if (scroll > lastScroll + 10) {
//         $(".l-site-header").removeClass("js-show");
//       } else if (scroll < lastScroll - 10) {
//         $(".l-site-header").addClass("js-show");
//       }

//       if (scroll >= 100) {
//         $(".l-site-header").addClass("js-active");
//       } else {
//         $(".l-site-header").removeClass("js-active");
//       } lastScroll = scroll;
//     }, 300);
//   });
// });

// Smooth scroll
$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var header = $('header').height();
    var position = target.offset().top - 300;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});




//========================================================================

//AREA INTRODUCTION DROPDOWN
$(document).ready(function() {
  const areaBtn = $('#area');
  const areaNav = $('#area-nav');

  const contactBtn = $('#contact');
  const contactNav = $('#contact-nav');

  const maruBtn = $('#marunouchi-btn');
  const maruBackBtn =$('#marunouchi-back')

  const menuBtn = $('.c-site-menu')
  const menuList = $('.l-menu-list');


  $(areaBtn).click(function() {
    areaNav.slideToggle(100);
    $('.areabtn').toggleClass('active');
    $('.l-site-main').toggleClass('disabled');
    if(contactNav.is(':visible') || $('#marunouchi').is(':visible')) {
      contactNav.hide();
      $('#marunouchi').hide();
      $('.l-site-main').addClass('disabled');
    } 
    
  })

  $(contactBtn).click(function() {
    contactNav.slideToggle(100);
    $('.l-site-main').toggleClass('disabled');
    if(areaNav.is(':visible') || $('#marunouchi').is(':visible')) {
      areaNav.hide();
      $('#marunouchi').hide();
      $('.l-site-main').addClass('disabled');
      
    } 
    $('.areabtn').removeClass('active');
  });

  // $('.l-contact').click(function () {
  //   contactNav.hide();
  //   $(this).next().slideToggle(100);
  //   $('.l-nav-area').slideToggle(100)
  // })
 
  $('.l-contact').click(function() {
    $(this).next().toggleClass('active');
  })


  //BACK BUTTONS
  $(maruBackBtn).click(function() {
    $(contactNav).slideDown(100);
    $('#marunouchi').removeClass('active');
  })

  $('#roppongi-back').click(function() {
    $(contactNav).slideDown(100);
    $('#roppongi').removeClass('active');
  })

  $('#water-back').click(function() {
    $(contactNav).slideDown(100);
    $('#waterfront').removeClass('active');
  })

  $('#nihonbashi-back').click(function() {
    $(contactNav).slideDown(100);
    $('#nihonbashi').removeClass('active');
  })

  $('#shinagawa-back').click(function() {
    $(contactNav).slideDown(100);
    $('#shinagawa').removeClass('active');
  })

  $('#hachioji-back').click(function() {
    $(contactNav).slideDown(100);
    $('#hachioji').removeClass('active');
  })
  $('#shibuya-back').click(function() {
    $(contactNav).slideDown(100);
    $('#shibuya').removeClass('active');
  })

  $('#takeshiba-back').click(function() {
    $(contactNav).slideDown(100);
    $('#takeshiba').removeClass('active');
  })



// MOBILE DROPDOWN MENU
  $(menuBtn).click(function() {
    menuList.slideToggle(100);
    $('.c-site-menu').toggleClass('js-active');
    $('.l-site-header-content').toggleClass('js');
    $('.l-lang').toggleClass('show');
    $('#site-header01').toggleClass('hide');
    $('#site-header02').toggleClass('show');
  })
  $('.arr').click(function () {
    $(this).next().slideToggle(100);
    $(this).toggleClass('act')
  })
});
$('.arr02').click(function() {
  $(this).next().slideToggle(100);
  $(this).toggleClass('js');
})
$('.arr03').click(function() {
  $(this).next().slideToggle(100);
  $(this).toggleClass('act');
})



//MAIN CONTENT TABS
$(function () {
  $.FindContainer = function () {
      $('.tab-content>div').each(function findcontent() {
          const newindex = $('.activetab').index();
          const newheight = $('.activetab').height();
          $('.tab-content').animate({
              'height': newheight+20
          }, 50);
          const otherindex = $(this).index();
          const substractindex = otherindex - newindex;
          const currentwidth = $('.multipletab').width();
          const newpositions = substractindex * currentwidth;
          $(this).animate({
              'left': newpositions
          });
      });
  };
  $.FindId = function () {
      $('.tab-content>div').each(function () {
          if ($(this).attr('id') == $('.active').attr('id')) {
              $('.tab-content>div').removeClass('activetab');
              $(this).addClass('activetab');
          }
      });
  };
  $('.tab-buttons>span').first().addClass('active');
  $('.tab-content>div').each(function () {
      const activeid = $('.active').attr('id');
      if ($(this).attr('id') == activeid) {
          $(this).addClass('activetab');
      }
      const currentheight = $('.activetab').height();
      const currentwidth = $('.multipletab').width();
      const currentindex = $(this).index();
      const currentposition = currentindex * currentwidth;
      $(this).css({
          'left': currentposition,
              'width': currentwidth - 40,
              'padding': '10px 20px'
      });
      $(this).attr('data-position', currentposition);
      $('.tab-content').css('height', currentheight+20);
  });
  $('.tab-buttons>span').click(function () {

      $('.tab-buttons>span').removeClass('active');
      $(this).addClass('active');
      let currentid = $('.active').attr('id');
      $.FindId();
      $.FindContainer();
  });
  $('.next').click(function () {
      const activetabindex = $('.activetab').index() + 1;
      const containers = $('.tab-content>div').length;
      if (containers == activetabindex) {
          $('.tab-buttons>span').removeClass('active');
          $('.tab-buttons>span').first().addClass('active');
          let currentid = $('.active').attr('id');
          $.FindId();
          $.FindContainer();
      } else {
          const currentopen = $('.active').next();
          $('.active').removeClass('active');
          currentopen.addClass('active');
          $.FindId();
          $.FindContainer();
      }
  });
$('.prev').click(function(){
  const activetabindex = $('.activetab').index();
      if (activetabindex == 0) {
          $('.tab-buttons>span').removeClass('active');
          $('.tab-buttons>span').last().addClass('active');
          let currentid = $('.active').attr('id');
          $.FindId();
          $.FindContainer();
      } else {
          let currentopen = $('.active').prev();
          $('.active').removeClass('active');
          currentopen.addClass('active');
          $.FindId();
          $.FindContainer();
      }
});
});

//background color conditions
$(document).ready(function() {
  const city1 = $('.city1');
  const city2 = $('.city2');
  const city3 = $('.city3');
  const city4 = $('.city4');
  const city5 = $('.city5');
  const city6 = $('.city6');
  const city7 = $('.city7');
  const city8 = $('.city8');
  const city9 = $('.city9');

  let main = $('.main-content');

  $('.tab-buttons').on("click","span", function() {
    if(city1.hasClass('active')) {
      main.addClass('green')
    }
    else  {
      main.removeClass('green')
    }

    if(city2.hasClass('active')) {
      main.addClass('blue')
    }
    else {
      main.removeClass('blue')
    }

    if(city3.hasClass('active')) {
      main.addClass('purple')
    }
    else {
      main.removeClass('purple')
    }

    if(city4.hasClass('active')) {
      main.addClass('pink')
    }
    else {
      main.removeClass('pink')
    }
    if(city5.hasClass('active')) {
      main.addClass('red')
    }
    else {
      main.removeClass('red')
    }
    if(city6.hasClass('active')) {
      main.addClass('orange')
    }
    else {
      main.removeClass('orange')
    }
    if(city7.hasClass('active')) {
      main.addClass('yellow')
    }
    else {
      main.removeClass('yellow')
    }
    if(city8.hasClass('active')) {
      main.addClass('lightgreen')
    }
    else {
      main.removeClass('lightgreen')
    }
    if(city9.hasClass('active')) {
      main.addClass('darkgreen')
    }
    else {
      main.removeClass('darkgreen')
    }
  })

  $('.tab-nav').on("click",".next", function() {
    if(city1.hasClass('active')) {
      main.addClass('green')
    }
    else  {
      main.removeClass('green')
    }

    if(city2.hasClass('active')) {
      main.addClass('blue')
    }
    else {
      main.removeClass('blue')
    }
    if(city3.hasClass('active')) {
      main.addClass('purple')
    }
    else {
      main.removeClass('purple')
    }
    if(city4.hasClass('active')) {
      main.addClass('pink')
    }
    else {
      main.removeClass('pink')
    }
    if(city5.hasClass('active')) {
      main.addClass('red')
    }
    else {
      main.removeClass('red')
    }
    if(city6.hasClass('active')) {
      main.addClass('orange')
    }
    else {
      main.removeClass('orange')
    }
    if(city7.hasClass('active')) {
      main.addClass('yellow')
    }
    else {
      main.removeClass('yellow')
    }
    if(city8.hasClass('active')) {
      main.addClass('lightgreen')
    }
    else {
      main.removeClass('lightgreen')
    }
    if(city9.hasClass('active')) {
      main.addClass('darkgreen')
    }
    else {
      main.removeClass('darkgreen')
    }
  })

  $('.tab-nav').on("click",".prev", function() {
    if(city1.hasClass('active')) {
      main.addClass('green')
    }
    else  {
      main.removeClass('green')
    }

    if(city2.hasClass('active')) {
      main.addClass('blue')
    }
    else {
      main.removeClass('blue')
    }
    if(city3.hasClass('active')) {
      main.addClass('purple')
    }
    else {
      main.removeClass('purple')
    }
    if(city4.hasClass('active')) {
      main.addClass('pink')
    }
    else {
      main.removeClass('pink')
    }
    if(city5.hasClass('active')) {
      main.addClass('red')
    }
    else {
      main.removeClass('red')
    }
    if(city6.hasClass('active')) {
      main.addClass('orange')
    }
    else {
      main.removeClass('orange')
    }
    if(city7.hasClass('active')) {
      main.addClass('yellow')
    }
    else {
      main.removeClass('yellow')
    }
    if(city8.hasClass('active')) {
      main.addClass('lightgreen')
    }
    else {
      main.removeClass('lightgreen')
    }
    if(city9.hasClass('active')) {
      main.addClass('darkgreen')
    }
    else {
      main.removeClass('darkgreen')
    }
  })
 
});


//CASE STUDY SLIDES

const slideshow = document.querySelector('.slide-wrap');
let slides = document.querySelectorAll('.slide-entry'),


slideCount = slides.length,
currentSlide = 0,
slideHeight = null,
initialHeight = slides[0].clientHeight;

slides[0].classList.add('active'); //on load, activate the first slide

function moveToSlide(n) { // set up our slide navigation functionality
  slides[currentSlide].className = 'slide-entry';
  currentSlide = (n+slideCount)%slideCount;
  slides[currentSlide].className = 'slide-entry active';
  slideHeight = slides[currentSlide].clientHeight;
  slideshow.style.height = slideHeight + 'px';
  window.addEventListener('resize', function(){
    resizedSlideHeight = slides[currentSlide].clientHeight;
    slideshow.style.height = resizedSlideHeight + 'px';
  });
}

function nextSlide(e){
  moveToSlide(currentSlide+1);
  let code = e.keyCode;
  if( code == 39 ) {
    moveToSlide(currentSlide+1);
  }
};
function prevSlide(e){
  moveToSlide(currentSlide+-1);
  let code = e.keyCode;
  if( code == 37 ) {
    moveToSlide(currentSlide+-1);
  }
};

const slideHandlers = {
  nextSlide: function(element){
    document.querySelector(element).addEventListener('click',nextSlide);
    document.body.addEventListener('keydown',nextSlide, false);
  },
  prevSlide: function(element){
    document.querySelector(element).addEventListener('click',prevSlide);
    document.body.addEventListener('keydown',prevSlide, false);
  }
}

slideHandlers.nextSlide('#next-slide');
slideHandlers.prevSlide('#prev-slide');

// Dynamic slideshow height

  slideshow.style.height = initialHeight + 'px'; //on load, set the height of the slider to the first active slide

window.addEventListener('resize', function(){ // adjust the height of the slidehow as the browser is resized
  const resizedHeight = slides[0].clientHeight;
  slideshow.style.height = resizedHeight + 'px';
});

// Detect swipe events for touch devices

// let initialX = null;
// let initialY = null;
// function startTouch(e) {
//   initialX = e.touches[0].clientX;
//   initialY = e.touches[0].clientY;
// };
// function moveTouch(e) {
//   if (initialX === null) {
//     return;
//   }
//   if (initialY === null) {
//     return;
//   }
//   let currentX = e.touches[0].clientX;
//   let currentY = e.touches[0].clientY;
//   let diffX = initialX - currentX;
//   let diffY = initialY - currentY;
//   if (Math.abs(diffX) > Math.abs(diffY)) {
//     if (diffX > 0) {
// // swiped left
// moveToSlide(currentSlide+1);
// } else {
// // swiped right
// moveToSlide(currentSlide+-1);
// }
// }
// initialX = null;
// initialY = null;
// e.preventDefault();
// };

// slideshow.addEventListener("touchstart", startTouch, false);
// slideshow.addEventListener("touchmove", moveTouch, false);  

// optional autoplay function  
  // setInterval(function(){
  //   nextSlide();
  // },8000); 

  // if (slideshow != null ) { 
  //     //make sure we don't run this script if the slideshow is not present
  // }


