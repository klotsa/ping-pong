//back-end
// var numeral = function(numeralInput) {
// if (numeral < 1) {
//   alert("We can't play )-:");
//   } else {
//   alert("Y");
//   }
//
// };


var numeral = function(numeralInput) {
var numeralInput = 7; //test, replace below:
//inputArray = numeralInput;
alert(inputArray);
var inputArray = [];
var outputArray = [];
var pingPong = ["ping", "pong", "ping-pong"];
//number check
if (numeralInput < 1) {
  alert("We can't play )-:");
  } else {
  alert("got a nimber");
} //end of number check

//
// for (var index = 1; index <= numeralInput; index += 1) {
//  if (index % 3 === 0) {
//  alert("ping");
//  } else {
//  alert(index);
//  }
};



//UI

$(document).ready(function() {
  $("form#numeral").submit(function(event) {
    event.preventDefault();
    var numeralInput = $("input#numeral").val();
    // alert(numeralInput);
//
//
//     if (numeralInput < 1) {
//       alert("We can't play )-:");
//       } else {
//       alert("Y");
//       }
//
    var result = numeral(numeralInput);
//     // $("#result").text(outputFinal);
    $("#result").show();
//     // console.log(outputFinal);
//     // $("#noresult").text(result);
  });
});
