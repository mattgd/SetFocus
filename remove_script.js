jQuery(document).ready(function(){
  var tabUrl = window.location.href;
  var getIndex = tabUrl.indexOf("?");
  if (getIndex > -1) {
    tabUrl = tabUrl.substr(0, getIndex);
  }

  localStorage.removeItem(tabUrl);
  console.log("Focus element removed for " + tabUrl);
});
