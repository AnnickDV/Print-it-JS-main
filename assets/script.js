const slides = [
	{
		"image":"tirages.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"tirageshd.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"couleurs.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"autocollants.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


// event listener sur les flèches
let leftArrowElt = document.querySelector('.arrow_left'); //définit la constante flèche gauche
leftArrowElt.addEventListener("click", function(){
	console.log("fleche gauche cliquee")
});

let rightArrowElt = document.querySelector('.arrow_right'); //définit la constante flèche droite
rightArrowElt.addEventListener("click", function(){
    console.log("fleche droite cliquee")
});