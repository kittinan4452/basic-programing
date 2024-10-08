//ลบค่าสมาชิกที่ซ้ำกันใน array
const myArr =[10,20,20,30,30,30,40,40,40,40]
const result = Array.from(new Set(myArr))

const result2 = [...new Set(myArr)]
console.log(myArr);
console.log(result);
console.log(result2);
