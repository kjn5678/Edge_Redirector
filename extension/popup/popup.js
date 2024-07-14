var poop= document.getElementById("poop");
if (poop){
  poop.onclick = function(){
    // do something
    const element = document.createElement('p');
    element.id = `url`;
    chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
      var tab = tabs[0].url;
      if(tab.substring(0,30)=="https://www.bing.com/search?q="){
        tab =filter(tab);
      }
      element.innerText = tab;
      document.body.appendChild(element);
      if(tab.substring(0,30)=="https://www.bing.com/search?q="){
        element.innerText = filter(tab);
      }
    });
  }
}
function filter(taburl){
  var ss=30;
  while(taburl[ss]!="&"){
    ss++;
    if (ss>taburl.length){
      return taburl.substring(30,taburl.length);
    }
  }
  return taburl.substring(30,ss);
}