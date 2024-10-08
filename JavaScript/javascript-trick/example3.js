//คำนวเลขยกกำลัง
console.log(Math.pow(2,3));
console.log(2**3);

//กำหนดค่าเริ่มต้นด้วย OR Operator ||

function showName(name){
    console.log(`สวัสดี ${name||"admin"}`);

    
}
showName()

//จัดรูปแบบตัวเลขด้วย _ (Numeric Separators)
const money = 1_000_000
const amount = 10_000
console.log(money);

//ตรวจสอบเงื่อนไขด้วย IndexOf
const amount2=1
if([1,2,"one","two"].indexOf(amount2)>=0){
    console.log(true);
    
}else{
    console.log(false);
    
}
// ปัดเศษตัวเลขลงด้วย bitwise Operator

const myFloat = Math.floor(49.85)
console.log(myFloat);
