var xPlanes = {
  "X-1" : "First aircraft to break the sound barrier while flying level",
  "X-3" : "Testing for long duration high speed flights",
  "X-15" : "First manned hypersonic flight",
  "X-29" : "Forward-swept wing testbed",
  "X-31" : "Thrust vectoring supermaneuverability",
  "X-37" : "Reusible Earth Orbiting Spacecraft",
  "X-45" : "UCAV (unmanned combat air vehicle) demonstrator"
};

// Now that we have our array of planes, we need to add elements to our DOM
// for each one.
//This line is unfinished! Use a method to capture our <ul> element.
var e = document.getElementById("planes-list");

for (var s in xPlanes) {
e.innerHTML += "<div><h2>" + s + "</h2>" ;
e.innerHTML += "<p>" + xPlanes[s] + "</p>"
e.innerHTML += "<img src= 'Pictures/" + s + ".jpg' style = 'width:25%;height:25%'></div>"
}
