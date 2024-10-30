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
];

slides.forEach(function(slides,index))


// event listener sur les flèches
let leftArrowElt = document.querySelector('.arrow_left'); //définit la constante flèche gauche
leftArrowElt.addEventListener("click", previousSlide{
	console.log("fleche gauche cliquee")
});

let rightArrowElt = document.querySelector('.arrow_right'); //définit la constante flèche droite
rightArrowElt.addEventListener("click", nextSlide{
    console.log("fleche droite cliquee")
});

const bannerImg=document.querySelector(".banner-img");
const bannerTxt=document.querySelector("#banner p");

//Ajout des bullets points au slider via le HTML

// Modifier le slide au clic flèche droite
function nextSlide(){
	initialIndex++;
	loopSlide(initialIndex);
	nextDots();
}

//Flèche gauche
function previousSlide(){
initialIndex--;
loopSlide(initialIndex);
nextDots();
}

//Appeler la bonne image
bannerImg.src=./assets/images/slideshow/${slides[initialIndex].image};

//Appeler le bon texte
bannerTxt.innerHTML=slides[initialIndex].tagLine;

//Tableau vide pour les dots
const dots=[];

//Création des dots selon les images
const dotsContainer=document.querySelector(".dots");
slides.forEach(function (slide,index){
const dot=document.createElement("span");
dot.classList.add("dot");
dotsContainer.appendChild(dot);
dotsContainer.push(dot);
})

//Changement de slide et défilement infini
let indexSlides=0;
const bannerImg=document.querySelector('.banner-img');
const bannerText=document.querySelector('banner-texte');
const bulletPoints=document.querySelectorAll('dot');

const rightArrowElt=document.querySelector('.arrow_right');
rightArrowElt.addEventListener('click',function(){
bulletPoints[indexSlides].classList.remover("dot_selected");
indexSlides++;

if(indexSlides>=slides.length){
	indexSlides=0;
}

bannerImg.src="./assettes/images/slideshow/"+slides[indexSlides].image;
bannerTexte.innerHTML=slides[indexSlides].tagLine;
bulletPoints[indexSlides].classList.add("dot_selected");
});

const leftArrowElt=document.querySelector('.arrow_left');
leftArrowElt.addEventListener('click',function(){
	bulletPoints[indexSlides].classList.remove("dot_selected");
	indexSlides--;

if(indexSlides<0){
	indexSlides=slides.length-1;

bannerImg.src="./assettes/images/slideshow/"+slides[indexSlides].image;
bannerTexte.innerHTML=slides[indexSlids].tagLine;
bulletPoints[indexSlides].classList.add("dot_selected");
}
})

//Retirer dot_selected sur tous les autres Index et Ajouter du dot_selected sur l'index en cours
function nextDots(){
	dots.forEach(function(dot){
	dot.classList.remove("dot_selected");
	});
dots[initialIndex].classList.add("dot_selected");
}

//Appeler pour avoir le dot blanc dès le chargement de la page
nextDots();