// Tableau => Assemblage d'éléments de même nature (sous une même étiquette)
var produits = [
	"t-shirt Levis",
	"casquette Lulu",
	"souliers Nike"
];
console.log(produits);
console.log(produits[2]);

produits.push("coupe-vent North Face");
console.log(produits[3]);

var quantite = produits.length;
console.log(quantite);

// L'élément coupe-vent North Face devient coupe-vent Marmot
produits[3] = "coupe-vent Marmot";
console.log(produits[3]);

// est-ce que les souliers Nike font partie de l'ensemble...
// est ce que le tableau produits inclue les souliers Nike
console.log(produits.includes("souliers Adidas"));










