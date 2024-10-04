//rest parameter
sum =(...num)=>{
    let totall = 0;
    for (let number of num){
        totall += number;
        return totall
    }
}

console.log("totall = "+sum(500+1000));
