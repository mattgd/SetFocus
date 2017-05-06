/**
* Removes extraneous GET parameters from the URL if necessary, and
* loads current page's element focus setting from the Chrome sync storage.
*/
jQuery(document).ready(function(){
    var tab_url = window.location.href;

    var get_index = tab_url.indexOf("?");
    if (get_index > -1) {
        tab_url = tab_url.substr(0, get_index);
    }

    chrome.storage.sync.get(tab_url, function(items) {
        var element = items[tab_url];

        if (element != undefined) {
            $(element).focus();
            console.log("SetFocus focused on element " + element);
        }
    });
});
