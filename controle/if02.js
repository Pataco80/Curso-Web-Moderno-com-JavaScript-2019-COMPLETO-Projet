function test1(num) {
    if (num > 7)/* 
                 * Attention !!! Il est possible de ne pas mettre de bloc pour un if si il
                 * n'y a qu'une ligne de code dedans. Néamoins, privilégier leur usage. JavaScript se sert de 
                 * l'indentation. Résultat, le console.log avec num respectera la condition, mais le console.log
                 * Fin, s'affichera toujour car il est considéré comme hors du bloc if. Attention !! Certains éditeurs
                 * de code modifient volontairement l'indentation au moment de l'enregistrement du fichier.
                 */
        console.log(num)
    console.log('Fin')
}
test1(5)
console.log('-------------')
test1(8)
console.log('-------------')
test1(7)


function test2(num) {
    if (num > 7); { // Attention avec le ; ne pas utiliser avec les structure de contrôle
        console.log(num)
    }
}
test2(3)
test2(9)