console.log("test");

$(function() { // copied from jQueryUI official website
    $("#draggable1").draggable({
      axis: "x"
    });
    $("#draggable2").draggable({
      axis: "y"
    });
    $("#draggable3").draggable({
      containment: "#containment-wrapper"
    });
    $("#draggable4").draggable({
      containment: "#parent"
    });

});

$(function() {
    $("#resizable").resizable();
});
