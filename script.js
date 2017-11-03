
$(function (event) {
  console.log('DOM is ready');



//start of the game
$(function playGame() {

//variables for the game
var player1 = player1();
var player2 = player2();
var win = winner();

});

//displays x
$(function player1(player1) {
 $('td').click(function(){
   $(this).html('x')
 })
})

 //displays o in function play2
$(function player2() {
 $('td:odd').click(function(){
   // console.log("I've been clicked");
   $(this).html('o');
 })
});

//reset button
$('#reset').click(function(){

});



function winner(symbol) {
  //array that holds information about the winning boxes
  var array = [[0,1,2],[3,4,5],[6,7,8],[0,4,8],[0,3,6],[6,4,2],[1,4,7],[2,5,8]];

  if($('#0').hasClass(symbol) && $('#1').hasClass(symbol) && $('#2').hasClass(symbol))
  {
    return true;
  }
  else if ($('#3').hasClass(symbol) && $('#4').hasClass(symbol) && $('#5').hasClass(symbol)){
    return true;
  }
  else if ($('#6').hasClass(symbol) && $('#7').hasClass(symbol) && $('#8').hasClass(symbol))
  {
    return true;
  }
  else if ($('#0').hasClass(symbol) && $('#3').hasClass(symbol) && $('#6').hasClass(symbol))
  {
    return true;
  }
  else if ($('#1').hasClass(symbol) && $('#4').hasClass(symbol) && $('#7').hasClass(symbol)){
    return true;
  }
  else if ($('#2').hasClass(symbol) && $('#5').hasClass(symbol) && $('#8').hasClass(symbol))
  {
    return true;
  }
  else false;
}

// //var box = $(this);
//     if(td.hasClass('x') || box.hasClass('o')){
//       alert('This has been selected');
//     } else {
//       if(player === 1){
//         td.addClass('x');
//           if (winner('x')){
//             alert("Congrats" + player1 + "wins")
//           }else {
//             player = 2;
//           }
//         }
//           else {
//             if(player2 === 2){
//               td.addClass('o');
//                 if (winner('0')){
//                   alert("Congrats" + player2 + "wins")
//
//          }


playgame();


});
// if (array === true) {
// $.each(array, function() {
//   console.log("win");
//   // else {
//   //   console.log("lose");
//   // }
// })
// }

// $.each(yourObject, function( index, value ) {
//     console.log(value.values);
//     console.log(value.input);
// });

// function winCase() {
//   switch (win) {
//     case expression:
//
//       break;
//     default:
//
//   }
// }
//
//
// winCase();
