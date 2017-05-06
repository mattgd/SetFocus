/**
* Registers click event listeners for the SetFocus UI buttons, and
* loads the content_script.js file.
*/
document.addEventListener('DOMContentLoaded', function() {

    /**
    * Registers the click event listener for the "select element" button.
    */
    document.getElementById("selectElement").addEventListener("click", function() {
        chrome.tabs.executeScript(null, { file: "jquery.js" }, function() {
            chrome.tabs.executeScript(null, {file: "select_script.js"});
        });
    });

    /**
    * Registers the click event listener for the "remove element" button.
    */
    document.getElementById("removeElement").addEventListener("click", function() {
        chrome.tabs.executeScript(null, { file: "jquery.js" }, function() {
            chrome.tabs.executeScript(null, {file: "remove_script.js"});
        });
    });

    /**
    * Loads the content_script.js file.
    */
    chrome.tabs.executeScript(null, { file: "jquery.js" }, function() {
        chrome.tabs.executeScript(null, {file: "content_script.js"});
    });
    
});
