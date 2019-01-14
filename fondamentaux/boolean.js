let actif = false
console.log(actif)

actif = 1
console.log(!!actif)

console.log('----- Les vrais -----')
// Le concept de la double négation est la suivante: Tu n'est pas le contraire de la valeur indiquée
console.log(!!3) // Ex: Tu n'est pas le contraire de 3. Donc 3 est présent dans le console.log, donc c'est vrai
console.log(!!-1)
console.log(!!' ') // Tu n'est pas le contraire d'un espace dans une string. L'espace est présent dans le console.log, donc true
console.log(!!'texte')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(actif = true)) // Actif à une valeur qui n'est pas le contraire de true

console.log('----- Les faux -----')
console.log(!!0) // Ex: Tu n'est pas le contraire de 3. Donc 3 est présent dans le console.log, donc c'est vrai
console.log(!!'') // Tu n'est pas le contraire d'un espace dans une string. L'espace est présent dans le console.log, donc true
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(actif = false))
/* toute attribution négative est automatiquement à false. 
 * N'est pas null, n'est pas un nombre, n'a pas de valeur attribuée. N'est pas 
 * le contraire de ses attributions négatives. réponse négative, soit false
 */

console.log('----- Pour finaliser -----')
console.log(!!('' || null || 0 || ' ')) // Il sufit qu'une des valeurs soit positive pour passer à une réponse positive, soit true

let nom = 'Lucas'
console.log(nom || 'Inconnu')
