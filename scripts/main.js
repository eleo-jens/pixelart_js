// refaire l'exercice avec une version avec des classes et classList
const pickers = document.querySelectorAll(".picker")
let currentColor = document.querySelector(".current_color");

//apres: créer une liste avec les couleurs en string et les assigner au tableau picker avec une boucle
pickers[0].style.backgroundColor = "#001219";
pickers[1].style.backgroundColor = "#005f73";
pickers[2].style.backgroundColor = "#0a9396";
pickers[3].style.backgroundColor = "#94d2bd";
pickers[4].style.backgroundColor = "#e9d8a6";
pickers[5].style.backgroundColor = "#ee9b00";
pickers[6].style.backgroundColor = "#ca6702";
pickers[7].style.backgroundColor = "#bb3e03";
pickers[8].style.backgroundColor = "#ae2012";
pickers[9].style.backgroundColor = "#9b2226";

const pickColor = function(elem)
{
    let pickedColor = elem.style.backgroundColor;
    currentColor.style.backgroundColor = pickedColor;
}

const Draw = function(elem){
    elem.style.backgroundColor = currentColor.style.backgroundColor;
}