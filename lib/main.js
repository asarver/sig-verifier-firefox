var widgets = require("sdk/widget");
var tabs = require("sdk/tabs");
var self = require("sdk/self");

//tabs.on('open', function(tab) {
//});

validatePage = function(tab) {
  if (tab.url.indexOf("https://cryptic.io/") != -1) {
    tabs.open("www.google.com");
    tab.attach({contentScriptFile: self.data.url("contentscript.js")});
  }
};
  tabs.on('ready', validatePage);
var widget = widgets.Widget({
  id: "jquery-link",
  label: "jQuery website",
  contentURL: self.data.url("favicon.png"),
  onClick: function() {
    tabs.open("http://www.jquery.com/");
  }
});