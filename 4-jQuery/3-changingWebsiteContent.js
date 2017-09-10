console.log("test"); //works

$("p").click(function(event) {

$("p").html("You clicked the paragraph")
alert($("p").html())

});

$("h1").hover(function() {
  /* Stuff to do when the mouse enters the element */
  $("h1").html("You're currently hovering your mouse over a heading")
}, function() {
  /* Stuff to do when the mouse leaves the element */
  $("h1").html("You stopped hovering over the heading")

});

$("iframe").hover(function() {
  /* Stuff to do when the mouse enters the element */
  $("iframe").attr('src', 'https://15mano.ssis.nu');
}, function() {
  /* Stuff to do when the mouse leaves the element */
  $("iframe").attr('src', 'https://15anst.ssis.nu');
});
