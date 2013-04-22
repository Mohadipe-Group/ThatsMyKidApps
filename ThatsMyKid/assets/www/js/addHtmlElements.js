function addElement(url) {
  var appBody = document.getElementById('stage');
  
  var divClassName = 'picture';
  
  var numberOfPictures = document.getElementsByClassName(divClassName).length;

  var newdiv = document.createElement('div');

  newdiv.setAttribute('class', divClassName);
  
  var divIdName = divClassName + numberOfPictures;
  
  newdiv.setAttribute('id', divIdName);
  
  var divStyleContent = 'background-image:url(' + url + ');background-size: Auto 100%;background-position:center;';
  newdiv.setAttribute('style', divStyleContent);

  appBody.insertBefore(newdiv, document.getElementById('emptyPicture'));
    
  addTouchListeners(newdiv);
  
  return divIdName;
}

function addTouchListeners(newdiv) {
	var touched = false;
	newdiv.addEventListener('click', function(e)
	{
	    touched = false;
	});
	newdiv.addEventListener('touchstart', function(e){
	    touched = true;
	    setTimeout(function(){
	        if (touched)
	        	THATSMYKID.listener.pictureEditButton(e);
	    },1000);
	});
	newdiv.addEventListener('touchmove', function(e){
	    touched = false;
	});
	newdiv.addEventListener('touchend', function(e){
	    touched = false;
	});
}