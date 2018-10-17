var add = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};

$(document).ready(function() {
  $("form#add").submit(function(event) {
  event.preventDefault();
  var number1 = parseInt($("#add1").val());
  var number2 = parseInt($("#add2").val());
  var result = add(number1,number2);
  $("#output").text(result);
  });
});

$(document).ready(function() {
  $("form#sub").submit(function(event) {
  event.preventDefault();
  var number1 = parseInt($("#add1").val());
  var number2 = parseInt($("#add2").val());
  var result2 = subtract(number1,number2);
  $("#suboutput").text(result2);
  });
});

$(document).ready(function() {
  $("form#mul").submit(function(event) {
  event.preventDefault();
  var number1 = parseInt($("#add1").val());
  var number2 = parseInt($("#add2").val());
  var result3 = multiply(number1,number2);
  $("#muloutput").text(result3);
  });
});

$(document).ready(function() {
  $("form#div").submit(function(event) {
  event.preventDefault();
  var number1 = parseInt($("#add1").val());
  var number2 = parseInt($("#add2").val());
  var result4 = divide(number1,number2);
  $("#divoutput").text(result4);
  });
});
