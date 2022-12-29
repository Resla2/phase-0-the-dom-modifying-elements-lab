const element = document.getElementById("main");
element.style.height = "300px";
element.style.backgroundColor = "#27647B";
element.textContent = "You've changed what's on the screen!";
element.style.fontSize = "24px";
element.style.marginLeft = "30px";
element.style.lineHeight = 2;

document.querySelector('main#main').remove();
const newHeader = document.createElement('h1');
newHeader.id = 'victory'
newHeader.textContent  = 'Javascript is the champion!'