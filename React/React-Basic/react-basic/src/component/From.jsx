function FromComponent(){
    return (
        <div className="">
            

<form className="max-w-sm mx-auto">
  <div className="mb-5">
    <label for="number" className="block mb-2 text-sm font-medium text-gray-900 ">ชื่อสินค้า</label>
    <input type="text"  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="ระบุชื่อสินค้า" required />
  </div>
  <div className="mb-5">
    <label for="number" className="block mb-2 text-sm font-medium text-gray-900 ">จำนวนเงิน</label>
    <input type="number"  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   " placeholder="ระบุจำนวนเงิน" required />
  </div>
 
  
  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">เพิ่มข้อมูล</button>
</form>

        </div>
    )
}
export default FromComponent