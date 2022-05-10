/*
 * Author: Yanyao Hu<yhu241@ucsc/edu>
 * Created: 9 May
 * License: Public Domain
*/

var nameField = document.getElementById('name');
var submitButton = document.getElementById('submit-button');
var outputText = document.getElementById("output");

function sortUserName() {
  var userName = window.prompt("Hi. Please tell me your name so I can fix it.");
  console.log("useName =", userName);
  // split string to array
  var nameArray = userName.split('');
  console.log("nameArray =", nameArray);
  // sort the array
  var nameArraySort = nameArray.sort();
  console.log("nameArraySort =", nameArraySort);
  //join array back to a string
  var nameSorted = nameArraySort.join('');
  console.log("nameSorted =", nameSorted);
  //Note that I could have done the above lines as a single line:
  //  userName.tolower().split("").sort()join("")
  return nameSorted;
}


submitButton.addEventListener('click', function(){
  var name = nameField.value;
  new1El = document.createElement("p");
  new1El.innerHTML = sortUserName(name);

  outputText.appendChild(new1El);
});
