const total3=(...numbers:number[])=>{
    return numbers.reduce((result,value)=>{
        return result+value
    },0)
}

console.log(total3(200,300,400,400,400));
console.log(total3());
