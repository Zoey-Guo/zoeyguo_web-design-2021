$("document").ready(function() {

//When not hovering, it can't bounce back//

    /* $(".name").hover(function() {
        $(".row-1").addClass("row-afterhover");
    }); */


//When hovering any item in the first row//
    $(".row-1-beforehover").mouseenter(function() {
        $(".row-1").addClass("row-afterhover");
    });
    $(".row-1-beforehover").mouseleave(function() {
        $(".row-1").removeClass("row-afterhover");
    });
//When hovering any item in the second row//
    $(".row-2-beforehover").mouseenter(function() {
        $(".row-2").addClass("row-afterhover");
    });
    $(".row-2-beforehover").mouseleave(function() {
        $(".row-2").removeClass("row-afterhover");
    });
//When hovering any item in the third row//
    $(".row-3-beforehover").mouseenter(function() {
        $(".row-3").addClass("row-afterhover");
    });
    $(".row-3-beforehover").mouseleave(function() {
        $(".row-3").removeClass("row-afterhover");
    });
//When hovering any item in the fourth row//
    $(".row-4-beforehover").mouseenter(function() {
        $(".row-4").addClass("row-afterhover");
    });
    $(".row-4-beforehover").mouseleave(function() {
        $(".row-4").removeClass("row-afterhover");
    });


//When hovering any item in the Column-1//
    $(".colum-1-beforehover").mouseenter(function() {
        $(".colum-1-beforehover").addClass("colum-afterhover");
    });
    $(".colum-1-beforehover").mouseleave(function() {
        $(".colum-1-beforehover").removeClass("colum-afterhover");
    });
//When hovering any item in the Column-2//
    $(".colum-2-beforehover").mouseenter(function() {
        $(".colum-2-beforehover").addClass("colum-afterhover");
    });
    $(".colum-2-beforehover").mouseleave(function() {
        $(".colum-2-beforehover").removeClass("colum-afterhover");
    });
//When hovering any item in the Column-3//
    $(".colum-3-beforehover").mouseenter(function() {
        $(".colum-3-beforehover").addClass("colum-afterhover");
    });
    $(".colum-3-beforehover").mouseleave(function() {
        $(".colum-3-beforehover").removeClass("colum-afterhover");
    });
//When hovering any item in the Column-4//
    $(".colum-4-beforehover").mouseenter(function() {
        $(".colum-4-beforehover").addClass("colum-afterhover");
    });
    $(".colum-4-beforehover").mouseleave(function() {
        $(".colum-4-beforehover").removeClass("colum-afterhover");
    });
//When hovering any item in the Column-5//
    $(".colum-5-beforehover").mouseenter(function() {
        $(".colum-5-beforehover").addClass("colum-afterhover");
    });
    $(".colum-5-beforehover").mouseleave(function() {
        $(".colum-5-beforehover").removeClass("colum-afterhover");
    });
//When hovering any item in the Column-6//
    $(".colum-6-beforehover").mouseenter(function() {
        $(".colum-6-beforehover").addClass("colum-afterhover");
    });
    $(".colum-6-beforehover").mouseleave(function() {
        $(".colum-6-beforehover").removeClass("colum-afterhover");
    });

    $(".name").hover(function() {
        console.log("working!");
        $(this).find(".recipe-text").toggle();
        $(this).find(".bg-img").toggle();
    });

    $(".name").hover(function() {
      $(this).find("h1").toggle();

    });


    $(".name").mouseenter(function() {
      $(this).removeClass("img-beforehover");
    });
    $(".name").mouseleave(function() {
      $(this).addClass("img-beforehover");
    });






//last item//
    $(".name-last").mouseenter(function() {
      $(".name-last").css("background-color","blue");
    });
    $(".name-last").mouseleave(function() {
      $(".name-last").css("background-color","black");
    });


//moble//


});
