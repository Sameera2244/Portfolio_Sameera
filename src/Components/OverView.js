import React from 'react'
import Tilt from 'react-parallax-tilt'
import {Styles} from '../utils/style'
import {technologies,services} from '../Constants/index'
import {motion} from "framer-motion"
import './style.css'

function  OverView (){
  return (
    <div>
      <div className='flex-row items-center pl-5 justify-center pt-3' id='overview'>
        <span className={Styles.sectionHeadText}>
            Introduction
        </span>
        <hr className='w-[35%]'></hr>
        <div className={Styles.sectionText}>
        I'm a recent graduate in Computer Science Engineering,
        I bring expertise in Java and Python, along with 
        proficiency in HTML, CSS, ReactJS, MongoDB,
        ExpressJS, and NodeJS. I've completed projects
        in ReactJS and Python during my studies,
         showcasing my ability to develop dynamic user 
         interfaces and handle data effectively.
        With a strong foundation in full-stack 
        development and practical experience in 
        building web applications, I'm eager to
         contribute to innovative projects and 
         collaborate within dynamic teams,
          leveraging my diverse skill set to
           drive impactful solutions in the
            rapidly evolving field of technology.  
        </div>

    </div>
    <div className='flex flex-wrap justify-center'>
        {services.map((services)=>(
            <div>
                <Tilt
                    key={services.icon}
                    className="parallax-effect-glare-scale"
    perspective={500}
    glarecolor="fed7aa"
    glareEnable={true}
    glareMaxOpacity={0.50}
    sale={1.02}
    gyroscope={true}>
        <div className='p-3 m-3 flex flex-col justify-evenly items-center'>
            <img className='h-[100px] w-[100px]'src={services.icon} alt={services.title}/>
            <div className='m-5 text-violet-500'>
                {services.title}
            </div>
        </div>

                </Tilt>
                </div>

        ))

        }
    </div>
    <div className="flex flex-wrap justify-center items-center">
        {technologies.map((technologies)=>
        (
            <div
            key={technologies.name}
            className ='m-4 mt-5 h-[100px] w-[100px]rounded-3xl shadow-2xl border-[1px] border-violet-400
            hover:shadow-orange-300'>
            <img className='p-2' src={technologies.icon}/>
            <div classname='text-violet-600 justify-center flex'>
                {technologies.name}
            </div>

              
            </div>
            
        )
        )}
    </div>
    </div>


  )
}

export default OverView
