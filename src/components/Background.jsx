import React from 'react'

function Background() {
  return (
    <div className='z-[2] fixed w-full h-screen'>
        <div className='w-full absolute top-[5%] flex justify-center py-10 text-zinc-200 '>Documents.</div>
        <h1 className='absolute text-[13vw] text-zinc-200 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] leading-none tracking-tighter'>Docs.</h1>
    </div>
  )
}

export default Background