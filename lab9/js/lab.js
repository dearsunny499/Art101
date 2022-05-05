/*
 * Author: Yanyao Hu<yhu241@ucsc/edu>
 * Created: 5 May
 * License: Public Domain
*/

outputEl = document.getElementById("output");

console.log(outputEl);

new1El = document.createElement("p");

new1El.innerHTML = "Something";

new2El = document.createElement("p");

new2El.innerHTML = "Something else";

outputEl.appendChild(new1El);
outputEl.appendChild(new2El);

document.getElementById("bg").style.color = "red";

document.getElementById("wg").style.color = "blue";
