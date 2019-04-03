/* eslint-disable */

/**
 * Notify the user about the fact, that her or his
 * browser is not supported by this application.
 */
var outputIncompatibilityNotification = function () {

    document.body.innerHTML = "<h1>Your browser is incompatible with this application!</h1>"
                            + "<h2>Please consider updating your browser or use "
                            + "the latest version of one of the following browsers:</h2>"
                            + "<ul>"
                            +    "<li>Chrome</li>"
                            +    "<li>Edge</li>"
                            +    "<li>Firefox</li>"
                            +    "<li>Safari</li>"
                            + "</ul>";
}

outputIncompatibilityNotification();
