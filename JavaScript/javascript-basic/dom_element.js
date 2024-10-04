let a = document.getElementById('demo'); // อ้างอิงเฉพาะ id
let c = document.querySelector('.demo'); 
let chage = document.querySelector('.content');// อ้างอิงผ่าน class


let b = document.getElementsByTagName('p');

function darkMode(){
    chage.setAttribute('class','dark');
}
function lgihtMode(){
    chage.setAttribute('class','lgiht');
}
console.log(a);
console.log(b);
console.log(c);
