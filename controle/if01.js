/*
function bonneNouvelle(note) {
    if (note >= 7) {
        console.log('Tu as fait un résultat de ' + note + '. C\'est une bonne note')
    }
}
bonneNouvelle(6);
bonneNouvelle(8);
*/
function cEstVrai(valeur) {
    if (valeur) {
        console.log('C\'est vrai... ' + valeur)
    }
}
cEstVrai()
cEstVrai(null)
cEstVrai(undefined)
cEstVrai(NaN)
cEstVrai('')
cEstVrai(0)
cEstVrai(-1)
cEstVrai(' ')
cEstVrai('?')
cEstVrai([])
cEstVrai([1, 2, 3])
cEstVrai({})
