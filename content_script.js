jQuery(document).ready(function(){
  var tabUrl = window.location.href;
  var getIndex = tabUrl.indexOf("?");
  if (getIndex > -1) {
    tabUrl = tabUrl.substr(0, getIndex);
  }

  var element = localStorage.getItem(tabUrl);
  if (element != undefined) {
    $(element).focus();
    console.log("SetFocus focused on element " + element);
  }
});
