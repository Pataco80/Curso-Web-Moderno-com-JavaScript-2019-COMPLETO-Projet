var numero = 1
{
    let numero = 7
    console.log('dans le bloc', numero)
    {
        numero = 66
        console.log('dans le deuxieme bloc', numero)
    }
    console.log('dans le deuxieme bloc, test', numero)
}
console.log('dans le global', numero)
