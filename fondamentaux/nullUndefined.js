let valeur
console.log(valeur) // Undefined car elle est déclarée mais pas de valeur atribuée dans la mémoire
//console.log(valeur2) // Is not defined car on demande à l'imprimer, mais elle n'a pas été déclarée au préalable

valeur = null // Utiliser null pour supprimer le contenu d'une variable ou fonction ne pas utiliser undefined
// console.log(valeur) //valeur a été initialisée mais pas d'espace utilisé en mémoire car sa valeur est null
console.log('---------------------------------------------')


const produit = {}

console.log(produit.prix)

produit.prix = 3.50

console.log(produit)

produit.prix = undefined // Ne pas se servir de undefined si nous ne souhaitons plus atribuer une valeur, mais faire un delete
console.log(!!produit.prix)
console.log(produit)

delete produit.prix // Ne pas se servir de undefined si nous ne souhaitons plus atribuer une valeur, mais utiliser null
console.log(produit)

produit.prix = null // faire unsage si nous souhaitons explicitement n'attribuer aucune valeur
console.log(!!produit.prix)
console.log(produit)
