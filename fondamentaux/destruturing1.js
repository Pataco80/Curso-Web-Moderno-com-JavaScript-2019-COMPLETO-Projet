// Nouvelle fonctionalitée de ES2015

const personne = {
    nom: 'Jean',
    age: 48,
    adresse: {
        adresse1: 'la prune',
        numero: 222
    }
}

const { nom, age } = personne

console.log(nom, age)
console.log(personne)

const { surnom, apreciation = true } = personne
console.log(surnom, apreciation)

const { adresse: { adresse1, numero, cp } } = personne
console.log(adresse1, numero, cp)




