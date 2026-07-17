import React from 'react'
import LeftSide from './LoginLeftSide.jsx'
import RightSide from './LoginRightSide.jsx'
const Login = () => {
  return (
    <div className='w-screen h-screen bg-[#565067] flex items-center justify-center '>
           <div className='flex bg-[#2C2638] w-17/20 size-18/20 rounded-xl shadow-gray shadow-xl/40'>
             <LeftSide/>
             <RightSide/>
           </div>
    </div>
  )
}

export default Login
