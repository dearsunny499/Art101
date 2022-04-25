/*
 * Author: Yanyao Hu <yhu241@ucsc.edu>
 * Created: 24 April
 * License: Public Domain
*/

// Define Variables
myTransport = ["Volksagen Beetle", "bus", "ride with friends", "Uber" ];

myMainRide ={
  make : "Volksagen",
  model : "Beetle",
  color : "Blue",
  year : 2010,
  age : function() {
      return 2022 - age;
  }
}

// output
document.writeln("Kinds of transportation I use: ", myTransport, "</br>" );
document.writeln("my MainRide: <pre>", JSON.stringify(myMainRide, null, '\t'), "</pre>");
