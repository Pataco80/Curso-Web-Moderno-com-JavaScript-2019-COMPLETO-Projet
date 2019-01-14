const prod1 = {}

// Un objet est composé de clés et valeurs séparés par des points
prod1.nom = 'Celulaire Ultra Mega'
prod1.prix = 300
prod1['Décompte produit'] = 0.30 // Eviter les espaces dans les clés


console.log(prod1)

const prod2 = {
    nom: 'Chemise Polo',
    prix: {
        xs: 34.00,
        s: 38.00,
        m: 41.00,
        l: 45.00,
        xl: 50.50
    }
}
console.log(prod2)