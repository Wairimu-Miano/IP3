$(document).ready(function(){
  $(".fig1").click(function(){
    $(this).hide()
    $("#description1").show();
  });
  $("#description1").click(function(){
    $(this).hide()
    $(".fig1").show();
  });
  $(".fig2").click(function(){
    $(this).hide()
    $("#description2").show();
  });
  $("#description2").click(function(){
    $(this).hide()
    $(".fig2").show();
  });
  $(".fig3").click(function(){
    $(this).hide()
    $("#description3").show();
  });
  $("#description3").click(function(){
    $(this).hide()
    $(".fig3").show();
  });
});
