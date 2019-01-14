console.log("--- Exemple avec double quottes ---")
const monObjectif = "Je suis un futur Gourou JavaScript" // Double quottes ne nécéssite pas d'échapement de caractère
const prenom = "Ricardo" // Double quottes ne nécéssite pas d'échapement de caractère

console.log(monObjectif)
console.log(monObjectif.charAt(10)) // l'espace compte comme caractère de string
console.log(monObjectif.charAt(6)) // Affiche la lettre s
console.log(monObjectif.charAt(80)) // Un caractère hors de la longueur de la string provoque une absence de caractère dans la console.
console.log(monObjectif.charCodeAt(1)) // Donne l'unicode du caractère de la String à l'index 1, soit la lettre e. Si l'index n'existe pas dans la String, la valeur NaN sera retournée
console.log(monObjectif.indexOf('i')) // Donne l'index d'un caractère dans une string. Si il y en a plusieurs, seul le premier est mentionné.
console.log(monObjectif.substring(5)) // Affiche la string à partir de l'index donné. Le 5 correspond à la lettre i.
console.log(monObjectif.substring(4, 12)) // Affiche la string à partir de l'index donné en premier argument et la lettre correspondant à l'argument 2 moins 1. Soit le 11ème caractère de la string, la lettre f
console.log("Je m'appèle ".concat(prenom) + (". ").concat(monObjectif).concat("!")) // La concaténation se fait avec .concat(). Elle peut remplacer le +, mais pas de symbole + après une variable cela causera une erreur.
console.log(monObjectif.replace('u', "t")) // Replace n'a pas fonctionné chez moi ?????
console.log("vue,React,Angular".split(","))

console.log("---------------------------")
console.log("\n") // caractère utilisé pour faire un saut de ligne



console.log("--- Exemple avec simples quottes ---")
/* 
 * Ci dessous vous constatez que l'usage des simples quottes 
 * nécéssitent de faire un échapement de caractères appostrophe
 */
const maProfession = 'Développeur JavaScript avec Vue.js, React et si tout va bien, Angular. C\'est l\'avenir du développement 2019'
console.log(maProfession)
