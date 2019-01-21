
function achats(travail1, travail2) {
    const acheterSorbet = travail1 || travail2
    const acheterTV50 = travail1 && travail2
    // const acheterTV32 = !!(travail1 ^ travail2) xor c'est strictement un ou l'autre mais pas très pratique et courrant
    const acheterTV32 = travail1 != travail2
    const maintienSolvabilite = !acheterSorbet

    return { acheterSorbet, acheterTV50, acheterTV32, maintienSolvabilite }
}

console.log(achats(true, true))
console.log('------------------------------------')
console.log(achats(true, false))
console.log('------------------------------------')
console.log(achats(false, true))
console.log('------------------------------------')
console.log(achats(false, false))












