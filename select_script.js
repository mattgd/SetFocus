var selectingElement = true;

/**
* Adds the "set-focus-hover" class to all elements
* on hover when selection mode is enabled.
*/
jQuery(document).ready(function(){
    $("body *").hover(function() {
        if (selectingElement) {
            $(this).toggleClass("set-focus-hover");
        }
    });

    $("body *").click(function() {
        if (selectingElement) {
            selectingElement = false;
            $("body *").removeClass("set-focus-hover"); // Remove class from all elements
            addWebsite($(this).getSelector().toString()); // Save to JSON
        }
    });
});

/**
* Save default focused element data using the Chrome extension storage API.
*/
function addWebsite(element) {
    var tab_url = window.location.href;

    var get_index = tab_url.indexOf("?");
    if (get_index > -1) {
        tab_url = tab_url.substr(0, get_index);
    }

    element = element.replace(/\.set-focus-hover/g, ""); // Remove set-focus-hover class
    var storage = chrome.storage.sync;
    var obj = {};
    obj[tab_url] = element;

    // Set the value in Chrome's sync storage
    storage.set(obj, function() {
        console.log("Added default focus element for " + tab_url);
    });
}

/**
* Code for getting the selector of an HTML tag.
* Created by Will - Last updated January 2014
*/
!(function ($, undefined) {
    var get_selector = function (element) {
        var pieces = [];

        for (; element && element.tagName !== undefined; element = element.parentNode) {
            if (element.className) {
                var classes = element.className.split(' ');
                for (var i in classes) {
                    if (classes.hasOwnProperty(i) && classes[i]) {
                        pieces.unshift(classes[i]);
                        pieces.unshift('.');
                    }
                }
            }
            if (element.id && !/\s/.test(element.id)) {
                pieces.unshift(element.id);
                pieces.unshift('#');
            }
            pieces.unshift(element.tagName);
            pieces.unshift(' > ');
        }

        return pieces.slice(1).join('');
    };

    $.fn.getSelector = function (only_one) {
        if (true === only_one) {
            return get_selector(this[0]);
        } else {
            return $.map(this, function (el) {
                return get_selector(el);
            });
        }
    };

})(window.jQuery);
