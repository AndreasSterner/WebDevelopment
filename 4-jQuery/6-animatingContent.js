console.log("test"); // works

$("#circle").hover(function() {
  /* Stuff to do when the mouse enters the element */
  $("#circle").css('background-color', 'blue');
}, function() {
  /* Stuff to do when the mouse leaves the element */
  $("#circle").css('background-color', 'green');
});

$("#circle").animate( {
  width: "400px",
  height: "400px",
}, 2000, function() {
  $(this).css('background-color', 'red');
})
// $("#circle").animate({height: "400px"}, 2000)
