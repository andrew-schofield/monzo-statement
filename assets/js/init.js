var App = App || {};

// start the app
App.init = function () {
    App.MondoAPI.init();
};

// run on DOM load
$(document).ready(App.init);
