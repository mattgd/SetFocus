var selectingElement = false;

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    console.log("HERERERE2222");
    if (message.text == "select-element") {
      console.log("HERERERE");
      selectElement();
    }
});

function selectElement() {
  selectingElement = !selectingElement;
}

$( "body *" ).mouseover(function() {
  console.log("HERE");
  if (selectingElement) {
    $(this).css('border', '1px solid #F00');
  }
});
