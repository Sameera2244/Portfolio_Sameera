import React from 'react'
import Profiles from '../assests/samprofile (1) (1).png'
import {Styles} from '../utils/style'
import Resume from '../assests/Resume.pdf'
import {TiArrowDownOutline} from "react-icons/ti"
import "../App.css"


function About() {
  return (
    <div className='flex flex-wrap justify-center mt-10 p-10' id='Home'>
        <div className='flex-1 py-4'>
            <span className={Styles.heroHeadText}>
                Hi, I'm <span className='text-orange-600'>
    sameera

                </span>
                <br/>
                <span className={Styles.heroSubText}>
                    I am MERN Stack Developer 
                </span>
            </span>
            <br/>
        <div className='w-[14rem]'>
        <a 
        href={Resume}
        download="Resume"
        target='blank'
        rel="moreferrer"
        >
            <div className='p-4 mt-2 w-[13rem] rounded-xl 
            text-orange-500  flex justify-center border-2
             border-orange-500 hover:border-violet-500
              hover:shadow-pink-500'><TiArrowDownOutline className='text-lg mr-3 mt-1 text-orange-500'>
              </TiArrowDownOutline>Resume

            </div>
        </a>
     </div> 
    </div>
    <div className='flex flex-wrap'>
        <img src={Profiles} alt='profiles' className='element object-contain p-4'/>


    </div>
    </div>
  )
}

export default About
