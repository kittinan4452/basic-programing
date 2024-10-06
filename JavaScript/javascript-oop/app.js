//สร้าง class
class User{
    // property

    //protected
    _name

    //  private 
    #password

    static database=[]


    //parameter constructor
    constructor(name,password){
        this._name=name
        this.#password=password
       
    }
    // method
    showDetail(){
        console.log("ชื่อผู้ใช่"+this._name+"รหัส"+this.#password);
    }
    // setter
    set Name(newName){
        this._name = newName
    }
    //getter
    get Name(){
        return this._name
    }
    static addUser(newUser){
        this.database.push(newUser)
    }
}
class Teacher extends User{
    #course
    constructor(name,password,course){
        super(name,password)
        this.#course = course
    }
    showDetail(){
        console.log(`ฉันเป็นครูวิชา${this.#course} ชื่อ ${this._name}`);
    }
}
class Student extends User{
    #score
    constructor(name,password,score){
        super(name,password)
        this.#score = score
    }
}
//สร้าง object
const user1 = new Teacher("tii",23,"dev")
const user2 = new Student("tii",23,100)

user1.showDetail()
user2.showDetail()
// //เก็บข้อมูล
// User.addUser(user1)
// //แสดงข้อมูล user 

// User.database.forEach((showuser)=>{
//     showuser.showDetail()
// })
//const user2 = new User("arm",23)
