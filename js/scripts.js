$(document).ready(function(){
  $('#triangle').submit(function(event) {
  event.preventDefault();

  var side1 = parseInt($('input#side1').val());
  var side2 = parseInt($('input#side2').val());
  var side3 = parseInt($('input#side3').val());

  if(side1 && side2 && side3) {
    if(side1 === side2 && side2 === side3) {
      $('#output').val('equilateral');
  } else if(side1 === side2 || side1 === side3 || side2 === side3) {
      $('#output').val('Isosceles');
  } else {
    if (side1 + side2 <= side3 || side1 + side3 <= side2 || side2 + side3 <= side1){
      $('#output').val('Scalene');
    } else {
      $('#output').val('not a triangle');
    }
  }
  } else {
    alert('Please enter value for all sides!')

  }
    $("#output").text("your triangle is " + $('#output').val() + "!");

});
});
