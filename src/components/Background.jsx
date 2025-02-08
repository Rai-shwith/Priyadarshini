import React from 'react'

const Background = ({children}) => {
  return (
    <div className='w-screen min-h-screen bg-slate-50  flex flex-col items-center'>{children}</div>
  )
}

export default Background