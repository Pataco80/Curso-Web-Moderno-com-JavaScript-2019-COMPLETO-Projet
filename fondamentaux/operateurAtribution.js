const a = 8
let b = 3

b += a // b = b + a
console.log(b) // b a pour valeur 11

b -= a // b = b - a
console.log(b) // b valait 11 et maintenant il vaut 3. a ayant la valeur 8 (11 - 8 = 3)

b *= 2 // b = b * 2
console.log(b)

b /= 2 // b = b / 2
console.log(b)

b %= 2 // b = b % 2 
console.log(b) // le chiffre n'étant pas divisible par 2, il affichera donc 1