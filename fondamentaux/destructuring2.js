const [a] = [19]
console.log(a)

const [n1, , n3, , n5, n6 = 2] = [10, 60, 70]
console.log(n1, n3, n5, n6)

const [, [, note]] = [[2, 8], [6, 9]]
console.log(note)
