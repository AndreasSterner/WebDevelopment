console.log("test"); //works

$("#circle").hover(function() {
  /* Stuff to do when the mouse enters the element */
  $("#circle").css('width', '250px');
  $("#circle").css('height', '250px');
  $("#circle").css('background-color', 'red');
}, function() {
  /* Stuff to do when the mouse leaves the element */
  $("#circle").css('width', '150px');
  $("#circle").css('height', '150px');
  $("#circle").css('background-color', 'green');
});

// $("#circle").click(function(event) {
//   /* Act on the event */
//   alert($("body").css('width'));
// });

$("div").click(function(event) {
  /* Act on the event */
  alert("You clicked on a " + $(this).attr('id'));
  // $(this).css('display', 'none'); // (this) is a keyword that makes javascript (not just jquery) able to recognise which element was clicked
});
