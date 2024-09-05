import React from 'react'
import { FaGithub,FaLinkedin } from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'

const SocialLink = () => {

    const links =[
        {
            id: 1,
            child: (
                <>LinkedIn <FaLinkedin size={25}/> </>
            ),
            href: 'https://Linkedin.com',
            style: 'rounded-tr-dm bg-blue-400'
            
        },
        {
            id: 2,
            child: (
                <>Github <FaGithub size={25}/> </>
            ),
            href: 'https://github.com',
            style: 'bg-purple-300'
        },
        {
            id: 3,
            child: (
                <>Mail <HiOutlineMail size={25}/> </>
            ),
            href: 'mailtoj.saranpanachai@hotmail.com',
            style: 'bg-blue-200'
        }
    ]



  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
        <ul>

            {links.map(({id, child, href , style}) => (
                <li key={id} className={`flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 ${style}` + " " + style}>
                <a href={href} className='flex justify-between items-center w-full text-white'>{child}</a>
                </li>
            ))}
        </ul>

    </div>
  )
}

export default SocialLink