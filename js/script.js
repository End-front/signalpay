"use strict";

$(document).ready(function() {
  window.scrollTo(0, 0);
  let WindowWidht = $(window).outerWidth();
  if (WindowWidht < 1300) {
    $('.header__top .container').removeClass('d-none');
    $('.header__top .container').slideUp(0);
    
  } else {
    $('.header__top .container').slideDown(0);
    $('.header__top .container').addClass('d-none');
  }
  $('.mobile-menu__button').click(function () {
    $('.header__top .container').slideToggle();
  });
  $('.main').css('min-height', $('.main').outerHeight());

  function topPaddingScene(id) {
    let bottom = document.getElementById(id).getBoundingClientRect().bottom;
    let windowHeight = document.documentElement.clientHeight;
    let result = bottom <= windowHeight ? 0 : bottom - windowHeight;
    return result;
  } 

  let controller = new ScrollMagic.Controller();
  let PaddingScene0 = topPaddingScene('section-1');
  let scene0 = new ScrollMagic.Scene({
    triggerElement: '#section-1',
    offset: -(headerHeight - 1 - PaddingScene0),
    duration: (headerHeight - 70 + 580),
  })
  .triggerHook(0)
  .setPin('#section-1')
  .setClassToggle('#section-1', 'active')
  .addTo(controller);

  let timeline = new TimelineMax();
  timeline
      .to('.cart-start', 0.1, {
        opacity: 1,
      })
      .to('.cart-board', 0.1, {
        opacity: 0,
      })

  let scene = new ScrollMagic.Scene({
    triggerElement: '#section-1',
    offset: -(headerHeight - 1 - PaddingScene0),
  })
  .triggerHook(0)
  .setTween(timeline)
  .addTo(controller);

  let timeline1 = new TimelineMax();
  timeline1
      .to('.cart-process', 0.1, {
        opacity: 1,
      })
      .to('.cart-start', 0.1, {
        opacity: 0,
      });

  let scene1 = new ScrollMagic.Scene({
    triggerElement: '#section-1',
    offset: PaddingScene0,
  })
  .triggerHook(0)
  .setTween(timeline1)
  .addTo(controller);


  let timeline2 = new TimelineMax();
  timeline2
      .to('.main-phone', 0.5, {
        opacity: 1,
        x: -7.9 + '%',
      }, '0.5')
      .to('.cart-process, .cart-start, .cart-board', 0.5, {
        top: 43 + "%",
        left: 23.5 + "%",
        scale: 0.75,
      }, '0.5')
 

  let scene2 = new ScrollMagic.Scene({
    triggerElement: '#section-1',
    offset: -(headerHeight - 70 - PaddingScene0),
    duration: 500,
  })
  .triggerHook(0)
  .setTween(timeline2)
  .addTo(controller);

  let timeline3 = new TweenMax ('.main__section-2 svg', 1, {
    scale: 17,
    y: -180 + "%",
    x: 215 + "%",
    
  });
   
  let scene3 = new ScrollMagic.Scene({
    triggerElement: '#section-2',
    offset: -(headerHeight),
    duration: 1000,
  })
  .setPin('#section-2')
  .triggerHook(0)
  .setTween(timeline3)
  .addTo(controller);

  let timeline4 = new TimelineMax();
  timeline4
      .to('.purple', 0.1, {
        background: "#5D3CB1",
      })
      .to('.main__section-2 svg', 0.1, {
        opacity: 0,
        visibility: 'hidden',
      })
      .to('.main__section-2', 0.1, {
        overflow: 'hidden',
      })
      
    

  let scene4 = new ScrollMagic.Scene({
    triggerElement: '#section-2',
    offset:  800 - headerHeight,
  })
  .triggerHook(0)
  .setTween(timeline4)
  .addTo(controller);

  let heightNavItem = [$('#nav-item-1').height()]
  let heightText = [$("#text-2").height() + 24]
  let heightOrangeTitle = [
    $('#orange-title-2').height() + 5,
  ];
  let heightNavSubItem = [
    $('#nav-subitem-1').height() + 5,
    $('#nav-subitem-2').height() + 5,
    $('#nav-subitem-3').height() + 5,
  ];

  let timeline5 = new TimelineMax();
  let animtime5 = 1;
  timeline5
      .to('#orange-title-2', animtime5, {
        top: heightNavItem[0],
        bottom: 'auto',
        opacity: 1,        
      }, "0")
      .to('#text-2', animtime5, {
        top: heightNavItem[0] + heightOrangeTitle[0],
        bottom: 'auto',
        opacity: 1,        
      }, "0")
      .from('#nav-subitem-1', animtime5, {
        bottom: heightNavSubItem[1] + heightNavSubItem[2] + 5
      }, "0")
      .from('#nav-subitem-2', animtime5, {
        bottom: heightNavSubItem[2] + 5,
      }, "0")
      .to('#nav-subitem-1', animtime5, {
        bottom: 'auto',
        top:  heightNavItem[0] + heightOrangeTitle[0] + heightText[0],
        opacity: 1,
      }, "0")
      .to('#nav-subitem-2', animtime5, {
        bottom: 'auto',
        top:  heightNavItem[0] + heightOrangeTitle[0] + heightText[0] + heightNavSubItem[0],
        opacity: 1,
      }, "0")
      .to('#nav-subitem-3', animtime5, {
        bottom: 'auto',
        top:  heightNavItem[0] + heightOrangeTitle[0] + heightText[0] + heightNavSubItem[0] + heightNavSubItem[1],
        opacity: 1,
      }, "0")
     
  let timeline6 = new TimelineMax();

   if ($(window).width() < 950) {
    timeline6  
        .from('.phone', animtime5, {
          x: -120 + "%",
        }, '0')

    timeline5
        .to('#orange-title-1, #text-1', animtime5, {
          x: -100 + "vw",
          opacity: 0,
        }, "0")
        .to('.window-start', animtime5, {
          opacity: 0,
          x: -100 + "vw",
        }, '0')
        .from('.window-num', animtime5, {
          opacity: 0,
          x: 100 + "vw",
        }, '0')
        .to('.window-num', animtime5, {
          opacity: 1,
          x: -50 + "%",
        }, '0')
        .to("#nav-item-1", animtime5, {
          bottom: 'auto',
          top: 0,
          left: 35,
        }, '0')
        .to('#arrow', animtime5, {
          top: 0,
          bottom: 'auto',
          opacity: 1, 
          left: 0,        
        }, "0")
        .from('#orange-title-2, #text-2, #nav-subitem-1, #nav-subitem-2, #nav-subitem-3', animtime5, {
          x: 100 + "vw",
        }, "0")
   } else {
     timeline5
        .to('.phone', animtime5, {
          opacity: 0.3
        }, '0')
        .to('#orange-title-1, #text-1', animtime5, {
          y: -400,
          opacity: 0,
        }, "0")
        .to('.window-start', animtime5, {
          opacity: 0,
          y: -120 + "%",
        }, '0')
        .from('.window-num', animtime5, {
          opacity: 0,
          y: 120 + "%",
        }, '0')
        .to("#nav-item-1", animtime5, {
          bottom: 'auto',
          top: 0,
        }, '0')
        .to('#arrow', animtime5, {
          top: 0,
          bottom: 'auto',
          opacity: 1,        
        }, "0")
        .from('#orange-title-2, #text-2, #nav-subitem-1, #nav-subitem-2, #nav-subitem-3', animtime5, {
          y: 400,
        }, "0")
   }
  let PaddingScene5 = 0;
  if ($('#section-3').outerHeight() > $(window).height() - headerHeight) {
    PaddingScene5 = $('#section-3').outerHeight() - $(window).height() + headerHeight + 20;
    timeline5 
        .to('#section-3', animtime5, {
          y: PaddingScene5,        
        }, "0")
  }
  let scene5_0 = new ScrollMagic.Scene({
    triggerElement: '#section-3',
    offset: (-headerHeight - 20 + PaddingScene5),
    duration: 1000,
  })
  .setPin('#section-3')
  .triggerHook(0)
  .addTo(controller);

  let scene5 = new ScrollMagic.Scene({
    triggerElement: '#section-3',
    offset: (-headerHeight - 20 + PaddingScene5),
    duration: 500,
  })
  .triggerHook(0)
  .setTween(timeline5)
  .addTo(controller);

  let scene6 = new ScrollMagic.Scene({
    triggerElement: '#section-3',
    offset: -headerHeight - 150,
  })
  .triggerHook(0)
  .setTween(timeline6)
  .addTo(controller);


  let timeline7 = new TimelineMax();
  timeline7
      .from('.window-next', animtime5, {
        x: 150 + "%",
        opacity: 0,
      })
      .to(".window-num", animtime5, {
        x: -150 + "%",
        opacity: 0,
      }, "0")
      .to('.window-next', animtime5, {
        x: -150 + "%",
        opacity: 0,
      }, '1')
      .from(".window-final", animtime5, {
        x: 150 + "%",
        opacity: 0,
      }, '1')

  let scene7_1 = new ScrollMagic.Scene({
    triggerElement: '#section-3',
    offset: (-headerHeight - 20 + PaddingScene5) + 500,
    duration: 500,
  })
  .triggerHook(0)
  .setTween(timeline7)
  .addTo(controller);

  // let scene7_0 = new ScrollMagic.Scene({
  //   triggerElement: '#section-3',
  //   offset: (-headerHeight - 20 + PaddingScene5) + 500,
  //   duration: PaddingScene5 * 1.5,
  // })
  // .triggerHook(0)
  // .setTween('#section-3', animtime5, {
  //   y: -PaddingScene5,
  // })
  // .addTo(controller);

});

