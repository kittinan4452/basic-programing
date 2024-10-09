const data = [10,20,30,40]

const summation=data.reduce((value,e)=>{
    const total = e+value
    return total
},0)


console.log(summation);
