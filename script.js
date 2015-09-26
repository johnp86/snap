
// First lets create our drawing surface out of existing SVG element
// If you want to create new surface just provide dimensions
// like s = Snap(800, 600);
var s = Snap("#svg");
var stage = document.getElementById('svg');
//var animating = true;

//colours
var sky = "#bbdfe5"

// set main background color
stage.style.backgroundColor = sky;


// grass
var grass = s.rect(0, 400, 600, 200);
grass.attr({
    fill: '#74a46d'
});

// road
var road = s.rect(0, 450, 600, 120);
road.attr({
    fill: '#666'
});

var roadMarking = s.rect(10,10,60,16).attr({fill:'#fff'}).pattern(0,0,120,16).transform('skewX(-20)');

var roadMarkings = s.rect(0, 500, 600, 14);
roadMarkings.attr({
    fill: roadMarking
});

// trees
Snap.load("tree.svg", onSVGLoaded ) ;

function onSVGLoaded( data ){ 
    var trees = s.append( data );
    trees.transform("t200,100");
}

// var trees = s.rect(0, 450, 600, 120);

/**
  path is the path we wish with to animate along
  element is the element we want to animate
  start is the frame we wish to start the animation on
  dur is the duration in milliseconds
  callback is a function we wish to call once the animation has finished
**/
// animateAlongPath = function (path, element, start, dur, callback) {
//   // Get the path length, so we know how many frames we will animate over
//   var len = Snap.path.getTotalLength(path);

//   roadMarkings.animate(start, len, function (value) {
//     // movePoint gets the path attributes at a certain frame
//     var movePoint = Snap.path.getPointAtLength(path, value);

//     // applies the attributes to our element
//     element.attr({ cx: movePoint.x, cy: movePoint.y });
//   }, dur, mina.easeinout, function () {
//     callback(path);
//   });
// };


//animation
// function animOn(){
//     roadMarkings.animate({
//       opacity: '1', 
//     }, 1000, animOut);
// }

// function animOut() {
//   roadMarkings.animate({
//       opacity: '0.3',
//    }, 1000, animOn);
// };
// animOn()