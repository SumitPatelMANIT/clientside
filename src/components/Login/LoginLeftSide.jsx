import React from 'react'
import { useState, useEffect } from 'react'
const LoginLeftSide = () => {

  const i = ['./img0.png','./img1.png', './img2.png' ];
  const [num, setNum] = useState(0);

  useEffect(()=>{

      const intervalId = setInterval(()=>{
          setNum((prev)=>{
            return prev + 1;
          })
      }, 3000);

      return ()=> clearInterval(intervalId);
  },[]);

  useEffect(() => {
    console.log({num});
  }, [num])

  return (
    
    
    <div className='w-1/2  flex items-center justify-center pr-7'>
         <div className={` bg-cover bg-center h-135 w-120 rounded-xl text-white transition duration-700`}
              style={{backgroundImage: `url(${i[num % 3]})`}}
         >
              
              
              <div className='flex items-center justify-between p-5'>
                  <h1 className='font-semibold font-serif text-4xl'>AMU</h1>
                  <button className='bg-[#5a4681] opacity-60  rounded-full w-25 h-6 text-[10px] transition active:scale-90 duration-400'>Back to website 🡲</button>
              </div>

              <div className='mt-78 flex flex-col items-center transition-all'>
                     <h1 className='text-3xl transition hover:scale-110 duration-400' >Capturing Moments, </h1>
                     <h1 className='text-3xl transition hover:scale-110 duration-400'> Creating Memories</h1>

                     <div className='flex justify-between w-30 mt-8'>
                         <div className={`w-9 h-1 rounded-2xl ${num % 3 == 0 ? "bg-white" : "bg-gray-700"}`}></div>
                         <div className={`w-9 h-1 rounded-2xl ${num % 3 == 1 ? "bg-white" : "bg-gray-700"}`}></div>
                         <div className={`w-9 h-1 rounded-2xl ${num % 3 == 2 ? "bg-white" : "bg-gray-700"}`}></div>
                     </div>

              </div>

         </div>
    </div>
  )
}

export default LoginLeftSide
