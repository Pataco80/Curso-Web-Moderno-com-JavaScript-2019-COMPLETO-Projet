// par nom/valeur

const salutation = 'Hé' // Contexte léxique 1
function execution() {
    const salutation = 'coucou' // Contexte léxique 2
    return salutation
}

// Les objets sont des groupes classés par clé:valeur
const client = {
    nom: 'Patrick',
    age: 32,
    poid: 80,
    adresse: {
        rue: 'ch. des puis',
        numero: 32,
        cp: 1000,
        ville: 'La Pluie'
    }
}


console.log(salutation)
console.log(execution())
console.log(client)