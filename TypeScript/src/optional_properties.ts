type Employess = {
    id:number,
    name:string,
    readonly salary:number, // ไม่สามารถเปลี่ยนค่าได้
    phone?:string //unknown ใส่ก็ได้ไม่ใส่ก็ได้
}
let emp1:Employess={id:1,name:"tii",salary:1000};

console.log(emp1);
