let tools =["html5",'css','javascript']
let result = tools.join("|")
console.log(result);

//indexof, lastIndexOf

console.log(tools.indexOf("css"));
console.log(tools.lastIndexOf("css"));

//includes
console.log(tools.includes('css'));

//number (integer,floast )
let age = 25.987
console.log(Number.isInteger(age));
//string->interger
let input1 = "20"
let input2 = "20"

let result2 =Number.parseInt(input1)+Number.parseInt(input2)
console.log(result2);

