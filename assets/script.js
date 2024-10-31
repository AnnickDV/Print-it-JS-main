const slides = [
{
image:"slide1.jpg",
tagLine:"Impressions tous formats <span>en boutique et en ligne</span>"
},
{
image:"slide2.jpg",
tagLine:"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
},
{
image:"slide3.jpg",
tagLine:"Grand choix de couleurs <span>de CMJN aux pantones</span>"
},
{
image:"slide4.png",
tagLine:"Autocollants <span>avec découpe laser sur mesure</span>"
}
] //tableau d'objet
	
//Ajout des bulletpoints dynamique en fonction du nombre de slides
// appenChild est un node=un noeud. C'est un outil de navigation entre 2 éléments
for(let i = 0; i < slides.length; i++){
const dots = document.querySelector(".dots");
dots.appendChild(document.createElement("div")).classList.add("dot");
	}
	
// Fonction pour changer de slide
let slideSelected = 0; //1ere slide du tableau
let allDotList = document.querySelectorAll(".dot");
allDotList[0].classList.add("dot_selected");
function changeSlide(count){
 allDotList[slideSelected].classList.remove("dot_selected");
slideSelected = slideSelected + count;
//Contient l'index de l'image à afficher//Envoi selon la situation
if(slideSelected < 0){
slideSelected = slides.length -1;//Envoi sur le dernier dot par les IF conditions
}
if(slideSelected >= slides.length){
slideSelected = 0;//Envoi sur le premier dot
}
allDotList[slideSelected].classList.add("dot_selected");//l'index contient mes slidesSelected
document.querySelector(".banner-img").src = "./assets/images/slideshow/"+slides[slideSelected].image;//chercher image
document.querySelector("#banner p").innerHTML = slides[slideSelected].tagLine;//réaffiche le texte
	}
	
//Event du clic sur les flèches Si click, appel de la fonction changeSlide -1 ou +1=incrémentation compteur
document.querySelector(".arrow_left").addEventListener("click", () =>{
changeSlide(-1);
console.log("fleche gauche selectionnee");
	});
document.querySelector(".arrow_right").addEventListener("click", () =>{
changeSlide(1);
console.log("fleche droite selectionnee");
	});
	