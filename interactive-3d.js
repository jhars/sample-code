var canvas = document.getElementById("clickCanvas");
var ctx = canvas.getContext("2d");

var image = new Image()
image.src = '../images/cascadeR.png';

var frames = 36;
var bottomFrame = 0;
var currentFrame;
var currentFrame = bottomFrame;
var click = false;
var width = 200;
var height = 200;
var B;

ctx.clearRect(0, 0, width, height);
ctx.drawImage(image, 0, height * currentFrame, width, height, 0, 0, width, height);

function initControl() {
	var X = [];
	var DELTA; 
	var ALPHA;
	canvas.addEventListener("mousedown", doMouseDown, false);

	function doMouseDown (event) {
		canvas.addEventListener("mousemove",mouseX, false);
		document.body.addEventListener("mouseup", mouseUp, false);
		X[0] = event.pageX;//set initial X == currentMouse Location
	};	

	function mouseUp(event) {
	  canvas.removeEventListener("mousemove",mouseX, false);
	  console.log("alpha2 -> " + ALPHA2);
	};

	function mouseX (event) {
	    // event.preventDefault();
	    var canvasX = event.pageX;
	    X[1] = canvasX;
	  	A = ALPHA;
	  	var DIFF = X[0] - X[1];
	  	ALPHA = Math.abs(DIFF);
	  	B = ALPHA;
	  	console.log("A - B = " + (A - B));
	  			if (A < B){
	  	  		// ALPHA++;
	  	  		if (currentFrame > frames ) {
	  	  			currentFrame = bottomFrame;
	  	  		} currentFrame++;
	  	  	} console.log("currentFrame1 = " + currentFrame)
	  	  	if (A > B) {
	  	  		if (currentFrame < bottomFrame ) {//or TRY 1 here...> see helmetLoop
	  	  			currentFrame = frames;
	  	  		} currentFrame--;

	  	  		console.log("ALPHA06 =>" + ALPHA);
	  	  	} console.log("currentFrame2 = " + currentFrame)

	  	  	var ALPHA2 = ALPHA;	

	  	  	console.log("currentFrame3 = " + currentFrame)
	  	  	console.log("ALPHA##2 => " + ALPHA);
	  	  	
	  	  	ctx.clearRect(0, 0, width, height);
	  	  	ctx.drawImage(image, 0, height * currentFrame, width, height, 0, 0, width, height);
	  	  	console.log("alpha2 -> " + ALPHA2);
	  	  	//RESETS COORDINATES
	  	  	X[1] = X[0];////

	}

}