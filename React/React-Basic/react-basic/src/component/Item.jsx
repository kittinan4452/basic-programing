function Item({name,amount}){
    return (
        <div>
        <li className="flex justify-between border shadow-xl py-6 px-6 mb-3  ">{name}<span>{amount}</span></li>
        </div>
    )
}
export default Item