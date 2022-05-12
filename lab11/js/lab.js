/*
 * Author: Yanyao Hu<yhu241@ucsc/edu>
 * Created: 12 May
 * License: Public Domain
*/

$("#C").append("<button id=badgg>Challenges");
$("#P").append("<button id=badggg>Problems");
$("#R").append("<button id=badgggg>Results");
$("#badgg").click(function(){
  $("#badggg").css("color","pink");
  $("#P").css("background-color","yellow");
});
$("#badggg").click(function(){
  $("#badgggg").css("color","green");
  $("#R").css("background-color","grey");
});
$("#badgggg").click(function(){
  $("#badgg").css("color","blue");
  $("#C").css("background-color","pink");
});
