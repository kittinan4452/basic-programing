import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "./style/Transaction.css"
import './App.css'

import Transaction from './component/Transaction'
import FromComponent from './component/From'


const Title =()=><h1 className='text-4xl'>โปรแกรมบัญชีรายรับรายจ่าย</h1>

function App() {
  
  return (
    
    <div className=' min-w-full'>
      <FromComponent/>
      
      
      <div className='mx-96 text-center'>
      <Title/>
      <p className='text-xl'>บันทึกข้อมูลบัญชีในแต่ล่ะวัน</p>
      <Transaction/></div>
      
      
    </div>
  )
}

export default App
