//back-end
var results;
var outputArray = [];
var numeral = function(numeralInput) {
inputArray = numeralInput;
//alert(inputArray);

var pingPong = ["ping", "pong", "ping-pong"];
//number check
if (numeralInput < 1) {
  alert("We can't play )-:");
  } else {
//  alert("got a number");
} //end of number check

for (var index = 1; index <= numeralInput; index++) {
  if (index % 3 === 0 && index % 5 === 0) {
    outputArray.push(pingPong[2]);
    } else if (index % 5 === 0) {
    outputArray.push(pingPong[1]);
    }
    else if (index % 3 === 0) {
    outputArray.push(pingPong[0]);
    } else {
    outputArray.push(index)
    }
    //alert(outputArray);
  }
//alert(outputArray);
  for (var i = 0; i < outputArray.length; i++)
   $("#result").append(outputArray[i] + ",<br>");
  //results = outputArray.toString();
};

//UI

$(document).ready(function() {
  $("form#numeral").submit(function(event) {
    event.preventDefault();
    var numeralInput = $("input#numeral").val();
    var result = numeral(numeralInput);
    $("#result").text(results);
    $("#result").show();
    // console.log(outputFinal);

  });
});
