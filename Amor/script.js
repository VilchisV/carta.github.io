$(document).ready(function(){
    $(".valentines-day").click(function(){
      // Animación del sobre desapareciendo
      $(".envelope").fadeOut(800, function() {
        $(".valentines-day .heart, .valentines-day .text, .valentines-day .front").hide();
  
        // Mostrar la carta con animación de aparición
        $("#card").css({
          "visibility": "visible",
          "opacity": 0,
          "transform": "scale(0.1)"
        }).animate({ "opacity": 1 }, {
          duration: 1000,
          step: function(now) {
            var scale = 1 + Math.sin(now * Math.PI) * 0.1;
            $(this).css("transform", "scale(" + scale + ")");
          }
        });
      });
    });
  });
  