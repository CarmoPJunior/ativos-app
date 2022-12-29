(function(window) {
  window.env = window.env || {};

  // Environment variables
  window['env']['backendBaseUrl'] = "${API_HOST}:${API_PORT}"
  window["env"]["debug"] = "${DEBUG}";
})(this);
