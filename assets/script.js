const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	},
	);
];

// event listener sur les flèches : si "click" alors action non définie sur la flèche. 
// Le console.log permet de s'assurer que la fonction est prise en compte même vide
let leftArrowElt = document.querySelector('.arrow_left'); //définit la constante flèche gauche
leftArrowElt.addEventListener("click", function(){
	console.log("fleche gauche cliquee")
});

let rightArrowElt = document.querySelector('.arrow_right'); //définit la constante flèche droite
rightArrowElt.addEventListener("click", function(){
    console.log("fleche droite cliquee")
});