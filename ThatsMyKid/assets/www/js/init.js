THATSMYKID.deviceready = function() {

	THATSMYKID.Persistence.init();
	
	THATSMYKID.Persistence.loadImages();
	
	var preferencesButton = document.getElementById("emptyPicture");
	preferencesButton.addEventListener('touchstart', THATSMYKID.listener.preferencesButton, false);
	
	var galleryButton = document.getElementById("galleryButton");
	galleryButton.addEventListener('touchstart', THATSMYKID.listener.chooseFromGallery, false);

	var galleryButton = document.getElementById("cameraButton");
	galleryButton.addEventListener('touchstart', THATSMYKID.listener.takeFromCamera, false);
	
};

THATSMYKID.displayExistingPictures = function(tx, results) {
	for ( var int = 0; int < results.rows.length; int++) {
		addElement(results.rows.item(int).imageUrl);
	}
};

THATSMYKID.init = function() {
	document.addEventListener("deviceready", THATSMYKID.deviceready, false);
};