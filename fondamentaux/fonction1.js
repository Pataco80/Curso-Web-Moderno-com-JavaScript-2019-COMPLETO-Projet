// Fonction sans retour
function imprimeSomme(a, b) {
    console.log(a + b)
}
imprimeSomme(3, 2)
imprimeSomme(5)// Manque le 2ème paramêtre JS a reçu un nombre en premier, il affiche donc NaN car il n'y a pas d'équivalent en 2ème paramêtre
imprimeSomme(3, 5, 7, 8, 2, 4, 6, 7) // JS ignore les paramêtres au dela des 2 mentionnés en premier.
imprimeSomme() // NaN car l'addition des 2 paramêtres il s'attend à un nombre.

console.log('------------------------------------')

// Fonctions avec retour
function somme(a, b = 1) {
    return a + b
}
console.log(somme(2, 3))
console.log(somme(2))





















