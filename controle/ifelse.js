const imprimerResultat = (note) => {
    if (note >= 7) {
        console.log('Tu as fait un ' + note + '. Bravo ! :-)')
    } else {
        console.log('Tu as fait un ' + note + '. Domage ! :-(')

    }
}
imprimerResultat(8)
imprimerResultat(3)
imprimerResultat('Aïe !') // Attention Vérifier le type de donnée.