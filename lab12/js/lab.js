/*
 * Author: Yanyao Hu<yhu241@ucsc/edu>
 * Created: 12 May
 * License: Public Domain
*/

function sortingHat(str) {
  len = str.length;
  mod = len % 4;
  if (mod == 0) {
    return "Gryffindor";
  } else if (mod == 1) {
    return "Ravenclaw";
  } else if (mod == 2) {
    return "Slytherin";
  } else if (mod == 3) {
    return "Hufflepuff";
  }
}

function houseDescription(str) {
  if (str == "Gryffindor") {
    return "Gryffindor description here";
  } else if (str == "Ravenclaw") {
    return "Ravenclaw description here";
  } else if (str == "Slytherin") {
    return "Slytherin description here";
  } else if (str == "Hufflepuff") {
    return "Hufflepuff description is here";
  }
}

var myButtton = document.getElementById("button");
myButtton.addEventListener("click", function () {
  var name = document.getElementById("input").value;
  var house = sortingHat(name);
  var houseDescription = houseDescription(house);
  newText = "<p>The Sorting Hat has sorted you into " + house + "</p>";
  newText += "<p>" + houseDescription + "</p>";
  document.getElementById("output").innerHTML = newText;
});
