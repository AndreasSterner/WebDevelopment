document.getElementById('updateText').onclick = function() {

  var newText = "";

  newText = document.getElementById('inputText').value;

  alert(newText);

  document.getElementById('text').innerHTML = newText;

}
