import React from 'react'
import EducationItems from './EducationItems'

const Education = () => {
  return (
    <div className="flex flex-col w-full items-center">
        <div className="my-5">Your First Step to Excellence</div>
        <div className="text-4xl font-bold my-5">PEMS EDUCATION</div>
        <div className="flex flex-col md:flex-row">
        <EducationItems img={"prePrimary.png"} title={"Joyful Pre-Primary Years"} description={"With our fun school activities for pre-primary children, learning becomes interesting and enjoyable, and goes beyond textbooks and whiteboards. "} />
        <EducationItems img={"primary.png"} title={"Empowering Primary Years"} description={"Primary curriculum is transacted in a joyful environment that empowers primary age children and develops their competencies. "} />
        <EducationItems img={"middleSchool.png"} title={"Inspiring Middle Years"} description={"The school creates a stimulating learning environment that supports and challenges the individual student."} />
        <EducationItems img={"highSchool.png"} title={"Victorious Senior Years"} description={"Senior years are a time for our students to learn valuable skills for life from our professional teachers These years are the time to set some long term goals."} />
        </div>
    </div>
  )
}

export default Education