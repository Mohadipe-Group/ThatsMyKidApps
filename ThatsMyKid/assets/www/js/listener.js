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
	THATSMYKID.listener.toggleVisibility("actionSelector");
};

THATSMYKID.listener.pictureEditButton = function(event) {
	THATSMYKID.listener.toggleVisibility("editSelector");
};

THATSMYKID.listener.toggleVisibility = function(divName) {
	if ("visible" === document.getElementById(divName).style.visibility) {
		THATSMYKID.listener.hideEdit(divName);
	} else {
		THATSMYKID.listener.showEdit(divName);
	}
};

THATSMYKID.listener.chooseFromGallery = function(event) {
	navigator.camera
			.getPicture(
					function(uri) {
						var imgDivId = addElement(uri);
						var img = document.getElementById(imgDivId);
						img.style.visibility = "visible";
						img.style.display = "block";
						THATSMYKID.Persistence.saveImage(uri);
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
						var imgDivId = addElement(uri);
						var img = document.getElementById(imgDivId);
						img.style.visibility = "visible";
						img.style.display = "block";
					},
					function(e) {
						console.debug("Error getting picture: " + e);
						document.getElementById('camera_status').innerHTML = "Error getting picture.";
					},
					{
						quality : 10,
						destinationType : navigator.camera.DestinationType.FILE_URI,
						sourceType : navigator.camera.PictureSourceType.CAMERA
					});
	THATSMYKID.listener.hidePreferences();
};

THATSMYKID.listener.showEdit = function(divName) {
	document.getElementById(divName).style.visibility = "visible";
};

THATSMYKID.listener.hideEdit = function(divName) {
	document.getElementById(divName).style.visibility = "hidden";
};