// Modélisation du tableau des recettes de Chocolats Favoris
var recettes = [
	'Le temps des fraises',
	'Gâteau éclaté',
	'Pâte à choux'
];

// Modélisation de la description des recettes
var descriptions = [
	'Célébrez le temps des fraises à la façon Chocolats Favoris avec cette délicieuse tarte choco-fraise!',
	"Le seul, l'unique... Le gâteaux Éclaté maison!",
	'Réaliser cette recette de petites bouchées de pâte à biscuit trempées dans la fondue Dulce de Leche... Voici les bouchées de pâte à biscuits!'
]; 

// Modélisation de l'URL de chacune des recettes
var urls = [
	"https://www.chocolatsfavoris.com/recettes/strawberry-fields",
	"https://www.chocolatsfavoris.com/recettes/gateau-eclate",
	"https://www.chocolatsfavoris.com/recettes/bouchees-de-pate-a-biscuits"
];

// Boucle permettant de parcourir le tableau
for (var i = 0; i < recettes.length; i = i + 1) {
	// Affichage d'une phrase dans la console
	console.log("Ce soir, je mangerai : ", recettes[i]);
	console.log("La description de cette recette est : ", descriptions[i]);
	console.log("Pour plus d'informations : ", urls[i])
	console.log("=====")
}




