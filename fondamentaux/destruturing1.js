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

const { banque: { sucursale, compte } } = personne
console.log(sucursale, compte) // Une erreur sera engendrée si une clé est inexistante. 'banque' n'existant pas il faut soit attribuer une valeur par défaut (voir ex: ligne 17) 



