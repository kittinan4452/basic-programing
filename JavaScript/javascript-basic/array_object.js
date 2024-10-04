let product ={
    name:"เมาส์",
    price: 1500,
    color:"red",
    categotr:"computer",
    size:"M",
    displayProduct:function(){
        return "ชื่อสินค้า = "+this.name+" ราคา = "+ this.price +"หมวดหมู่ = "+this.categotr;

    },
    discount:function(){
        return this.price - 1000;
    }
}
console.log(product.displayProduct());
console.log(product.discount());
