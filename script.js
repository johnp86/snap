
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

var sn = Snap('.snap'),

path = sn.select('.roadPath'),
roadMove = roadMarking,
treeMove = s.select('#XMLID_13_'),
animationRoad,
animationTrees,
animateAlongPath;

animationRoad = function () {
    roadMove.transform('t0,0');
    animateAlongPath(path, roadMove, 0, 300, animationRoad);
};
animationTrees = function () {
    treeMove.transform('t0,-120');
    animateAlongPath(path, treeMove, 0, 500, animationTrees);

};

animateAlongPath = function (path, el, start, duration, easing, callback) {
  var len = Snap.path.getTotalLength(path), 
      elBB =  el.getBBox(),
      elCenter = {
        x: elBB.x + (elBB.width / 2),
        y: elBB.y + (elBB.height / 2),
      };

    Snap
      .animate(start, len, function (value) {
      var movePoint = Snap.path.getPointAtLength(path, value);
      el.transform('t'+ (movePoint.x - elCenter.x) + ',' + (movePoint.y - elCenter.y));
    }, duration, easing, function () {
      if (callback) callback(path);
    });
};

animationRoad();
animationTrees();

