(function(window) {
  window.env = window.env || {};

  // Environment variables
  window['env']['backendBaseUrl'] = "${API_URL}"
  window["env"]["debug"] = "${DEBUG}";
})(this);
