//back-end



var numeral = function(numeralInput) {
//var numeralInput = 7; //test, replace below:
inputArray = numeralInput;
alert(inputArray);
var inputArray = [];
var outputArray = [];
var pingPong = ["ping", "pong", "ping-pong"];
//number check
if (numeralInput < 1) {
  alert("We can't play )-:");
  } else {
//  alert("got a nimber");
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
  }
  alert(outputArray);
};



//UI

$(document).ready(function() {
  $("form#numeral").submit(function(event) {
    event.preventDefault();
    var numeralInput = $("input#numeral").val();
 
    var result = numeral(numeralInput);
//     // $("#result").text(outputFinal);
    $("#result").show();
//     // console.log(outputFinal);
//     // $("#noresult").text(result);
  });
});
