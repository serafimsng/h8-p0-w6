

var headingElement = document.getElementById("fill-me");

headingElement.innerHTML = 'HALO!';

var parElements= document.getElementsByClassName("change-all-of-me")

for(let i=0;i<parElements.length;i++){
    parElements[i].innerHTML="HALO JUGA!"
}

var h2Element=document.getElementsByTagName('h2')

h2Element[0].innerHTML="Apa Kabar!"