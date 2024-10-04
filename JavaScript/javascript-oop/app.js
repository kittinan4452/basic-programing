//สร้าง class
class User{
    // property
    #name
    #password

    static database=[]


    //parameter constructor
    constructor(name,password){
        this.#name=name
        this.#password=password
       
    }
    // method
    showDetail(){
        console.log("ชื่อผู้ใช่"+this.#name+"รหัส"+this.#password);
    }
    // setter
    set Name(newName){
        this.#name = newName
    }
    //getter
    get Name(){
        return this.#name
    }
    static addUser(newUser){
        this.database.push(newUser)
    }
}

//สร้าง object
const user1 = new User("tii",23)

//เก็บข้อมูล
User.addUser(user1)
//แสดงข้อมูล user 
User.database.forEach((showuser)=>{
    showuser.showDetail()
})
//const user2 = new User("arm",23)
