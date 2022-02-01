$(document).ready(function() {
  console.log( 'готов!' );
});
$(document).ready(function() {
  $("#demo").html("hi")
});
$(document).ready(function(){
  $("div").click(function(){
    $(this).toggleClass("black");
  });
});
$(document).ready(function(){
$("div").click(function(){
$(this).css({
  width: function(index, value) {
    return parseFloat (value) +100;
  }
});
$(this).css({
  height: function(index, value) {
    return parseFloat (value) +100;
  }
});
});
});
$(document).ready(function() {
  $(".grey, .blue").click(function(){
    $(".blue, .hidden").removeClass("blocker");
    setTimeout(function(){
      $(".blue").toggleClass("hidden");
    },1);
    setTimeout(function(){
      $(".blue").addClass("blocker");
    },300);
  });
  $(".pink").click(function(){
    if ($(".pink").hasClass("rounder")){
      $(".grey").toggleClass("hidden");
    }
  $(this).toggleClass("rounder");
});
});
