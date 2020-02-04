// Définissons le tableau des titres de produits
var titres = [
	"Cardigan Covert de Arc'teryx - Femmes",
	"Chandail Better Sweater de Patagonia - Femmes",
	"Chandail à glissière Teslin de MEC - Femmes",
	"Couche intermédiaire Rockwall de MEC - Femmes"
];

// Définissons maintenant le tableau des prix de produits
var prix = [
	199.95,
	169,
	62.97,
	99.95
];

// Maintenant, définissons le tableau des évaluations
var evaluations = [
	4.5,
	0,
	3,
	5	
];

// Modifions la boucle pour afficher toutes les informations associées
for (let i = 0; i < titres.length; i = i+1) {
	console.log("Le produit " + i + " est : ", titres[i], 
		". Il coûte : ", prix[i], "$. Son évaluation est : ", evaluations[i]);
}