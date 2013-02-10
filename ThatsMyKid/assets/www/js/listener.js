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

THATSMYKID.listener.preferencesButton = function(event) {
	if ("visible" === document.getElementById("actionSelector").style.visibility) {
		THATSMYKID.listener.hidePreferences();
	} else {
		THATSMYKID.listener.showPreferences();
	}
};

THATSMYKID.listener.chooseFromGallery = function(event) {
	navigator.camera
			.getPicture(
					function(uri) {
						// console.log("XXXXX URI XXXXX " + uri);
						var img = document.getElementById('importPic');
						img.style.visibility = "visible";
						img.style.display = "block";
						img.src = uri;
						// document.getElementById('camera_status').innerHTML =
						// "Success";
					},
					function(e) {
						console.log("Error getting picture: " + e);
						document.getElementById('camera_status').innerHTML = "Error getting picture.";
					},
					{
						quality : 10,
						destinationType : navigator.camera.DestinationType.FILE_URI,
						sourceType : navigator.camera.PictureSourceType.PHOTOLIBRARY
					});
	THATSMYKID.listener.hidePreferences();
};

THATSMYKID.listener.takeFromCamera = function(event) {
	navigator.camera
			.getPicture(
					function(uri) {
						// console.log("XXXXX URI XXXXX " + uri);
						var img = document.getElementById('importPic');
						img.style.visibility = "visible";
						img.style.display = "block";
						img.src = uri;
						// document.getElementById('camera_status').innerHTML =
						// "Success";
					},
					function(e) {
						console.log("Error getting picture: " + e);
						document.getElementById('camera_status').innerHTML = "Error getting picture.";
					},
					{
						quality : 10,
						destinationType : navigator.camera.DestinationType.FILE_URI,
						sourceType : navigator.camera.PictureSourceType.CAMERA
					});
	THATSMYKID.listener.hidePreferences();
};

THATSMYKID.listener.showPreferences = function() {
	document.getElementById("actionSelector").style.visibility = "visible";
};

THATSMYKID.listener.hidePreferences = function() {
	document.getElementById("actionSelector").style.visibility = "hidden";
};

// maybe the canvas-solution is faster, than the div-thing... so keep this code
//var fContext = fCanvas.getContext("2d");
//var fImage = document.getElementById("testimg1");
//fImage.onload = function() {
//	fContext.drawImage(fImage, 0, 0, initialWidth, initialHeight);
//	fImage.style.display = 'none';
//};
// fCanvas.style.opacity = 0.8;