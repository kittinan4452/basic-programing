const data = [10,20,30,40]


const summation = data.reduce((value,e)=>{
    console.log(value);
    
    let total = e+value
    return total
})

console.log("totall = "+summation);
