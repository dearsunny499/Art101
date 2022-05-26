/*
 * Author: Yanyao Hu<yhu241@ucsc/edu>
 * Created: 12 May
 * License: Public Domain
*/

var requestButton = document.getElementById("activate");
var output = document.getElementById("output");

requestButton.addEventListener("click", function () {
  $.ajax({
    type: "GET",
    url: "http://worldtimeapi.org/api/timezone/Europe/London",
    success: function (data) {
      console.log(data.datetime);
      output.innerHTML = data.datetime;
    },
  });
});
