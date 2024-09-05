import React from 'react'

const Contact = () => {
    const Cv = 'https://portfolio-aogqske2j-srn-james-projects.vercel.app/mailtoj.saranpanachai@hotmail.com/Resume.pdf' //http://localhost:3000
    const download_cv = (url) => {
      const fileName = url.split('/').pop()
      const aTag = document.createElement('a')
      aTag.href=url
      aTag.setAttribute('download',fileName)
      document.body.appendChild(aTag)
      aTag.click();
      aTag.remove();
    }
  return (
    
    <div name="contact" className='w-ull h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white'>
        <div>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4'>Contact</p>
                <p className='py-6'>Submit the form below to get touch with me</p>
                <div className='flex justify-center items-center'>
                    <form action="https://getform.io/f/2588efc5-4e4d-4835-ad9d-0b9e846e729d" method="POST" className='flex flex-col w-full md:w-1/2'>
                        <input type="text" name="name" placeholder='Enter your name' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
                        <input type="text" name="email" placeholder='Enter your Email' className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
                        <textarea name="message" placeholder='Enter your message' id="" cols="30" rows="10" className='tp-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>
                        <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-400 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'> Send </button>
                    </form>
                </div>
                <div className='hidden md:flex  justify-center items-center'>
                        <button onClick={()=>{download_cv(Cv)}} className='btn' id='btn2'>
                        Download CV
                        </button>
                        </div>
            </div>
        </div>
    </div>
  )
}

export default Contact