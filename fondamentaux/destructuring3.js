function rand({ min = 0, max = 1000 }) {
    const valeur = Math.random() * (max - min) + min
    return Math.floor(valeur)
}
const objet = { max: 50, min: 40 }
console.log(rand(objet))
console.log(rand({ min: 997 }))
console.log(rand({}))

/*
 * console.log(rand())
 * Génère une erreur car il faut impérativement lui passer des valeurs
 * ou un objet vide au minimum étant donné que les paramètres sont introduits à l'intérieur d'un objet
 */
