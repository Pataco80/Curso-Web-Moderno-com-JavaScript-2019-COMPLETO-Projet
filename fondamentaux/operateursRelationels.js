console.log('01)', '1' == 1)
console.log('01)', '1' === 1)
console.log('03)', '3' != 3)
console.log('04)', '3' !== 3)

console.log('05)', '3' > 1)
console.log('06)', '3' < 1)
console.log('07)', '3' >= 3)
console.log('08)', '3' <= 1)


const date1 = new Date(0)
const date2 = new Date(0)

console.log('09)', date1 === date2) // Attention car dans les 2 cas, c'est par référence et non par valeur. date1 et date2 ne sont pas référencés sur le même emplacement mémoire.
console.log('10)', date1 == date2)
console.log('11)', date1.getTime() === date2.getTime())

console.log('11)', undefined == null)
console.log('11)', undefined === null)

// Attention !!! Mieux vaut utiliser le === que le double égal car cela permet de ne pas confondre le type de la comparation
