function rand([min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min]
    const valeur = Math.random() * (max - min) + min
    return Math.floor(valeur)
}

console.log(rand([20, 40]))
console.log(rand([555]))
console.log(rand([, 40]))
console.log(rand([]))



