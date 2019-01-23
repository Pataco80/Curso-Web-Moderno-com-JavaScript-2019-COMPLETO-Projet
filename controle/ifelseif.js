Number.prototype.entre = function (debut, fin) {
    return this >= debut && this <= fin
}

const imprimerResultat = (note) => {
    if (note.entre(9, 10)) {
        console.log('Tu as fait un ' + note + '. Bravo')
    } else if (note.entre(7, 8.99)) {
        console.log('Tu as fait un ' + note + '. Tu as un bon résultat')
    } else if (note.entre(6, 6.99)) {
        console.log('Tu as fait un ' + note + '. Tu t\'est juste ratrapé')
    } else if (note.entre(4, 5.99)) {
        console.log('Tu as fait un ' + note + '. Tu n\'as pas la moyene')
    } else if (note.entre(0, 3.99)) {
        console.log('Tu as fait un ' + note + '. Tu as échoué')
    } else {
        console.log('Note Invalide')
    }
}
imprimerResultat(10)
console.log('----------------------')
imprimerResultat(8)
console.log('----------------------')
imprimerResultat(6)
console.log('----------------------')
imprimerResultat(4)
console.log('----------------------')
imprimerResultat(2)
console.log('----------------------')
imprimerResultat(-3)
console.log('----------------------')
imprimerResultat(55)
console.log('----------------------')
