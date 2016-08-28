document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("selectElement").addEventListener("click", function() {
      //sendMessage("select-element");
      chrome.tabs.executeScript(null, { file: "jquery.js" }, function() {
        chrome.tabs.executeScript(null, {file: "select_script.js"});
      });
  });

  document.getElementById("removeElement").addEventListener("click", function() {
      //sendMessage("select-element");
      chrome.tabs.executeScript(null, { file: "jquery.js" }, function() {
        chrome.tabs.executeScript(null, {file: "remove_script.js"});
      });
  });

  chrome.tabs.executeScript(null, { file: "jquery.js" }, function() {
    chrome.tabs.executeScript(null, {file: "content_script.js"});
  });
});
