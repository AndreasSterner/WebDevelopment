console.log("test");

$("div").click(function(event) {
  /* Act on the event */
  $(this).fadeOut('slow', function() {

  });
});

// Dont judge the terrible css
$(".button").click(function(event) {
  /* Act on the event */
  $("#fadeThis").fadeOut('slow', function() {
  $("#hidden").fadeIn('slow', function() {
    $("#hidden").html("Such terrible fade")
    });
  });
});
