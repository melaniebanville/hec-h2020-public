// Chaîne de caractères représentant le pays d'expédition
var paysExpedition = "FRA";

// Tableau représentant les pays pour lesquels la livraison est incluse
var paysLivraisonIncluse = [
    "CAN",
    "MEX",
    "USA"
];

// Nombre représentant le tarif pour une livraison vers un pays où la livraison n'est pas incluse
var tarifLivraisonNonIncluse = 25;

// Affichage dans la console des trois variables
console.log("Le pays d'expédition est " + paysExpedition);
console.log("Les pays pour lesquels la livraison est incluse sont " + paysLivraisonIncluse.toString());
console.log("Le tarif pour une livraison dans un pays ne figurant pas dans la liste d'inclusion est " + tarifLivraisonNonIncluse + "$");

// Mettre en place une condition
// Le pays d'expédition (ex. FRA) fait-il partie des pays pour lesquels
// la livraison est gratuite
// var test = paysLivraisonIncluse.includes("CAN");
// console.log(test);

var prixProduit = 100;

if (paysLivraisonIncluse.includes(paysExpedition)) {
	console.log("Le prix total est : " + prixProduit);
} else {
	// var prixAvecLivraison = prixProduit + tarifLivraisonNonIncluse;
	// prixProduit = prixProduit + tarifLivraisonNonIncluse;
	// console.log("Le prix total est : " + prixAvecLivraison);
	console.log("Le prix total est : " + (prixProduit + tarifLivraisonNonIncluse) + "$.");
}










