var poop= document.getElementById("poop");
if (poop) {
  poop.onclick = function() {
    // do something
    const element = document.createElement('p');
    element.id = `url`;
    chrome.tabs.query({currentWindow: true, active: true}, function(tabs) {
      var tab = tabs[0].url;
      console.log(tab)
      element.innerText = tab;
      document.body.appendChild(element);
    });
  };
}