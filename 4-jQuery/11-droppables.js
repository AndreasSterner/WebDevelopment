console.log("test");

$(function() {
  $("#draggable").draggable({
  });

  $( "#droppable" ).droppable({
      drop: function( event, ui ) {
        console.log(event);
        alert("element dropped!");
      }
    });

});
