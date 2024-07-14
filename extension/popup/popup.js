var poop= document.getElementById("poop");

var isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);
var isEdgeChromium = isChrome && (navigator.userAgent.indexOf("Edg") != -1);

if(isEdgeChromium){
  document.getElementById("browser").innerText = "Detected Browser: Edge"
}
else{
  document.getElementById("browser").innerText = "Detected Browser: Not Edge"
}


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
      if(document.getElementById("google").checked){
        chrome.tabs.create({
          url: ("https://www.google.com/search?q=" + tab)
        });
      }
      if(document.getElementById("bing").checked){
        chrome.tabs.create({
          url: tabs[0].url
        });
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

/*
// Opera 8.0+
var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

// Firefox 1.0+
var isFirefox = typeof InstallTrigger !== 'undefined';

// Safari 3.0+ "[object HTMLElementConstructor]" 
var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && window['safari'].pushNotification));

// Internet Explorer 6-11
var isIE = false || !!document.documentMode;

// Edge 20+
var isEdge = !isIE && !!window.StyleMedia;

// Chrome 1 - 79
var isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);

// Edge (based on chromium) detection
var isEdgeChromium = isChrome && (navigator.userAgent.indexOf("Edg") != -1);

// Blink engine detection
var isBlink = (isChrome || isOpera) && !!window.CSS;


var output = 'Detecting browsers by ducktyping:<hr>';
output += 'isFirefox: ' + isFirefox + '<br>';
output += 'isChrome: ' + isChrome + '<br>';
output += 'isSafari: ' + isSafari + '<br>';
output += 'isOpera: ' + isOpera + '<br>';
output += 'isIE: ' + isIE + '<br>';
output += 'isEdge: ' + isEdge + '<br>';
output += 'isEdgeChromium: ' + isEdgeChromium + '<br>';
output += 'isBlink: ' + isBlink + '<br>';
document.body.innerHTML = output;
*/