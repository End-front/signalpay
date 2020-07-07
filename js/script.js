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

  $('#cart-block-2').css('font-size', ($('#cart-block-2').width() / 18) + "px");
  $(window).resize(function () {$('#cart-block-2').css('font-size', ($('#cart-block-2').width() / 18) + "px")});

  $('.adaptive').css('font-size', ($('.adaptive__widnow').outerWidth() / 100) + "px");
  $(window).resize(function () {$('.adaptive').css('font-size', ($('.adaptive__widnow').outerWidth() / 100) + "px")});

  $('.scene10').outerHeight($('.scene10').outerWidth() / 2);
  $('.scene10 .button__item-scene').height($('.scene10 .button__item-scene').height());
  $('.scene10 .button__item-scene img').width($('.scene10 .button__item-scene img').width());

  $('#switch').on("change", function(){
    $("body").toggleClass('white-mode');
  }) 

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
      .to('.purple-bg', 0.1, {
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
  let heightText = [
    $("#text-2").height() + 24,
    $("#text-3").height(),
    $("#text-4").height(),
    $("#text-5").height()
  ]
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
    PaddingScene5 = $('#section-3').outerHeight() - (document.documentElement.clientHeight - headerHeight - 20);
    timeline5 
        .to('#section-3', animtime5, {
          y: PaddingScene5,        
        }, "0")
        
  }

  let standartDuration = $(window).height() * 1.5;
  let PaddingScene7 = 0;
  if ($(window).width() < 950) {
    PaddingScene7 = $('#cart-block-2').outerHeight() - $('.main__section__img-2').outerHeight() + 40
  }
  let PauseBetweenScene = $(window).height() * 0.8;
  let scene5_0 = new ScrollMagic.Scene({
    triggerElement: '#section-3',
    offset: (-headerHeight - 20 + PaddingScene5),
    duration: standartDuration * 11 + PauseBetweenScene * 2 + ((PaddingScene5 + PaddingScene7) * 1.5) * 2,
  })
  .setPin('#section-3')
  .triggerHook(0)
  .addTo(controller);

  let scene5 = new ScrollMagic.Scene({
    triggerElement: '#section-3',
    offset: (-headerHeight - 20 + PaddingScene5),
    duration: standartDuration,
  })
  .triggerHook(0)
  .setTween(timeline5)
  .addTo(controller);

  scene5.on('start', function () {
    $('.header .nav__item:nth-child(1) a').toggleClass('active');
  })

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
    offset: (-headerHeight - 20 + PaddingScene5) + standartDuration,
    duration: standartDuration,
  })
  .triggerHook(0)
  .setTween(timeline7)
  .addTo(controller);

  let scene7_0 = new ScrollMagic.Scene({
    triggerElement: '#section-3',
    offset: (-headerHeight - 20 + PaddingScene5) + standartDuration * 2,
    duration: (PaddingScene5) * 1.5,
  })
  .triggerHook(0)
  .setTween('#section-3', animtime5, {
    y: 0,
  })
  .addTo(controller);

  let distanse = $('#cart-block-2').width() * 0.5001 - $('#cart-block-2').width() * 0.1667;
  let distanseHeight = $('#cart-block-2').height() * 0.4;
  let timeline8 = new TimelineMax();
  timeline8
      .to(".courser", 1, {
        x: distanse,
      }, "1")
      .to(".cirle.yellow", 0.1, {
        scale: 1.27,
      }, '2')
      .to(".cirle.yellow img", 0.1, {
        opacity: 1,
      }, '2')
      .to(".cirle.green", 0.1, {
        scale: 1,
      }, '2')
      .to(".cirle.green img", 0.1, {
        opacity: 0,
      }, '2')
      .to(".cirle.yellow", 0.1, {
        scale: 1.27,
      }, '2')
      .to("#cart-block-2 .input", 0.4, {
        border: "3px solid #FFD80B",
      }, '2')
      .to("#cart-block-2 .button-arrow", 0.4, {
        backgroundColor: "#FFD80B",
      }, '2')
      .to("#cart-block-2 .button-text", 0.4, {
        backgroundColor: "#E0BB2A",
      }, '2')
      .to("#cart-block-2 .courser", 0.7, {
        x: distanse / 2,
      })
      .to(".cirle.yellow", 0.1, {
        scale: 1,
      }, '3')
      .to(".cirle.yellow img", 0.1, {
        opacity: 0,
      }, '3')
      .to(".cirle.pink", 0.1, {
        scale: 1.27,
      }, '3')
      .to(".cirle.pink img", 0.1, {
        opacity: 1,
      }, '3')
      .to("#cart-block-2 .input", 0.4, {
        border: "3px solid #FB0BC6",
      }, '3')
      .to("#cart-block-2 .button-arrow", 0.4, {
        backgroundColor: "#FB0BC6",
      }, '3')
      .to("#cart-block-2 .button-text", 0.4, {
        backgroundColor: "#FB0BC6",
      }, '3')
      .to("#cart-block-2 .courser", 1.5, {
        x: -distanse / 1.5,
        y: -distanseHeight,
      })
      .to("#cart-block-2 .input", 1, {
        borderRadius: 18 + 'em',
      }, "5")
      .to("#cart-block-2 .button", 1, {
        borderRadius: 18 + 'em',
      }, '5')

  let timeline8_2 = new TimelineMax();
  if ($(window).width() < 950) {
    timeline8_2
    .to("#orange-title-2, #text-2", animtime5, {
      x: -400,
      opacity: 0,
    })
  } else {
    timeline8_2
    .to("#orange-title-2, #text-2", animtime5, {
      y: -400,
      opacity: 0,
    })
  } 
  timeline8_2
      .to('#nav-subitem-1', animtime5, {
        top:  heightNavItem[0] + 20, 
      }, "0")
      .to('#nav-subitem-1 .dot', animtime5, {
        opacity: 1, 
      }, "0")
      .to('#text-3', animtime5, {
        top:  heightNavItem[0] + 20 + heightText[1],
        opacity: 1,
      }, "0")
      .to('#nav-subitem-2', animtime5, {
        top:  heightNavItem[0] + 20 + heightText[1] + 54 + heightNavSubItem[0],
      }, "0")
      .to('#nav-subitem-3', animtime5, {
        top:  heightNavItem[0] + 20 + heightText[1] + 54 + heightNavSubItem[0] + heightNavSubItem[1],
      }, "0")
      .to('.window-final, .phone', animtime5, {
        x: -120 + "%",
        opacity: 0,
      }, "0")
      .from('#cart-block-2', animtime5, {
        x: 120 + "%",
        opacity: 0,
      }, "0")
               

  let scene8_1 = new ScrollMagic.Scene({
    triggerElement: '#section-3',
    offset: (-headerHeight - 20 + PaddingScene5) + standartDuration * 3 + PauseBetweenScene + ((PaddingScene5) * 1.5) - 200,
  })
  .triggerHook(0)
  .setTween(timeline8)
  .addTo(controller);

  let scene8_2 = new ScrollMagic.Scene({
    triggerElement: '#section-3',
    offset: (-headerHeight - 20 + PaddingScene5) + standartDuration * 2 + PauseBetweenScene + ((PaddingScene5) * 1.5),
    duration: standartDuration,
  })
  .triggerHook(0)
  .setTween(timeline8_2)
  .addTo(controller);

  let scene8_0 = new ScrollMagic.Scene({
    triggerElement: '#section-3',
    offset: (-headerHeight - 20 + PaddingScene5) + standartDuration * 2 + PauseBetweenScene + ((PaddingScene5) * 1.5),
    duration: (PaddingScene7 + PaddingScene5) * 1.5,
  })
  .triggerHook(0)
  .setTween('#section-3', 0.5, {
    y: PaddingScene7 + PaddingScene5,
  })
  .addTo(controller);

  let scene8_3 = new ScrollMagic.Scene({
    triggerElement: '#section-3',
    offset: (-headerHeight - 20 + PaddingScene5) + standartDuration * 3 + PauseBetweenScene + ((PaddingScene5) * 1.5),
    duration: (PaddingScene7 + PaddingScene5) * 1.5,
  })
  .triggerHook(0)
  .setTween('#section-3', 0.5, {
    y: 0,
  })
  .addTo(controller);


  let scene9_0 = new ScrollMagic.Scene({
    triggerElement: '#section-3',
    offset: (-headerHeight - 20 + PaddingScene5) + standartDuration * 3 + PauseBetweenScene * 2 + PaddingScene5 * 1.5 + ((PaddingScene7 + PaddingScene5) * 1.5),
    duration: (PaddingScene7 + PaddingScene5) * 1.5,
  })
  .triggerHook(0)
  .setTween('#section-3', 0.5, {
    y: PaddingScene7 + PaddingScene5,
  })
  .addTo(controller);

  let timeline9 = new TimelineMax();
  timeline9
      .to('#nav-subitem-1 .dot', animtime5, {
        opacity: 0, 
      }, "0")
      .to('#nav-subitem-2', animtime5, {
        top:  heightNavItem[0] + 20 + heightNavSubItem[0],
      }, "0")
      .to('#nav-subitem-2 .dot', animtime5, {
        opacity: 1, 
      }, "0")
      .to('#text-4', animtime5, {
        top: heightNavItem[0] + 20 + heightNavSubItem[0] + heightNavSubItem[1] + 15,
        opacity: 1,
      }, "0")
      .to('#nav-subitem-3', animtime5, {
        top:  heightNavItem[0] + 20 + heightNavSubItem[0] + heightNavSubItem[1] + heightText[2] + 54,
      }, "0")

  if ($(window).width() < 950) {
    timeline9
    .to('#text-3', animtime5, {
      x: -400,
      opacity: 0,
    }, "0")
    .to('#cart-block-2', animtime5, {
      x: -120 + "%",
      opacity: 0,
    }, "0")
    .from('.adaptive', animtime5, {
      x: -120 + "%",
      opacity: 0,
    }, "0")
  } else {
    timeline9
    .to('#text-3', animtime5, {
      y: -400,
      opacity: 0,
    }, "0")
    .to('#cart-block-2', animtime5, {
      y: -120 + "%",
      opacity: 0,
    }, "0")
    .from('.adaptive', animtime5, {
      y: 120 + "%",
      opacity: 0,
    }, "0")
  } 

  let scene9 = new ScrollMagic.Scene({
    triggerElement: '#section-3',
    offset: (-headerHeight - 20 + PaddingScene5) + standartDuration * 3 + PauseBetweenScene * 2 + PaddingScene5 * 1.5 + ((PaddingScene7 + PaddingScene5) * 1.5),
    duration: standartDuration,
  })
  .triggerHook(0)
  .setTween(timeline9)
  .addTo(controller);
  
  let widthAdaptive = $('.adaptive__widnow__screen').width();
  let heightAdaptive = $('.adaptive__widnow__screen').height();
  let fontSizeAdaptive = $('.adaptive__widnow').outerWidth()/100;
  let timeline9_3 = new TimelineMax();
  timeline9_3
      .from('.adaptive__widnow__menu', animtime5, {
        fontSize: 5 + 'em',
      }, '0')
      .to('.adaptive__widnow__menu', animtime5, {
        x: -widthAdaptive / 2,
        width: heightAdaptive - fontSizeAdaptive*24.5,
        top: 50 + "%",
        y: -(widthAdaptive - fontSizeAdaptive*4.5) / 2,
        fontSize: 4.5 + 'em',
      }, '0')
      .to('.adaptive__widnow__buy', animtime5, {
        x: -widthAdaptive / 2,
        top: 50 + "%",
        y: -(widthAdaptive + fontSizeAdaptive*3.5) / 2 ,
      }, '0')
      .to('.adaptive__widnow__buy .item:first-child, .adaptive__widnow__buy .item:nth-child(2)', animtime5, {
        paddingTop: 0.5 + "em",
        paddingBottom: 0.5 + "em",
      }, '0')
      .to('.adaptive__widnow__text', animtime5, {
        x: -widthAdaptive / 2,
        top: 50 + "%",
        y: -(widthAdaptive + fontSizeAdaptive*3.5) / 2 ,
        marginTop: 0.5 + "em",
      }, '0')
      .to('.adaptive__widnow__text .text__subtitle', animtime5, {
        marginTop: 0.5 + "em",
      }, '0')
      .to('.adaptive__widnow__line', animtime5, {
        x: widthAdaptive / 2,
        top: -50 + "%",
        y: (widthAdaptive - fontSizeAdaptive*7.5) / 2,
        marginTop: 5.5 + "em",
      }, '0')
      .to('.adaptive__widnow__line .line-1, .adaptive__widnow__line .button-1', animtime5, {
        opacity: 0,
      }, '0')
      .to('.adaptive__widnow__line .line-2, .adaptive__widnow__line .button-2', animtime5, {
        opacity: 1,
      }, '0')
      .to('.adaptive__widnow__screen.mobile', animtime5, {
        rotation: -90,
      }, "0")
      .to('.adaptive__widnow__screen.mobile', animtime5, {
        scaleX: 2.4,
        scaleY: 0.75,
      }, "2")
      .to('.adaptive__widnow__screen.mobile', animtime5, {
        opacity: 0,
      }, 2 + animtime5 /2)
      .from('.adaptive__widnow__screen.table', animtime5, {
        scaleX: 1.35,
        scaleY: 0.42,
        opacity: 0,
      }, '2')
      .to('.adaptive__widnow__line .line-2, .adaptive__widnow__line .button-2, .adaptive__widnow__line .underline-1', animtime5, {
        opacity: 0,
      }, '2')
      .to('.adaptive__widnow__line .line-3, .adaptive__widnow__line .button-3, .adaptive__widnow__line .underline-2', animtime5, {
        opacity: 1,
      }, '2')
      .to('.adaptive__widnow__menu', animtime5, {
        x: 0,
        width: 100 + "%",
        top: 0,
        y: 0,
        marginBottom: 0.3 + "em"
      }, '2')
      .to('.adaptive__widnow__buy', animtime5, {
        x: 0,
        top: 0,
        y: 0,
      }, '2')
       .to('.adaptive__widnow', animtime5, {
        width: 43.7 + "%",
        fontSize: 1.25 + "em",
        paddingRight: 13 +  "em",
        paddingLeft: 13 +  "em",
        paddingTop: 14.5 + "em"
      }, '2')
      .to('.adaptive__widnow__text', animtime5, {
        x: 0,
        top: 0,
        y: 0,
      }, '2')
      .to('.adaptive__widnow__line .text__row-big', animtime5, {
        marginTop: 1 + "em",
        marginBottom: 0.5 + "em"
      }, '2')
      .to('.adaptive__widnow__line', animtime5, {
        x: 0,
        top: 0,
        y: 0,
        marginTop: 0 + "em",
      }, '2')
      .to('.adaptive__widnow__line .button', animtime5, {
        marginTop: -1 + "em",
      }, '2')
      .to('.adaptive__widnow__line .underline', animtime5, {
        marginTop: -1 + "em",
      }, '2')
      .to('.adaptive__widnow__screen.table', animtime5, {
        opacity: 0,
      }, '4')
      .from('.adaptive__widnow__screen.computer', animtime5, {
        opacity: 0,
      }, '4')
      .to('.adaptive__widnow', animtime5, {
        width: 80 + "%",
        paddingTop: 11 + 'em',
        paddingLeft: 8 +"em",
        paddingRight: 8 +"em",
      }, '4')
      .to('.adaptive__widnow__line, .adaptive__widnow__buy, .adaptive__widnow__text', animtime5, {
        width: 47 + "%",
      }, '4')
      .to('.adaptive__widnow__buy .image', animtime5, {
        width: 35 + "%",
      }, '4')
      .to('.adaptive__widnow__buy .item:last-child', animtime5, {
        borderBottomWidth: 1,
        paddingTop: 0.5 + "em",
        paddingBottom: 0.5 + "em",
        height: 'auto',
      }, '4')
      .to('.adaptive__widnow__buy .count', animtime5, {
        marginBottom: "auto",
      }, '4')
      .to('.adaptive__widnow__line, .adaptive__widnow__text', animtime5, {
        x: $('.adaptive__widnow__screen.computer').width() * 0.85 / 2,
        top: - 55 + "%",
        y: - $('.adaptive__widnow__buy').outerHeight() - $('.adaptive__widnow__menu').outerHeight(),
      }, '4')
      .from('.adaptive__widnow__buy', animtime5, {
        fontSize: 4.4 + "em"
      }, "4")
      .to('.adaptive__widnow__buy', animtime5, {
        y: - $('.adaptive__widnow__menu').outerHeight(),
        fontSize: 5.7 + "em",
        marginBottom: 'auto'
      }, "4")
      .to('.adaptive__widnow__line .line-3, .adaptive__widnow__line .button-3, .adaptive__widnow__line .underline-2', animtime5, {
        opacity: 0,
      }, '4')
      .to('.adaptive__widnow__line .line-4, .adaptive__widnow__line .button-4, .adaptive__widnow__line .underline-1', animtime5, {
        opacity: 1,
      }, '4')
      .to('.adaptive__widnow__line .button', animtime5, {
        marginTop: 1 + "em",
      }, '4')
      .to('.adaptive__widnow__line .underline', animtime5, {
        marginTop: 0 + "em",
      }, '4')
      .to('.adaptive__widnow__line input', animtime5, {
        value: "1797,00 руб.",
      }, '4')
      .to('.adaptive__widnow__menu', animtime5, {
        opacity: 0,
      }, '4')

  let scene9_3 = new ScrollMagic.Scene({
    triggerElement: '#section-3',
    offset: (-headerHeight - 20 + PaddingScene5) + standartDuration * 3.9 + PauseBetweenScene * 2 + PaddingScene5 * 1.5 + ((PaddingScene7 + PaddingScene5) * 1.5),
  })
  .triggerHook(0)
  .setTween(timeline9_3)
  .addTo(controller);

  let scene9_4 = new ScrollMagic.Scene({
    triggerElement: '#section-3',
    offset: (-headerHeight - 20 + PaddingScene5) + standartDuration * 4 + PauseBetweenScene * 2 + PaddingScene5 * 1.5 + ((PaddingScene7 + PaddingScene5) * 1.5),
    duration: (PaddingScene7 + PaddingScene5) * 1.5,
  })
  .triggerHook(0)
  .setTween("#section-3", animtime5, {
    y: 0,
  })
  .addTo(controller);

  let scene10_0 = new ScrollMagic.Scene({
    triggerElement: '#section-3',
    offset: (-headerHeight - 20 + PaddingScene5) + standartDuration * 4 + PauseBetweenScene * 3 + PaddingScene5 * 1.5  + ((PaddingScene7 + PaddingScene5) * 1.5) * 2,
    duration: PaddingScene5 * 1.5,
  })
  .triggerHook(0)
  .setTween("#section-3", animtime5, {
    y: PaddingScene5,
  })
  .addTo(controller);

  let timeline10_1 = new TimelineMax();
  timeline10_1
  .to('.phone', animtime5, {
    opacity: 0.3,
    x: 0 + "%",
  }, "0")
  .from('.scene10', animtime5, {
    opacity: 0,
    x: -100 + "%",
  }, "0")
  .to('.adaptive', animtime5, {
    opacity: 0,
    x: 150 + "%",
  }, "0")
  .to('#nav-subitem-2 .dot', animtime5, {
      opacity: 0, 
    }, "0")
  .to('#nav-subitem-3 .dot', animtime5, {
      opacity: 1, 
    }, "0")
  .to('#nav-subitem-3', animtime5, {
      top:  heightNavItem[0] + 20 + heightNavSubItem[0] + heightNavSubItem[1],
    }, "0")
   .to('#text-4', animtime5, {
      y: -400,
      opacity: 0,
    }, "0")
   .from('#text-5', animtime5, {
      y: 400,
      opacity: 0,
      top: heightNavItem[0] + 20 + heightNavSubItem[0] + heightNavSubItem[1] + heightNavSubItem[2] + 10,
    }, "0")
   .to('#text-5', animtime5, {
      opacity: 1,
      top: heightNavItem[0] + 20 + heightNavSubItem[0] + heightNavSubItem[1] + heightNavSubItem[2] + 10,
    }, "0")

  let scene10_1 = new ScrollMagic.Scene({
    triggerElement: '#section-3',
    offset: (-headerHeight - 20 + PaddingScene5) + standartDuration * 4 + PauseBetweenScene * 3 + PaddingScene5 * 1.5 + ((PaddingScene7 + PaddingScene5) * 1.5) * 2,
    duration: standartDuration,
  })
  .triggerHook(0)
  .setTween(timeline10_1)
  .addTo(controller);

  let timeline10_2 = new TimelineMax();
  timeline10_2
  .to('.scene10 .button__item-scene:nth-child(1)', animtime5, {
    width: 0 + '%',
  }, "1")
  .to('.scene10 .button__item-scene:nth-child(2), .scene10 .button__item-scene:nth-child(3)', animtime5, {
    width: 46 + '%',
  }, "1")
  .to('.scene10 .button__item-scene:nth-child(1)', animtime5, {
    borderWidth: 0 + "px",
  }, "1.5")
   .from('.scene10 .button__item-scene:nth-child(2)', animtime5, {
    marginLeft: "auto",
  }, "1.55")
  .to('.scene10 .button__item-scene:nth-child(2)', animtime5, {
    marginLeft: 0 + "px",
  }, "1.55")
  .to('.scene10 .button__item-scene:nth-child(1)', animtime5, {
    borderWidth: 2 + "px",
  }, "2.7")
  .to('.scene10 .button__item-scene:nth-child(1)', animtime5, {
    width: 100 + '%',
    borderWidth: 2 + "px",
    marginRight: "auto"
  }, "3")
  .to('.scene10 .button__item-scene:nth-child(2), .scene10 .button__item-scene:nth-child(3)', animtime5, {
    width: 0 + '%',
  }, "3")
  .to('.scene10 .button__item-scene:nth-child(2), .scene10 .button__item-scene:nth-child(3)', animtime5, {
    borderWidth: 0 + "px",
  }, "3.5")

  let scene10_2 = new ScrollMagic.Scene({
    triggerElement: '#section-3',
    offset: (-headerHeight - 20 + PaddingScene5) + standartDuration * 4.8 + PauseBetweenScene * 3 + PaddingScene5 * 1.5 + ((PaddingScene7 + PaddingScene5) * 1.5) * 2,
  })
  .triggerHook(0)
  .setTween(timeline10_2)
  .addTo(controller);

  let scene10_3 = new ScrollMagic.Scene({
    triggerElement: '#section-3',
    offset: (-headerHeight - 20 + PaddingScene5) + standartDuration * 5 + PauseBetweenScene * 3 + PaddingScene5 * 1.5 + ((PaddingScene7 + PaddingScene5) * 1.5) * 2,
    duration: PaddingScene5 * 1.5,
  })
  .triggerHook(0)
  .setTween("#section-3", animtime5, {
    y: 0,
  })
  .addTo(controller);

  let scene11_0 = new ScrollMagic.Scene({
    triggerElement: '#section-3',
    offset: (-headerHeight - 20 + PaddingScene5) + standartDuration * 5 + PauseBetweenScene * 4 + PaddingScene5 * 2 * 1.5 + ((PaddingScene7 + PaddingScene5) * 1.5) * 2,
    duration: PaddingScene5 * 1.5,
  })
  .triggerHook(0)
  .setTween("#section-3", animtime5, {
    y: PaddingScene5,
  })
  .addTo(controller);

  let timeline11_1 = new TimelineMax();
  // timeline11_1
  // .to('.scene10 .button__item-scene:nth-child(1)', animtime5, {
  //   width: 0 + '%',
  // }, "1")

  let scene11_1 = new ScrollMagic.Scene({
    triggerElement: '#section-3',
    offset: (-headerHeight - 20 + PaddingScene5) + standartDuration * 5 + PauseBetweenScene * 4 + PaddingScene5 * 2 * 1.5 + ((PaddingScene7 + PaddingScene5) * 1.5) * 2,
    duration: standartDuration,
  })
  .triggerHook(0)
  .setTween(timeline11_1)
  .addTo(controller);
});


