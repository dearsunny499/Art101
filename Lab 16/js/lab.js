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
    url: "http://worldtimeapi.org/api/timezone/America/Los_Angeles",
    success: function (data) {
      console.log(data.datetime);
      output.innerHTML = data.datetime;
    },
    error: function () {
      console.log("Fail Loading API");
      output.innerHTML = "Fail LA API";
    },
  });
});
