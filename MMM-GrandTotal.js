Module.register("MMM-GrandTotal",{

	// Default module config.
	defaults: {
		text: "FirstModuleInput"
	},

	loaded: function(callback) {
		this.finishLoading();
		Log.log(this.name + ' is loaded!');
		callback();
	},

	start: function() {
		this.mySpecialProperty = "So much wow!";
		Log.log(this.name + ' is started!');
	},

	getScripts: function() {
	return [
		'script.js', // will try to load it from the vendor folder, otherwise it will load is from the module folder.
		'moment.js', // this file is available in the vendor folder, so it doesn't need to be available in the module folder.
		this.file('anotherfile.js'), // this file will be loaded straight from the module folder.
		'https://code.jquery.com/jquery-2.2.3.min.js',  // this file will be loaded from the jquery servers.
		]
	}
});
