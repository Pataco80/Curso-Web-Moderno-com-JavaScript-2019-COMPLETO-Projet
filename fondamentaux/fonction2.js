// Atribuer une fonction à une variable
const imprimeSomme = function (a, b) {
    console.log(a + b)
}
imprimeSomme(1, 5)

console.log('------------------------------')

// Fonction fléchées (racourci de syntaxe)
const multiply = (c, d) => {
    return c * d
}
console.log(multiply(3, 3))

// return implicite
const soustraction = (e, f) => e - f
console.log(soustraction(6, 2))


const imprimer2 = a => console.log(a)
imprimer2('fonction flèchée à 1 paramêtre !')






