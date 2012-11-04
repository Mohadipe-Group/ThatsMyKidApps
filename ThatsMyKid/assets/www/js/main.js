function init() {
	var initialHeight = window.innerHeight / 2;
	var initialWidth = window.innerWidth / 4;
	
	// console.log("Available Height: " + window.screen.availHeight);
	// console.log("Available Width: " + window.screen.availWidth);
	// console.log("Height: " + window.screen.height);
	// console.log("Width: " + window.screen.width);
	// console.log("Inner Height: " + window.innerHeight);
	// console.log("Inner Width: " + window.innerWidth);
	var fCanvas = document.getElementById("canvas1");
	
	fCanvas.style.width = initialWidth + "px";
	fCanvas.style.height = initialHeight + "px";
	
	console.log(document);
	var fContext = fCanvas.getContext("2d");
	var fImage = document.getElementById("testimg1");
//	fImage.onload = function() {
		fContext.drawImage(fImage, 0, 0, initialWidth, initialHeight);
		fImage.style.display = 'none';
//	};
	// fCanvas.style.opacity = 0.8;

	function scaledSize(xCoord, width) {
		var windowWidth = window.innerWidth;
		var fraction = (windowWidth - xCoord) / windowWidth;
		var returnValue = width * fraction;
		return returnValue;
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
		console.log("touch.pageY: " + touch.pageY);
		myImageStyle.top = touch.pageY + "px";
		myImageStyle.left = touch.pageX + "px";
		// var oldWidth;
		// var oldHeight;
		// if (myImageStyle.getPropertyValue("width") !== null) {
		// oldWidth = parseInt(myImageStyle.getPropertyValue("width"), 10);
		// oldHeight = parseInt(myImageStyle.getPropertyValue("height"), 10);
		// } else {
		// oldWidth = 400;
		// oldHeight = 200;
		// }
		myImageStyle.width = scaledSize(touch.pageX, initialWidth) + "px";
		myImageStyle.height = scaledSize(touch.pageX, initialHeight) + "px";
	}, false);

};