THATSMYKID.Persistence = function() {

	// usage of cordova database:
	// http://docs.phonegap.com/en/2.5.0/cordova_storage_storage.md.html#Storage

	// is there already an instance?
	if (typeof Persistence.instance === "object") {
		return Persistence.instance;
	}

	function createDatabase(tx) {
		tx.execute('CREATE TABLE IF NOT EXISTS IMAGES (id unique, imageUrl)');
	}

	var db = window.openDatabase("ThatsMyKidDB", "0.1", "ThatsMyKid DataBase",
			10000);
	db.transaction(createDatabase, errorDB, successCB);

	// Transaction error callback
	//
	function errorCB(tx, err) {
		alert("Error processing SQL: " + err);
	}

	// Transaction success callback
	//
	function successCB() {
		alert("success!");
	}

	function saveImage(path) {
		db.transaction(saveUrl, errorCB, successCB);

		function saveUrl(tx) {
			tx.executeSql('INSERT INTO IMAGES (id, imageUrl) VALUES (1, '
					+ path + ')');
		}
	}

	function deleteImage(path) {
		db.transaction(deleteUrl, errorCB, successCB);

		function deleteUrl(tx) {
			tx.executeSql('DELETE FROM IMAGES where imageUrl=' + path);
		}
	}

	function loadImages(imagesLoaded) {
		db.transaction(deleteUrl, errorCB, successCB);

		function deleteUrl(tx) {
			tx.executeSql('select imageUrl FROM IMAGES');
		}
		
		
	}
	
};
