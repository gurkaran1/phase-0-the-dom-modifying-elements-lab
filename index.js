// Write your code here!
const newHeader = document.createElement("h1");
newHeader.textContent = "Kartoos is the champion";
newHeader.setAttribute("id", "victory");
const mainElement = document.querySelector("#main");
mainElement.parentNode.removeChild(mainElement);