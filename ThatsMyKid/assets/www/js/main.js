function init() {
	var initialHeight = window.innerHeight / 2;
	var initialWidth = window.innerWidth / 4;
	
	var fCanvas = document.getElementById("canvas1");
	
	fCanvas.style.width = initialWidth + "px";
	fCanvas.style.height = initialHeight + "px";
	
	console.log(document);
	// maybe the canvas-solution is faster, than the div-thing... so keep this code
//	var fContext = fCanvas.getContext("2d");
//	var fImage = document.getElementById("testimg1");
//	fImage.onload = function() {
//		fContext.drawImage(fImage, 0, 0, initialWidth, initialHeight);
//		fImage.style.display = 'none';
//	};
	// fCanvas.style.opacity = 0.8;

	function scaledSize(xCoord, width) {
		var windowWidth = window.innerWidth;
		var fraction = (windowWidth - xCoord) / windowWidth;
		var returnValue = width * fraction;
		return returnValue;
	}
	
	function newCoords(xCoord) {
		var yCoord = window.innerHeight - (((window.innerHeight - initialHeight) / window.innerWidth) * xCoord) - initialHeight;
		return {x:xCoord, y:yCoord};
	}

	// add touchlistener:
	document.addEventListener('touchmove', function(event) {
		event.preventDefault();
		var touch = event.touches[0];
		var myImage = document.getElementById("canvas1");
		var myComputedImageStyle = window.getComputedStyle(myImage);
		console.log("left-Value: " + myComputedImageStyle.getPropertyValue('left'));
		var myImageStyle = myImage.style;
		myImageStyle.removeProperty("bottom");
		// move image to the upper right
		myImageStyle.left = newCoords(touch.pageX).x + "px";
		myImageStyle.top = newCoords(touch.pageX).y + "px";
		// scale image smaller when moved right
		myImageStyle.width = scaledSize(touch.pageX, initialWidth) + "px";
		myImageStyle.height = scaledSize(touch.pageX, initialHeight) + "px";
	}, false);

};