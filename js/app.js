$(document).ready(function() {

    var width = window.innerWidth;
    var height = window.innerHeight;
    var paper = Raphael('holder', width, height);

    var path = "M 0 " + height;

    var steps = data.length;
    for (var i = 0; i < steps; i++) {
        path = path + " l 0 -" + height/steps;
        path = path + " l " + width/steps + " 0";
    }

    console.log(path);

    var path = paper.path(path);
    // Sets the fill attribute of the circle to red (#f00)

    // Sets the stroke attribute of the path to white
    path.attr("stroke", "#000");
});
