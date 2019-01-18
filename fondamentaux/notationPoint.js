console.log(Math.ceil(6.1))

const monObjet = {}

monObjet.name = 'Pierre'
console.log(monObjet.name)

function Objet1(nom) {
    this.nom = nom
    this.execution = () => { console.log('Execution...') }
}

const Objet2 = new Objet1('chaise')
const Objet3 = new Objet1('tapis')

console.log(Objet1)
console.log(Objet1.nom) // Undefinid car il n'y a pas de paramêtre
console.log(Objet2.nom) // Cette fois, le parametre saisi est la string 'chaise'
console.log(Objet3.nom) // Cette fois, le parametre saisi est la string 'tapis'
Objet2.execution()









