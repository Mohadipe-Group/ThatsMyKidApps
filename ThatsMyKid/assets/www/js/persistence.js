THATSMYKID.Persistence = {};

THATSMYKID.Persistence.db;

// usage of cordova database:
// http://docs.phonegap.com/en/2.5.0/cordova_storage_storage.md.html#Storage

THATSMYKID.Persistence.createDatabase = function(tx) {
	tx.executeSql('DROP TABLE IF EXISTS IMAGES');
	tx.executeSql('CREATE TABLE IF NOT EXISTS IMAGES (imageUrl unique)');
};

THATSMYKID.Persistence.init = function() {
	THATSMYKID.Persistence.db = window.openDatabase("ThatsMyKidDB", "0.1", "ThatsMyKid DataBase",
			10000);
	THATSMYKID.Persistence.db.transaction(THATSMYKID.Persistence.createDatabase, THATSMYKID.Persistence.errorDB, THATSMYKID.Persistence.successCB);
};

// Transaction error callback
//
THATSMYKID.Persistence.errorCB = function(err) {
	alert("Error processing SQL: " + err.code);
};

// Transaction success callback
//
THATSMYKID.Persistence.successCB = function() {
	alert("success!");
};

THATSMYKID.Persistence.selectSuccess = function(tx, results) {
	alert(results.rows.item(0).imageUrl);
};


THATSMYKID.Persistence.saveImage = function(path) {
	THATSMYKID.Persistence.db.transaction(saveUrl, THATSMYKID.Persistence.errorCB, THATSMYKID.Persistence.successCB);

	function saveUrl(tx) {
		tx.executeSql('INSERT INTO IMAGES (imageUrl) VALUES ("' + path + '")');
	}
};

THATSMYKID.Persistence.deleteImage = function(path) {
	THATSMYKID.Persistence.db.transaction(deleteUrl, THATSMYKID.Persistence.errorCB, THATSMYKID.Persistence.successCB);

	function deleteUrl(tx) {
		tx.executeSql('DELETE FROM IMAGES where imageUrl=' + path);
	}
};

THATSMYKID.Persistence.loadImages= function() {
	THATSMYKID.Persistence.db.transaction(loadUrls, THATSMYKID.Persistence.errorCB, THATSMYKID.Persistence.successCB);

	function loadUrls(tx) {
		tx.executeSql('SELECT imageUrl FROM IMAGES', [], THATSMYKID.Persistence.selectSuccess, THATSMYKID.Persistence.errorCB);
	}

};
