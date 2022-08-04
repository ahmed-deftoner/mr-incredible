import React, { memo, useEffect } from 'react'

const angry = memo(() => {

  const imgs:Array<string> = [];

  useEffect(() => {
    for (let index = 0; index < 10; index++) {
      imgs[index] = 'i' + (index+1)
      console.log(imgs[index])
    }
  },)
  
  return (
    <div>
      <div className='flex flex-row justify-center'>
          {imgs.map((item,index) => (
            <>
              <img src=''></img>
              <input>hsjs</input>
            </>
          ))}
      </div>
    </div>
  )
})

export default angry