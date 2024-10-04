const menu = document.getElementById('menu');
 //สร้าง element li ขึ้นมาใหม่
function createElementnew(){
    const item = document.createElement('li');
    item.innerText = "item";
    menu.append(item)
}
