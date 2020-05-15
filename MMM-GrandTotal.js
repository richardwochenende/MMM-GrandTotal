Module.register("MMM-GrandTotal",{

	// Default module config.
	defaults: {
		text: "FirstModuleInput"
	},

	// Override dom generator.
	getDom: function() {
		var wrapper = document.createElement("div");
		wrapper.innerHTML = this.config.text;
		return wrapper;
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
	},

	getStyles: function() {
	return [
		'script.css', // will try to load it from the vendor folder, otherwise it will load is from the module folder.
		'font-awesome.css', // this file is available in the vendor folder, so it doesn't need to be available in the module folder.
		this.file('anotherfile.css'), // this file will be loaded straight from the module folder.
		'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css',  // this file will be loaded from the bootstrapcdn servers.
		]
	},

	getTranslations: function() {
		return {
			en: "translations/en.json",
			de: "translations/de.json"
			}
	},

	getDom: function() {
		var wrapper = document.createElement("div");
		wrapper.innerHTML = 'Hello world!';
		return wrapper;
	}
});
