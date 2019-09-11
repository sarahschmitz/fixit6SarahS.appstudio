/*
Write the command that gives the indexOf where "Riley" is located.
Write the command that gives the indexOf where "Cindy" is located (this should return-1).
Create a new variable called "withMarmaduke" and set it equal to the original array concatenated with the string "Marmaduke". Output this new array variable to the console. */


let petNames = ["Darcy","Jack","Jerry","Marty","Vito","Vinny","Riley","Saddie","Marge","Sam"]
petNames.splice(5,1)
console.log(petNames)

petNames.splice(3,1)
console.log(petNames)

petNames.unshift('Nancy')
console.log(petNames)

petNames.push('Sarah')
console.log(petNames)

console.log(petNames.indexOf("Riley"))

console.log(petNames.indexOf("Cindy"))

var withMarmaduke = petNames.concat("Marmaduke")
console.log(withMarmaduke)

