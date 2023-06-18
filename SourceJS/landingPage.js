$(document).ready(function(){
    $(".link").addClass("color");
  //   First active item
    $(".li-1").click(function(){
       $(".bottom__line").addClass("bottom__active");
       $(".link").addClass("color");
       $(".link1").removeClass("color1");
       $(".link2").removeClass("color2");
       $(".bottom__line").removeClass("bottom__active1 bottom__active2");
    });
    
    //  Second active item
    $(".li-3").click(function(){
        $(".bottom__line").addClass("bottom__active1");
        $(".link1").addClass("color1");
        $(".link").removeClass("color");
        $(".link2").removeClass("color2");
        $(".bottom__line").removeClass("bottom__active bottom__active2");
    });
    
    // Third active item
     $(".li-3").click(function(){
          $(".bottom__line").addClass("bottom__active2");
          $(".link2").addClass("color2");
          $(".link").removeClass("color");
          $(".link1").removeClass("color1");
          $(".bottom__line").removeClass("bottom__active bottom__active1");
    });
  });