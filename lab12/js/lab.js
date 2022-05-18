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
    return "Gryffindor represents courage and bravery.";
  } else if (str == "Ravenclaw") {
    return "Ravenclaw represents intelligent and witty";
  } else if (str == "Slytherin") {
    return "Slytherin represents ambitious and cunning";
  } else if (str == "Hufflepuff") {
    return "Hufflepuff represents patient and hard-working";
  }
}

var myButtton = document.getElementById("button");
myButtton.addEventListener("click", function () {
  var name = document.getElementById("input").value;
  var house = sortingHat(name);
  var hd = houseDescription(house);
  newText = "<p>The Sorting Hat has sorted you into " + house + "</p>";
  newText += "<p>" + hd + "</p>";
  document.getElementById("output").innerHTML = newText;
});
