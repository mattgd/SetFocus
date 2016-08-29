jQuery(document).ready(function(){
  var tabUrl = window.location.href;
  var getIndex = tabUrl.indexOf("?");
  if (getIndex > -1) {
    tabUrl = tabUrl.substr(0, getIndex);
  }

  // Get the value from Chrome's sync storage and focus on the element
  chrome.storage.sync.get(tabUrl, function(items) {
    var element = items[tabUrl];
    if (element != undefined) {
      $(element).focus();
      console.log("SetFocus focused on element " + element);
    }
  });
});
