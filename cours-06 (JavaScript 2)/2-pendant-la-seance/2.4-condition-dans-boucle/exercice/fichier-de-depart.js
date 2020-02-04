// Modélisation du tableau des recettes de Chocolats Favoris
var recettes = [
	'Le temps des fraises',
	'Gâteau éclaté',
	'Pâte à choux'
];

// Modélisation du tableau de la description des recettes
var descriptions = [
	"Célébrez le temps des fraises à la façon Chocolats Favoris!",
	"Le seul, l'unique... Le gâteaux Éclaté maison!",
	"Pour faire votre pâte à choux favorite!"
];

// Modélisation du tableau des url spécifiques
var urls = [
	"https://www.chocolatsfavoris.com/recettes/strawberry-fields",
	"https://www.chocolatsfavoris.com/recettes/gateau-eclate",
	"https://www.chocolatsfavoris.com/recettes/puff-pastry"
];


// Boucle permettant de parcourir le tableau
for (let i = 0; i < recettes.length; i = i + 1) {
	// Affichage d'une phrase dans la console
	console.log("Ce soir, je mangerai : ", recettes[i]);
	console.log("Cette recette consiste en : ", descriptions[i]);
	console.log("Vous pouvez cliquer sur le lien suivant pour l'ouvrir : ", urls[i]);
	console.log("====================");
}