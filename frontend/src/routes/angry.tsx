import React, { memo, useEffect, useState } from 'react'

const angry = memo(() => {

  const [imgs, setimgs] = useState([])
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
      <div className='flex flex-col justify-center'>
          {imgs.map((item,index) => (
            <li key={index} className="flex flex-row">
              <img src=''></img>
              <input></input>
            </li>
          ))}
      </div>
    </div>
  )
})

export default angry