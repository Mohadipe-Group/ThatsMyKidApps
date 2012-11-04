     
        var onDeviceReady = function() {
        	window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, success, fail);
//             document.getElementById("devready").innerHTML = "OnDeviceReady fired.";
//             var parentEntry = new DirectoryEntry("sdcard", "file:///mnt/sdcard/);
//             var URL = parentEntry.toURL();
//             document.getElementById("testspan").innerHTML = URL;
            
        };

        function success(fileSystem) {
        	document.getElementById("devready").innerHTML = "Your filesystem is: " + fileSystem.root.name;
        	var currentDir = fileSystem.root;
//         	directoriesString = "";
        	listFiles(currentDir, "");
        	document.getElementById("devready").innerHtml = directoriesString;
        }
        
        var directoriesString = "";
        
        function listFiles(directoryEntry) {
        	setStatus("Listing files in " + directoryEntry.name);
        	var directoryReader = directoryEntry.createReader();
        	directoryReader.readEntries(readSuccess, fail);
        }

        function readSuccess(entries) {
        	for (i = 0; i < entries.length; i++) {
        		setStatus("Checking entry " + entries[i].name);
        		if (entries[i] instanceof DirectoryEntry) {
        			setStatus(entries[i].name + " is a directory");
            		listFiles(entries[i]);	
        		}
        		setStatus("Listing entries in " + entries[i].name)
        		var lastThreeLetters = entries[i].name.substring(entries[i].name.length-3, entries[i].name.length);
         		if (entries[i] instanceof FileEntry && (lastThreeLetters == "jpg")) {
            		directoriesString += "<img width=\"80%\" alt=\"Ein Bild\" src=\"" + entries[i].toURL() + "\"/><br/>";	
        		}
        		setStatus("current file list " + directoriesString);
        	}
        }
        
        function fail(error) {
        	document.getElementById("devready").innerHTML = "An error occurred: " + error.code;
        }

        function setStatus(status) {
        	document.getElementById("status").innerHTML = status;
        }
        
        function init() {
            document.addEventListener("deviceready", onDeviceReady, true);
            Window
        }   