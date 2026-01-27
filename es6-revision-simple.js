/**
 * Révision ES6 
 **/

// Template literals 

const nom = "David"
const age = "34 ans"
const phrase = `Salut, je m'appelle ${nom} et j'ai ${age}`
console.log(phrase)

// Arrow function

const coucou = (prenom) => `salut je suis ${prenom}`
console.log(coucou("david"))

// Destructuring objet

const moi = {nom: "David", age: 34, ville: "leaz"}
const{nom, age, ville} = moi
console.log(nom, age, ville)

// Spread operator

const fruits =["pomme","mangue"]
const ajout = [...fruits, "kaki"]
console.log(ajout)

// Rest parameter

function saluer(prenom, ...autres){
  console.log(`salut ${prenom}`)
  console.log("et aussi", ...autres)
}
saluer("David", "Marguerite", "Sandra")