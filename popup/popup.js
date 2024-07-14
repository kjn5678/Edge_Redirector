const poop = document.getElementById("poop");
if (poop) {
  poop.onclick = function() {
    // do something
    console.log("pee")
    const element = document.createElement('p');
    element.id = `1`;
    element.innerText = `POOP`;
    document.body.appendChild(element);
  };
}