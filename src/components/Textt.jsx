import React,{useState} from 'react'
import {data} from './data'

function Textt() {
  const [Search, setSearch] = useState('');
  console.log(Search);
  return (
    <>
      <div className='flex justify-center'>
         <div className='md:flex justify-center mt-[80px] text-white items-center space-x-4 space-y-6'>
            <h1 className='text-2xl font-bold text-center'>Search Your Name</h1>
            <input onChange={(e)=>setSearch(e.target.value)} className='bg-black text-white border border-white rounded-2xl px-10 py-4' type="text" />
         </div>
      </div>

      <div className='mx-20'>
        {
          data.filter((item)=>{
            if(Search === ''){
              return item
            }
            else if(item.first_name.toLowerCase().includes(Search.toLowerCase())){
              return item
            }
          }).map((item)=>{
            return(
              <div key={item.id} className='mt-[30px] text-white items-center border p-4'>
                <div className='flex justify-center gap-4 '>
                  <img className='w-[60px] rounded-full' src={item.images} alt="" />
                  <div>
                    <h1>{item.first_name}</h1>
                    <h1>{item.email}</h1>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>

    </>
  )
}

export default Textt