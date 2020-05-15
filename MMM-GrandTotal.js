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

});
