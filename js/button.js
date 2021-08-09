$(document).ready(function (){

    var rotated = false;
$('#menuButton').click(function() {
  if (!rotated) {
    $('#menuButton').css({
      "transform": "rotate(45deg)"

    });
  } else {
    $('#menuButton').css({
      "transform": "rotate(90deg)"
    });
  }
  // Toggle the flag
  rotated = !rotated;
});



});