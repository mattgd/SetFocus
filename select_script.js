var selectingElement = true;

// Toggles the selecting an element state
function selectElement() {
  selectingElement = !selectingElement;
}

jQuery(document).ready(function(){
    $("body *").hover(function() {
      if (selectingElement)
        $(this).toggleClass("hover");
    });

    $("body *").click(function() {
      if (selectingElement) {
        selectingElement = false;
        addWebsite($(this).getSelector()); // Save to JSON
      }
    });
});

// Save default focused element data using the Chrome extension storage API
function addWebsite(element) {
  var tabUrl = window.location.href;
  var getIndex = tabUrl.indexOf("?");
  if (getIndex > -1) {
    tabUrl = tabUrl.substr(0, getIndex);
  }

  localStorage.setItem(tabUrl, element);
}

// Created by Will - Last updated January 2014
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