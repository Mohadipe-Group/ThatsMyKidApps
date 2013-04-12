function addElement() {
  removeEmptyPicture();
  var ni = document.getElementById('stage');
  
  var divClassName = 'picture';
  
  var numberOfPictures = document.getElementsByClassName(divClassName).length;

  var newdiv = document.createElement('div');

  newdiv.setAttribute('class', divClassName);
  
  var divIdName = divClassName + numberOfPictures;
  
  newdiv.setAttribute('id', divIdName);
  
  var divStyleContent = 'background-image:url(DSC_0437.JPG);background-size: Auto 100%;background-position:center;';
  newdiv.setAttribute('style', divStyleContent);

  ni.appendChild(newdiv);
  addEmptyPicture();
  return divIdName;
}

function removeEmptyPicture() {
  var ni = document.getElementById('stage');
  var emptydiv = document.getElementById('emptyPicture');
  ni.removeChild(emptydiv);
}

function addEmptyPicture() {
	var ni = document.getElementById('stage');

	var emptydiv = document.createElement('div');
	emptydiv.setAttribute('class', 'picture');
	emptydiv.setAttribute('id', 'emptyPicture');

	var img = document.createElement('img');
	
	img.setAttribute('id', 'fingerPicture');
	img.setAttribute('width', '60%');
	img.setAttribute('src', 'res/finger.png');
	
	emptydiv.appendChild(img);
	ni.appendChild(emptydiv);
	reInitPreferencesButton();
}

function ersetzeBackgroundImage(targetDiv, picUrl) {
	var divStyleContent = 'background-image:url(' + picUrl + ');background-size: Auto 100%;background-position:center;';
	targetDiv.setAttribute('style', divStyleContent);
}

function reInitPreferencesButton() {
	var preferencesButton = document.getElementById("emptyPicture");
	preferencesButton.addEventListener('touchstart', THATSMYKID.listener.preferencesButton, false);
}