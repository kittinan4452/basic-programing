function total2(a:any){
    return a.toFixed(2);
}
//ไม่ตรวจสอบชนิดข้อมูลให้
let anount:any = 50.12345;
console.log(typeof anount );
console.log(total2(anount));
//ตรวจสอบชนิดข้อมูลให้
let anount2:unknown = "50.12345";
anount2 = 50.12345;


if (typeof anount2 === "number"){
    console.log(total2(anount2));
}

 