import React from 'react'

const LoginRightSide = () => {
  return (
    <div className='flex items-center justify-center w-1/2 text-white'>

      <div className='w-110 h-100  mr-10  '>

        <h1 className='text-4xl font-semibold font-helvetica'>Login your account</h1>
        <p className='font-light mt-2'>Don't have an account ? <a className='text-blue-500 underline hover:text-blue-700 hover:no-underline transition duration-300' href="">Create</a></p>

        <form action="" className='mt-4'>
          
          <input className="bg-[#3C364C] px-4 py-2 rounded-lg w-full outline-none focus:ring-2 focus:ring-[#6044a0] mt-5 " type="email" placeholder='Email' />
          <input className="bg-[#3C364C] px-4 py-2 rounded-lg w-full outline-none focus:ring-2 focus:ring-[#6044a0] mt-5 " type="password" placeholder='Enter your password' />
    
          <div className='flex mt-5 justify-between'>
           <div className='flex'>
             <input className='ml-2 mr-2' type="checkbox"/>
            <p>Remember me</p>
            </div> <a href="" className='text-blue-500 underline hover:text-blue-700 hover:no-underline transition duration-300'>Forget password?</a>
          </div>

          <button className='w-full px-4 py-2 bg-blue-600 rounded mt-5 transition active:scale-90 duration-400'>Login</button>
        </form>

        <div className='flex justify-center items-center mt-2'>
          <div className='w-11/30 h-[1px] bg-gray-400 mr-0.5'></div> <div className='text-gray-400'>Or login with</div> <div className='w-11/30 h-[1px] bg-gray-400 ml-1'></div>
        </div>

        <div className='flex justify-between mt-0'>
          <button className='flex gap-3 items-center w-48/100 justify-center px-4 py-2 bg-[#2C2638] border-1 border-gray-400 rounded mt-5 transition active:scale-90 duration-400'><img  className='w-7' src='../public/google-icon.png'></img>Google</button>
          <button className='flex gap-3 items-center w-48/100 justify-center px-4 py-2 bg-[#2C2638] border-1 border-gray-400 rounded mt-5 transition active:scale-90 duration-400'><img className='w-7' src='../public/apple-icon.png'></img>Apple</button>
        </div>

      </div>
    </div>
  )
}

export default LoginRightSide
