/**
* Removes extraneous GET parameters from the URL if necessary, and
* removes the current page's focus element setting from the Chrome sync storage.
*/
jQuery(document).ready(function() {
    var tab_url = window.location.href;
    
    var get_index = tab_url.indexOf("?");
    if (get_index > -1) {
        tab_url = tab_url.substr(0, get_index);
    }

    chrome.storage.sync.remove(tab_url, function() {
        console.log("Focus element removed for " + tab_url);
    });
});
