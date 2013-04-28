
$(document).ready(function() {


    // Creates canvas 320 × 200 at 10, 50
    var paper = Raphael('holder', 400, 800);

    var path = "M 250 250 l 0 -10 l 10 0 l 0 -10 z";

    // Creates circle at x = 50, y = 40, with radius 10
    var path = paper.path(path);
    // Sets the fill attribute of the circle to red (#f00)
    path.attr("fill", "#f00");

    // Sets the stroke attribute of the path to white
    path.attr("stroke", "#000");
});
