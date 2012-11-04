THATSMYKID.calculations = {};

THATSMYKID.calculations.scaledSize = function(xCoord, width) {
	var windowWidth = window.innerWidth;
	var fraction = (windowWidth - xCoord) / windowWidth;
	var returnValue = width * fraction;
	return returnValue;
};

THATSMYKID.calculations.newCoords = function(xCoord, initialHeight) {
	var yCoord = window.innerHeight - (((window.innerHeight - initialHeight) / window.innerWidth) * xCoord) - initialHeight;
	return {x:xCoord, y:yCoord};
};