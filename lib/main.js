var widgets = require("sdk/widget");
var tabs = require("sdk/tabs");
var self = require("sdk/self");

validatePage = function(tab) {
  if (tab.url.indexOf("https://cryptic.io/") != -1 {
		
    tab.attach({contentScriptFile: 
		 [self.data.url("sjcl.js"),
		  self.data.url("openpgp.js"),
			self.data.url("underscore.js"),
		  self.data.url("jquery.js"),
		  self.data.url("config.js"),
			self.data.url("contentscript.js")]});
  }
};
  tabs.on('ready', validatePage);
var widget = widgets.Widget({
  id: "cryptic-image",
  label: "Cryptic Verifier",
  contentURL: self.data.url("favicon.png"),
});
