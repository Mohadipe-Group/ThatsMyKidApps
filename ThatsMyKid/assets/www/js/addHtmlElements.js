function addElement() {
	console.log("In addElement: ");
  var ni = document.getElementById('stage');

  var numi = document.getElementById('anzBilder');

  var num = (document.getElementById('anzBilder').value -1)+ 2;

  numi.value = num;
  console.log("create Element: ");
  var newdiv = document.createElement('div');

  var divClassName = 'picture';

  newdiv.setAttribute('class', divClassName);
  
  var divIdName = 'picture' + num;
  
  newdiv.setAttribute('id', divIdName);
  
  var divStyleContent = 'background-image:url(DSC_0437.JPG);background-size: Auto 100%;background-position:center;';
  
  newdiv.setAttribute('style', divStyleContent);

//  newdiv.innerHTML = 'Element Number '+num+' has been added! <a href=\'#\' onclick=\'removeElement('+divIdName+')\'>Remove the div "'+divIdName+'"</a>';
  console.log("append Element: ");
  ni.appendChild(newdiv);

}