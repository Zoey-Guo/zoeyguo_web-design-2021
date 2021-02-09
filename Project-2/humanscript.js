$("document").ready(function() {
   $(".item").mouseenter(function() {
     $(this).css("background-color","blue");
     $(this).css("color","yellow");
  

   });
   $(".item").mouseleave(function() {
     $(this).css("background-color","black");
     $(this).css("color","white");
   });


  });
