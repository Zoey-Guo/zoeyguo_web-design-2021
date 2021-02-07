$("document").ready(function() {
   $(".item").mouseenter(function() {
     $(this).css("background-color","blue");
   });
   $(".item").mouseleave(function() {
     $(this).css("background-color","black");
   });
  });
