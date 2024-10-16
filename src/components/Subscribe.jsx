import { useState } from 'react'
import image from '../assets/images/image3.png'
const Subscribe = () => {
  const [change,setChange]=useState('')

  return (
    <div >
      <div className="grid grid-cols-2 mx-40 my-10 bg-[#ffe0b3] rounded-3xl">
        <div className='mx-auto'>
          <img src={image} className='w-80'  alt="" />
        </div>
        <div className='mx-10 my-10 space-y-4'>
          <h1 className='text-3xl font-bold'>Get Pawsome News!</h1>
          <p className='text-xl w-96'>Exclusive training tips, tricks, product deals and more.</p>
          <div>
            <input type="email"
            name='email'
            onChange={(e)=>setChange(e.target.value)}
            placeholder='Enter email'
            className='p-3 w-96 outline-none rounded-2xl'
            value={change}
             />
          </div>
          <div>
            <button className="p-4 text-lg bg-[#ff9900] text-white hover:text-black rounded-3xl w-36">Subscribe</button>
          </div>
        </div>
      </div>

    </div>
  )
}
export default Subscribe