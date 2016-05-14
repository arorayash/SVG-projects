$(document).ready(function() {

  TweenLite.set("#t_shadowbase", {
    transformOrigin: "50% 50%",
    x: 300,
    y: 304
  });

  TweenLite.set("#t_ball", {
    transformOrigin: "50% 50%",
    x: 300,
    y: 279
  });

  TweenLite.set("#t_ballbase", {
    transformOrigin: "50% 50%"
  });
    

    var speed = 0.9;
    
    $("#speedup0").click(function(){
       speed = 0.2;
       return speed;
       ballBounce();
    });
    $("#speedup1").click(function(){
       speed = 0.9;
       return speed;
       ballBounce();
    });
    $("#speedup2").click(function(){
       speed = 2.2;
       return speed;
       ballBounce();
    });
    
    
    var bounceTL = new TimelineMax({
      paused: true,
      repeat: -1
    });
    
  $(".play-anim").on("click", function() {
    function ballBounce() {
      var tl = new TimelineMax();

      tl

      /* ball bounce up */
        .to("#t_ball", 0.5, {
        transformOrigin: "50% 50%",
        y: 90,
        ease: Circ.easeOut
      }, "bounce")

      /* ball bounce down */
      .to("#t_ball", 0.4, {
        transformOrigin: "50% 50%",
        y: 279,
        ease: Circ.easeIn
      }, "bounce2")

      /* ball squash */
      .to("#t_ball", 0.15, {
        transformOrigin: "50% 100%",
        scaleX: 1.05,
        scaleY: 0.97,
        ease: Power1.easeInOut
      }, "bounce3-=0.01")

      return tl;
    }

    function ballShadow() {
      var tl = new TimelineMax();

      tl

      /* ball shadow stretch */
        .to("#t_shadowbase", 0.5, {
          transformOrigin: "50% 50%",
          autoAlpha: 0.15,
          scaleX: 1.7,
          scaleY: 1.2,
          ease: Power1.easeInOut
        }) 

      /* ball shadow normal */
      .to("#t_shadowbase", 0.5, {
          transformOrigin: "50% 50%",
          autoAlpha: 1,
          scaleX: 1,
          scaleY: 1,
          ease: Power1.easeInOut
        })

      return tl;
    }

    window.requestAnimationFrame(function() {
      bounceTL
        .add(ballBounce(), "ball")
        .add(ballShadow(), "ball")
        .progress(1).progress(0)
        .timeScale(speed)
        .play();

    });

  });
    
  $("#play-not").on("click", function() {
    bounceTL.pause();
  });

});