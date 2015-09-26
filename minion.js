$(document).ready(function() {

    var s = Snap("#minion");

    var head = s.ellipse(400, 100, 60, 60);
    head.attr({
    	fill: "#F5E050"
    })
    var body = s.rect(340, 100, 120, 80);
    body.attr({
    	fill: "#F5E050"
    })


    // Eyes and glasses
    var eye = s.circle(400, 100, 24, 24);
    eye.attr({
    	fill: '#fff',
    	stroke: "#ccc",
    	strokeWidth: "5"
    })
    var eyeMiddle = s.circle(400, 100, 10, 10);
    eyeMiddle.attr({
    	fill: '#000',
    	stroke: "#49311c",
    	strokeWidth: "4"
    })

    var strap1 = s.rect(426	, 96, 34, 10);
    strap1.attr({
    	fill: "#000"
    })
    var strap2 = s.rect(340, 96, 34, 10);
    strap1.attr({
    	fill: "#000"
    })

    var eyes = s.group(eye, eyeMiddle, strap1, strap2);

});