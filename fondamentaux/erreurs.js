function traitementErreurEtRelancer(erreur) {
    // throw new Erreur('...)
    // throw 10
    // throw true
    // throw 'messate'

    throw {
        nom: erreur.nom,
        msg: erreur.message,
        date: new Date
    }
}


function imprimerBomCrier(objet) {
    try {
        console.log(objet.name.toUpperCase() + '!!!!!')

    } catch (e) {
        traitementErreurEtRelancer(e)
    } finally {
        console.log('Fin')
    }
}

const objet = { name: 'Ricardo' }
imprimerBomCrier(objet)