$(function () {
  //skrollr js 기본셋
  let s = skrollr.init({
    edgeStrategy: 'set', //스크롤 위치가 키프레임 범위 밖에 있을때 애니메이션처리:set 기본값
    easing: 'linear' //기존 기능을 덮는 객체(여유감줌)
  });


  //우측 상단 스크롤값표시
  $(window).scroll(function () {
    let scroll = $(window).scrollTop();
    $(".scroll").text(Math.floor(scroll));
    if (scroll > 39341) {
      $(".scroll").text("THANKS!").css({
        "background": "white",
        "color": "black",
        "width": "100px",
        "height": "100px",
        "line-height": "100px",
      });
    }
  });

  //#breaks > div move
  $(window).scroll(function () {
    let wscroll = $(window).scrollTop();
    $("#scrollT").text(Math.floor(wscroll));

    if (wscroll > 1720) {
      gsap.to(".break1", {
        duration: 0.6,
        y: wscroll * 0.018
      });
      gsap.to(".break2", {
        duration: 0.4,
        y: -wscroll * 0.022
      });
      gsap.to(".break3", {
        duration: 0.2,
        y: wscroll * 0.041
      });
      gsap.to(".break4", {
        duration: 0.7,
        y: wscroll * 0.011
      });
      gsap.to(".break5", {
        duration: 0.8,
        y: -wscroll * 0.021
      });
      gsap.to(".break7", {
        duration: 0.7,
        y: wscroll * 0.024
      });
      gsap.to(".break8", {
        duration: 0.5,
        y: -wscroll * 0.018
      });
      gsap.to(".break9", {
        duration: 0.9,
        y: wscroll * 0.015
      });
      gsap.to(".break9", {
        duration: 0.9,
        y: wscroll * 0.004
      });
      gsap.to(".txt-box", {
        duration: 0.8,
        y: wscroll * 0.02
      })
    } else {
      gsap.to(".breaks>div", {
        y: 0
      })
    }
  });

  //#header > h1 > span display none
  // $(window).scroll(function () {
  //   let wscroll = $(window).scrollTop();
  //   if (wscroll > 1507) {
  //     $("#header>h1").css({
  //       "top": "-100px",
  //       "transition": "all 2s ease;"
  //     })
  //   } else {
  //     $("#header>h1").css({
  //       "top": "75px",
  //       "transition": "all 2s ease;"
  //     })
  //   }
  // });

  //.desktop_menu button  클릭시 menu list
  let menuBtn = $('.sec4 .desktop_menu ul li'),
    menuCont = $('.sec4 .desktop_menu ul li .menu_cont');
  menuBtn.mouseover(function () {
    $(this).find('.arrow .material-icons').addClass('rotate');
    $(this).find('.menu_cont').stop().slideDown(500);
  });
  menuBtn.mouseleave(function () {
    $(this).find('.arrow .material-icons').removeClass('rotate');
    $(this).find('.menu_cont').stop().slideUp(500);
  });

  //sec6 currentscroll 
  $(window).scroll(function () {
    let scroll = $(window).scrollTop();
    $(".CRSCROLL").text(Math.floor(scroll));
  })

  /*sec6 move_cir 마우스 오버시 움직이게하기*/


  // let moveCir = $(".move_cir")
  // let CirY = moveCir.position().top;
  // let CirX = moveCir.position().left;
  //  $('#section6').mousemove(function(e){
  //    console.log(e.clientX)
  //    moveCir.css({"left":e.clientX - ,
  //               "top":e.clientY
  //               })
  // });

  //sec6 view click시 코드
  // let view = $('.move_cir');
  // let IFR = $('.animation > div > iframe');

  // view.click(function () {
  //   if (IFR.hasClass('show')) {
  //     IFR.removeClass('show');
  //   } else {
  //     IFR.addClass('show');
  //   }
  // });

  //mobile glide carousel
  // const config = {
  //   type: 'carousel',
  //   gap: 120,
  //   perView: 4.1,
  //   startAt: 0,
  //   focusAt: 'center',
  //   peek: window.innerWidth * 0.029,
  //   breakpoints: {

  //     1000: {
  //       perView: 2.25,
  //       gap: 150
  //     },
  //     780: {
  //       perView: 2.295,
  //     },
  //     500: {
  //       perView: 2.2,
  //     }
  //   },
  //   autoplay: 2000,
  // }

  // new Glide(".glide", config).mount();
  // glide.update();


});