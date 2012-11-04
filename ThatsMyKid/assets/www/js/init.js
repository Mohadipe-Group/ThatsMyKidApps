THATSMYKID.init = function() {
	THATSMYKID.initialHeight = window.innerHeight / 2;
	THATSMYKID.initialWidth = window.innerWidth / 4;
	
	var fCanvas = document.getElementById("canvas1");
	
	fCanvas.style.width = THATSMYKID.initialWidth + "px";
	fCanvas.style.height = THATSMYKID.initialHeight + "px";
	// add touchlistener:
	document.addEventListener('touchmove', THATSMYKID.listener.touchListen, false);

};