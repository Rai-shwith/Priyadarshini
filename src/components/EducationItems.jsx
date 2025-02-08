import React from 'react'

const EducationItems = ({img,title, description}) => {
  return (
    <div className='flex flex-col bg-white p-5 rounded-lg shadow-lg w-11/12 md:w-1/4 m-5'>
      <div className="aspect-video overflow-hidden rounded-lg">
      <img src={"/images/"+img} alt={title} className='object-contain bg-red-800 rounded' />
      </div>
      <h3 className='text-2xl text-left font-bold mt-4'>{title}</h3>
      <p className='text-left opacity-50 mt-2 mb-5'>{description}</p>
    </div>
  )
}

export default EducationItems