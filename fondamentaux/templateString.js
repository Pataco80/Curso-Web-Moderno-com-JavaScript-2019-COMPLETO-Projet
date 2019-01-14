const nom = 'Ricardo'
const concatnom = 'Bonjour ' + nom + '!'
const template = `Bonjour ${nom}, 
comment vas-tu ?`

console.log(concatnom)
console.log(template)

// Expressions...
console.log(`1 + 1 = ${1 + 1}`)

const up = texte => texte.toUpperCase()
console.log(`Hé ${nom}
${up('Fais Attention')}!`)
