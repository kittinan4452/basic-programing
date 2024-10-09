function sayHi():string
function sayHi(name:string):string
function sayHi(name?:unknown):unknown{
    if (!name) {
        return `hello`
    } if (typeof name == "string") {
        return `hello ${name}`
    } 
    throw new Error("ชนิดข้อมูลไม่ถูกต้อง")
}

console.log(sayHi());
console.log(sayHi("kittinan"));

