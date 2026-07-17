import React from 'react'

const RightSide = () => {
  return (
    <div className='flex items-center justify-center w-1/2 text-white'>

      <div className='w-110 h-120  mr-10  '>

        <h1 className='text-4xl font-semibold font-helvetica'>Create an account</h1>
        <p className='font-light mt-2'>Already have an account? <a className='text-blue-500 underline hover:text-blue-700 hover:no-underline transition duration-300' href="./Login/Login.jsx">Log in</a></p>

        <form action="" className='mt-4'>
          <div className='flex justify-between' >
            <input className="bg-[#3C364C] px-4 py-2 rounded-lg 1/2 outline-none focus:ring-2 focus:ring-[#6044a0] mr-1" type="text" placeholder='First name' />
            <input className="bg-[#3C364C] px-4 py-2 rounded-lg w-1/2 outline-none focus:ring-2 focus:ring-[#6044a0] ml-2.5" type="text" placeholder='Last name' />
          </div>
          <input className="bg-[#3C364C] px-4 py-2 rounded-lg w-full outline-none focus:ring-2 focus:ring-[#6044a0] mt-5 " type="email" placeholder='Email' />
          <input className="bg-[#3C364C] px-4 py-2 rounded-lg w-full outline-none focus:ring-2 focus:ring-[#6044a0] mt-5 " type="password" placeholder='Enter your password' />
          <input className="bg-[#3C364C] px-4 py-2 rounded-lg w-full outline-none focus:ring-2 focus:ring-[#6044a0] mt-5 " type="password" placeholder='Confirm your password' />
          <div className='flex mt-5'>
            <input className='ml-2 mr-2' type="checkbox" name="I agreee to the " id="" />
            <p>I agree to the <a href="" className='text-blue-500 underline hover:text-blue-700 hover:no-underline transition duration-300'>Terms & Conditions</a></p>
          </div>

          <button className='w-full px-4 py-2 bg-blue-600 rounded mt-5 transition active:scale-90 duration-400'>Create account</button>
        </form>

        <div className='flex justify-center items-center mt-2'>
          <div className='w-11/30 h-[1px] bg-gray-400 mr-0.5'></div> <div className='text-gray-400'>Or register with</div> <div className='w-11/30 h-[1px] bg-gray-400 ml-1'></div>
        </div>

        <div className='flex justify-between mt-0'>
          <button className='flex gap-3 items-center w-48/100 justify-center px-4 py-2 bg-[#2C2638] border-1 border-gray-400 rounded mt-5 transition active:scale-90 duration-400'><img  className='w-7' src='../public/google-icon.png'></img>Google</button>
          <button className='flex gap-3 items-center w-48/100 justify-center px-4 py-2 bg-[#2C2638] border-1 border-gray-400 rounded mt-5 transition active:scale-90 duration-400'><img className='w-7' src='../public/apple-icon.png'></img>Apple</button>
        </div>

      </div>
    </div>
  )
}

export default RightSide
