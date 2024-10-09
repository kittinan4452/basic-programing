import { v4 as uuidv4 } from 'uuid';
import Item from "./item"

const Transaction = ()=> {
    const data =[
        {id:1,title:"ค่าเริ่มเริ่มต้น" , amount:2000},
        {id:2,title:"ค่าเริ่มเริ่มต้น" , amount:2000},
        {id:3,title:"ค่าเริ่มเริ่มต้น" , amount:2000},
        {id:4,title:"ค่าเริ่มเริ่มต้น" , amount:2000},
    ]
    return (
      <ul className=' flex justify-center  flex-col'>
          {data.map((element)=>{
            return <Item  name={element.title} amount={element.amount} key={uuidv4()}/>
          })}
        </ul>
    )
  }
  export default Transaction