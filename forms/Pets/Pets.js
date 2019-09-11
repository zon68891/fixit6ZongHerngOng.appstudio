/*
Create a new form named pets. Write the code to do the following. 
After each line of code, output the array(s) to the console. So you will have 7 lines of output. 
Hint: use the MSN Javascript Array Reference Guide provided in Code Academy: 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array 
(Links to an external site.) to see examples of array methods.

Write the command to remove "Vinny" from the array.
Write the command to remove "Marty" from the array.
Write the command to add "Nancy" to the front of the array.
Write the command to add your name to the end of the array.
Write the command that gives the indexOf where "Riley" is located.
Write the command that gives the indexOf where "Cindy" is located (this should return-1).

Create a new variable called "withMarmaduke" and set it equal to the original array concatenated 
with the string "Marmaduke". Output this new array variable to the console.
*/
var pets = ['Darcy', 'Jack', 'Jerry', 'Marty', 'Vito', 'Vinny', 'Riley', 'Saddie', 'Marge', 'Sam'];
var removed = pets.splice(5,1);//Write the command to remove "Vinny" from the array.
var removed = pets.splice(3,1);//Write the command to remove "Marty" from the array
console.log(pets);
var newLength = pets.unshift('Nancy')//Write the command to add "Nancy" to the front of the array.
console.log(pets)
var newLength = pets.push('Ryan')//Write the command to add your name to the end of the array.
console.log(pets)
var pos = pets.indexOf('Riley')//Write the command that gives the indexOf where "Riley" is located.
console.log(pos)
var pos2 = pets.indexOf('Cindy')//Write the command that gives the indexOf where "Cindy" is located (this should return-1).
console.log(pos2)
//Create a new variable called "withMarmaduke" and set it equal to the original array concatenated 
with the string "Marmaduke". Output this new array variable to the console.
var withMarmaduke = pets + ",Marmaduke" 
console.log(withMarmaduke)


