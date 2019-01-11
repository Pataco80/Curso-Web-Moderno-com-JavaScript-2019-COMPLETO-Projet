const poid1 = 1.0
const poid2 = Number('2.0')

console.log(poid1, poid2)
console.log(typeof poid1, typeof poid2)
console.log(Number.isInteger(poid1))
console.log(Number.isInteger(poid2))
console.log('--------------------------')


const validation1 = 3.579
const validation2 = 9.579

const total = validation1 * poid1 + validation2 * poid2
const moyene = total / (poid1 + poid2)

console.log(moyene.toFixed(2))
console.log(moyene.toString(2))// Type binaire
console.log(typeof moyene)












