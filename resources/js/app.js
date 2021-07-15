require("./bootstrap");

import "alpinejs";
import Toasted from "toastedjs";

var Turbolinks = require("turbolinks");
Turbolinks.start();

window.toasted = new Toasted({
    position: "bottom-left",
    theme: "alive",
    duration: 3500
});

// console.log(window.toasted);
