// Idée 1 : définir d’un tableau
var titres = [
	"Cardigan Covert de Arc'teryx - Femmes",
	"Chandail Synchilla Snap-T léger de Patagonia - Femmes",
	"Chandail Better Sweater de Patagonia - Femmes",
	"Chandail à glissière Teslin de MEC - Femmes"
];

// Idée 2 : accéder à un élément (ex. 'Chandail à glissière’)
console.log(titres[2]);

// Idée 3 : déterminer la quantité d’éléments du tableau (ici: 4)
console.log(titres.length);

// Idée 4 : Utiliser la boucle for dans expression la plus simple
// Idée 6 : Rendre la condition de sortie dynamique
for(var i = 0; i < titres.length; i = i + 2) {
	// Idée 5 : Rendre l’index dynamique
	console.log("i prendra la valeur", i);
	console.log(titres[i]);
}