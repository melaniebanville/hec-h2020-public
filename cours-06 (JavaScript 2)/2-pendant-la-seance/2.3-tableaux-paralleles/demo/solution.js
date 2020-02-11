// Définissons le tableau des titres de produits
var titres = [
	"Cardigan Covert de Arc'teryx - Femmes",
	"Chandail Better Sweater de Patagonia - Femmes",
	"Chandail à glissière Teslin de MEC - Femmes",
	"Couche intermédiaire Rockwall de MEC - Femmes"
];

// Modélisation des prix
var prix = [
	199.95,
	149,
	169,
	62.97
]; 

// Modélisation des évaluations
var evaluations = [
	4.5,
	0,
	0,
	3
]; 

// console.log(prix);
// console.log(evaluations);

// Mettons en place une boucle pour afficher tous les titres
for (var i = 0; i < titres.length; i = i+1) {
	console.log("Le titre du produit " + i + " est : ", titres[i]);
	console.log("Le prix du produit " + i + " est : ", prix[i]);
	console.log("L'évaluation du produit " + i + " est : ", evaluations[i]);
	console.log("=========");
}









