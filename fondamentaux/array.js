const valeurs = [7.7, 8.9, 6.7, 9.7]
console.log(valeurs[1], valeurs[3])
console.log(valeurs[6])

valeurs[6] = 10
console.log(valeurs[6])

console.log(valeurs.length)
valeurs.push({ id: 3 }, false, null, 'texte', [0.2, 3.4])
console.log(valeurs)

console.log(valeurs.pop())
delete valeurs[8]
console.log(valeurs)
console.log(typeof valeurs)