import React, { memo, useEffect, useState } from 'react'

const angry = memo(() => {

  const [imgs, setimgs] = useState<string[]>([])
  const temp:Array<string> = []

  useEffect(() => {
    for (let index = 0; index < 10; index++) {
      temp[index] = 'i' + (index+1)
      console.log(temp[index])
    }
    setimgs(temp)
  },[])
  
  return (
    <div>
      <div className='flex flex-col justify-center items-center mt-20'>
          {imgs.map((item,index) => (
            <li key={index} className="flex flex-row gap-5 mb-5">
              <img className='h-50 w-48' src={'../../angry/'+item+'.png'}></img>
              <input></input>
            </li>
          ))}
          <button className='bg-slate-700 px-8 py-5 hover:bg-slate-900'>
            Generate meme
          </button>
      </div>
    </div>
  )
})

export default angry