console.log(typeof Object)
console.log(typeof new Object)
console.log('---------------------------------')

const Client = function () { } // Attention ne pas créer d'objet avec fonction fléchée
console.log(typeof Client)
console.log(typeof new Client)
console.log('---------------------------------')

class Produit { } //ES 2015 (ES6)
console.log(typeof Produit)
console.log(typeof new Produit())



