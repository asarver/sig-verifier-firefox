/**
 * CrypticIOChrome namespace.
 */
if ("undefined" == typeof(CrypticIOChrome)) {
  var CrypticIOChrome = {};
};

/**
 * Controls the browser overlay for the Hello World extension.
 */
CrypticIOChrome.BrowserOverlay = {
  /**
   * Says 'Hello' to the user.
   */
  sayHello : function(aEvent) {
    let stringBundle = document.getElementById("crypticioverifier-string-bundle");
    let message = stringBundle.getString("crypticioverifier.greeting.label");

    window.alert(message);
  }
};
