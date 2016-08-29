chrome.storage.sync.get(null, function(items) {
    var allKeys = Object.keys(items);
    for (var i = 0; i < allKeys.length; i++) {
      if (!allKeys[i].startsWith("http"))
        array.splice(i, 1);
    }

    for (var i = 0; i < allKeys.length; i++) {
      $('body').append('<div class="focus-website"><button type="button" class="set-focus-button remove">X</button><p><a target="_blank" href="' + allKeys[i] + '">' + allKeys[i].substr(0, 16) + '</a></p></div>');
    }
});
