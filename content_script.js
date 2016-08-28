jQuery(document).ready(function(){
  var tabUrl = window.location.href;
  var getIndex = tabUrl.indexOf("?");
  if (getIndex > -1) {
    tabUrl = tabUrl.substr(0, getIndex);
  }

  var element = localStorage.getItem(tabUrl);
  console.log(element);
  /*chrome.storage.local.get(tabUrl, function(result) {
    console.log(tabUrl);
    console.log(result.tabUrl);
    if ($(result) != undefined) {
      console.log(tabUrl.result);
      $(result).focus();
      console.log("FOCUSED on " + result);
    }
  });*/
});
