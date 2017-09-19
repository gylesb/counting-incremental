$(document).ready(function() {
  $ ("#formOne").submit(function(event) {
    debugger;
    var number1 = parseFloat($("#countTo").val());
    var number2 = parseFloat($("#countBy").val());
    var numbers = [number1, number2];
    var count = [];
    for (var i = 0; i < numbers; i += 1) {
      if (numbers[i] == " " || numbers[i] == NaN || numbers[i] <= 0 || number2 > number1) {
        alert('ERROR');
      }
    }
    for (var index = number2; index <= number1; index += number2) {
      count.push(index);
    }
    alert(count);

    event.preventDefault();
  });

});
