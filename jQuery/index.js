document.querySelector("h1").style.color = "red";

$("div h1").css("color", "green");

$("body h1").addClass("big-title");
// $("body div h1").removeClass("big-title");
// console.log($("div h1").hasClass("big-title"))
// $("body button").text("Don't click me!");
// $("body").keypress(function(event){
//     $("div h1").html(event.key);
// });

$("input").keypress(function(event){
    console.log(event.key);
})

$("button").on("click", function(){
   // $("h1").toggle();
   // $("h1").hide();

//    $("h1").fadeOut();
//    $("h1").fadeIn();

   // $("h1").slideUp();  
   //$("h1").slideToggle();
   $("h1").slideUp().slideDown().animate({opacity: 0.3, margin: "1em"}); 
})
