$(document).ready(function(){
  $('#triangle').submit(function(event) {
  event.preventDefault();

  var side1 = parseInt($('input#side1').val());
  var side2 = parseInt($('input#side2').val());
  var side3 = parseInt($('input#side3').val());

  if(side1 && side2 && side3) {
    if(side1 === side2 && side2 === side3) {
      $('#output').val('equilateral');
  }
}
  if

    $("#output").text("your triangle is " + $('#output').val() + "!");


});
});
