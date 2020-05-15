Module.register("MMM-GrandTotal",{
	// Default module config.
	defaults: {
		text: "ThisIsMyFirstModule"
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
	}
});
