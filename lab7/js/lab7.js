*/

// sortUserName - a function that takes user input and sorts the letters
// of their sortUserName
function sortUserName() {
  var userName = window.prompt("Hi. Please tell me your name so I can fix it.");
  console.log("useName =", userName);
  // split string to array
  var nameArray = userName.split('');
  console.log("nameArray =", nameArray);
  // sort the array
  var nameArraySort - nameArray.sort();
  console.log("nameArraySort =", nameArraySort);
  //join array back to a string
  var nameSorted = nameArraySort.join('');
  console.log("nameSorted =", nameSorted);
  //Note that I could have done the above lines as a single line:
  //  userName.tolower().split("").sort()join("")
  return nameSorted;
}

//Output
document.writeln("oh hey, I've fixed your name: ",
    sortUserName(), "</br>");