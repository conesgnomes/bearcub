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

$(function () {
  $("button").click(function() {
    $("body").toggleClass("black-background");
  });
});

$(function () {
  $("#yellow-bg").click(function() {
    $("#yellow-bg").toggleClass("highlight");
  });
});

$(function () {
  $("#yellow-bg").click(function() {
    $("#yellow-bg").toggleClass("black-highlight");
  });
});
