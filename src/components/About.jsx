import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center items-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
            <p className='text-xl mt-20'>สวัสดีครับ ผม ศรันย์ พณะชัย 
            </p>
            <br/>
            <p className='text-xl'>
                จบการศึกษาจากมหาวิทยาลัยเกษตรศาสตร์กำแพงแสน สาขาเทคโนโลยีสารสนเทศ มีความตั้งใจในสายงานโปรแกรมเมอร์ พร้อมที่จะพัฒนาทักษะการเขียนโปรแกรมและพร้อมที่จะเรียนรู้เทคโนโลยีใมห่และ Tech Stack ใหม่ ๆ
            </p>
        </div>
    </div>
  )
}

export default About