jQuery(document).ready(function(){
  var tabUrl = window.location.href;
  var getIndex = tabUrl.indexOf("?");
  if (getIndex > -1) {
    tabUrl = tabUrl.substr(0, getIndex);
  }

  // Remove the value from Chrome's sync storage
  chrome.storage.sync.remove(tabUrl, function(){
    console.log("Focus element removed for " + tabUrl);
  });
});
