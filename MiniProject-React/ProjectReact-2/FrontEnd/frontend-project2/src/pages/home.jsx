import { Home } from "@mui/icons-material"
import { Button } from "@mui/material";
import { useEffect } from "react";

function Homepage(){

    useEffect(()=>{
        const token = localStorage.getItem('token')
        fetch('http://localhost:3333/authen', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer '+token
            },
            //body: JSON.stringify(jsonData), // Use the jsonData created from FormData
          })
            .then((response) => response.json())
            .then((data) => {
              if (data.status === 'ok'){
                  alert("authen สำเร็จ")
                  
              }else{
                  alert('authen faild')
                  localStorage.removeItem('token');
                  window.location = "/login"
              }
            })
            .catch((error) => console.error(error));
        
    },[])

    const handLogout=(event)=>{
        event.preventDefault();
        localStorage.removeItem('token');
        window.location = '/login';

    }
    return (

    <div>
        <div>kittinan</div>
        <Button variant="contained" onClick={handLogout}>logout</Button>
    </div>
    )
}
export default Homepage;