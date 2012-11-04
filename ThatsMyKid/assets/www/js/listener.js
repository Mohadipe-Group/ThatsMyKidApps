THATSMYKID.listener = {};

THATSMYKID.listener.touchListen = function(event) {
	event.preventDefault();	
	
	var touch = event.touches[0];
	var myImage = document.getElementById("canvas1");
	var myImageStyle = myImage.style;
	var calc = THATSMYKID.calculations;
	
	myImageStyle.removeProperty("bottom");
	// move image to the upper right
	myImageStyle.left = calc.newCoords(touch.pageX, THATSMYKID.initialHeight).x + "px";
	myImageStyle.top = calc.newCoords(touch.pageX, THATSMYKID.initialHeight).y + "px";
	// scale image smaller when moved right
	myImageStyle.width = calc.scaledSize(touch.pageX, THATSMYKID.initialWidth) + "px";
	myImageStyle.height = calc.scaledSize(touch.pageX, THATSMYKID.initialHeight) + "px";
};

// maybe the canvas-solution is faster, than the div-thing... so keep this code
//var fContext = fCanvas.getContext("2d");
//var fImage = document.getElementById("testimg1");
//fImage.onload = function() {
//	fContext.drawImage(fImage, 0, 0, initialWidth, initialHeight);
//	fImage.style.display = 'none';
//};
// fCanvas.style.opacity = 0.8;