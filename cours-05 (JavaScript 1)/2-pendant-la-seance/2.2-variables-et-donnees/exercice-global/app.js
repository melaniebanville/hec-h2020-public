// 3. Définissez la variable "paysExpedition" 
var paysExpedition = "FRA";

// 4. Définissez la variable "paysLivraisonIncluse"
var paysLivraisonIncluse = [
	"CAN",
	"USA",
	"MEX"
];

// 5. Définissez une variable "tarifLivraisonNonIncluse"
var tarifLivraisonNonIncluse = 15;

// 6. Écrivez le contenu de chacune des variables dans la console, grâce à 3 commandes "console.log".
console.log("Le pays d'expédition est " + paysExpedition);
console.log("Les pays de livraison incluse sont " + paysLivraisonIncluse);
console.log("Le tarif pour les autres pays est " + tarifLivraisonNonIncluse);

// 7. Ajoutez un nouveau pays au tableau, avec l'action (méthode) .push()
paysLivraisonIncluse.push("COL");
console.log("Les pays de livraison incluse sont " + paysLivraisonIncluse);
