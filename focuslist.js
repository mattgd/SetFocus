chrome.storage.sync.get(null, function(items) {
    var allKeys = Object.keys(items);
    for (var i = 0; i < allKeys.length; i++) {
      if (!allKeys[i].startsWith("http"))
        array.splice(i, 1);
    }

    if (allKeys.length > 0) {
      var focusTable = '<div class="set-focus-table"><table class="table table-striped"><tr><th>Remove</th><th>URL</th></tr>';

      for (var i = 0; i < allKeys.length; i++) {
        focusTable += '<tr><td><button type="button" class="btn btn-danger" id="remove-button">X</button></td><td><p><a target="_blank" href="' + allKeys[i] + '">' + allKeys[i].substr(0) + '</a></p></td></tr>';
      }

      focusTable += '</table></div>';
      $('body').append(focusTable);

      $("#remove-button").click(function() {
        var row = $(this).parent().parent();
        var url = row.find("a").attr('href');

        row.hide("slow");

        // Remove the value from Chrome's sync storage
        chrome.storage.sync.remove(url, function(){
          console.log("Focus element removed for " + url);
        });
      });
    }
});
