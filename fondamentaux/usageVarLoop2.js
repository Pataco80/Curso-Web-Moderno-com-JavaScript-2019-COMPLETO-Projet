const array = []

for (var i = 0; i < 10; i++) {
    array.push(function () {
        console.log(i)
    })
}
array[3]()
array[8]()