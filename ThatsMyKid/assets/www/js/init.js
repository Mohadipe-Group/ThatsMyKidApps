THATSMYKID.deviceready = function() {
//	THATSMYKID.initialHeight = window.innerHeight / 2;
//	THATSMYKID.initialWidth = window.innerWidth / 4;
//	
//	var fCanvas = document.getElementById("canvas1");
//	
//	fCanvas.style.width = THATSMYKID.initialWidth + "px";
//	fCanvas.style.height = THATSMYKID.initialHeight + "px";
	// add touchlistener:
//	fCanvas.addEventListener('touchmove', THATSMYKID.listener.touchListen, false);

	var preferencesButton = document.getElementById("emptyPicture");
	preferencesButton.addEventListener('touchstart', THATSMYKID.listener.preferencesButton, false);
	
	var galleryButton = document.getElementById("galleryButton");
	galleryButton.addEventListener('touchstart', THATSMYKID.listener.chooseFromGallery, false);

	var galleryButton = document.getElementById("cameraButton");
	galleryButton.addEventListener('touchstart', THATSMYKID.listener.takeFromCamera, false);
	
//	document.getElementById("text").innerHTML = "VISITED: init";
//	console.log("VISITED: init");
//	window.webintent.getUri(function(url){
//		document.getElementById("text").innerHTML = "Called URI-Callback";
//		if (url !== "") {
//			document.getElementById("text").innerHTML = "URL ist: " + url;
//		}
//	}, 
//	function(error) {
//		document.getElementById("text").innerHTML = "FEHLER!!";
//	});
	

	
};

THATSMYKID.init = function() {
	document.addEventListener("deviceready", THATSMYKID.deviceready, false);
	
};