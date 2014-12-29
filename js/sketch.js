paper.install(window);

window.onload = function() {
  paper.setup('my-canvas');

  // Background
    var background = new Path.Rectangle(view.bounds);
        background.fillColor = '#000';
    var circleArray = [];
  	


  	for (var i = 0; i < 50; i++) {
	  	var x,y;
	  	x = i * 50;
	  	y = i * 50;

	  	circleArray.push(new Path.Circle({
		
		  center: [x,y],
		  radius: 30,
		  strokeColor: 'red',
		  fillColor: 'green'

		}));

  	};

// Create a rectangle shaped path with its top left point at
// {x: 75, y: 75} and a size of {width: 75, height: 75}
var path = new Path.Rectangle({
	point: [75, 75],
	size: [75, 75],
	strokeColor: 'black'
});

function onFrame(event) {
	// Each frame, rotate the path by 3 degrees:
	path.rotate(3);
}

    paper.view.draw();

	// Animation
	paper.view.onFrame = function(event) {

	};
};