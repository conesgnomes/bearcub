$(function() {
  $(".clickable").click(function() {
    $("#bear-showing").slideToggle();
    $("#bear-hidden").slideToggle();
  });
});

$(function() {
  $(".info-click").click(function() {
    $("#info-showing").fadeToggle();
  });
});

$(function() {
  $(".danger-click").click(function() {
    $("#danger-showing").fadeToggle();
  });
});
