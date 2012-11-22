THATSMYKID.deviceready = function() {
	THATSMYKID.initialHeight = window.innerHeight / 2;
	THATSMYKID.initialWidth = window.innerWidth / 4;
	
	var fCanvas = document.getElementById("canvas1");
	
	fCanvas.style.width = THATSMYKID.initialWidth + "px";
	fCanvas.style.height = THATSMYKID.initialHeight + "px";
	// add touchlistener:
	fCanvas.addEventListener('touchmove', THATSMYKID.listener.touchListen, false);

	document.getElementById("text").innerHTML = "TestText";
	
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
	
	navigator.camera.getPicture(
            function(uri) {
            	console.log("XXXXX URI XXXXX " + uri)
                var img = document.getElementById('camera_image');
                img.style.visibility = "visible";
                img.style.display = "block";
                img.src = uri;
                document.getElementById('camera_status').innerHTML = "Success";
            },
            function(e) {
                console.log("Error getting picture: " + e);
                document.getElementById('camera_status').innerHTML = "Error getting picture.";
            },
            { quality: 10, destinationType: navigator.camera.DestinationType.FILE_URI, sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY}
            );
	
	window.webintent.getExtra(
		WebIntent.EXTRA_STREAM,
		function(url){
			document.getElementById("text").innerHTML = "Called URI-Callback";
			document.getElementById("text").innerHTML = "Uri: " + url;

		    var image = document.getElementById('myImage');
		    image.src = url;

		}, 
		function(error) {
			document.getElementById("text").innerHTML = "FEHLER: " + error.message;
		});
	
	document.getElementById("text").innerHTML = "End of Init Method";
};

THATSMYKID.init = function() {
	document.addEventListener("deviceready", THATSMYKID.deviceready, false);
	
};