import React from 'react'
import {Styles} from '../utils/style';
import { Projects } from '../Constants';
import Tilt from 'react-parallax-tilt';

function Project() {
  return (
    <div>
       <div className='flex-row items-center pl-5 justify-center pt-3' id='Projects'>
        <span className={Styles.sectionHeadText}>
            Projects
        </span>
        <hr className='w-[35%]'></hr>
        <div className={Styles.sectionText}>
            Following Projects showcases my skills and experience through real-world examples of my work. It reflects my ability to solve compkex problems,work with different technologies and manage conflicts effectively
        
        </div>
</div>
 <div className='flex flex-wrap p-8 justify-evenly items-center'>
    {Projects.map((project)=>
    (
        <Tilt key={project.name} className='w-[300px] h-[500px]  flex flex-col justify-evenly shadow-2xl m-10 items-center hover:shadow-2xl 
        hover:shadow-violet-400 shadow-pink-300 p-3 rounded-xl
border-2 border-violet-900'>
    <div>
        <div className='flex justify-center items-center mb-3'>
         <div classNAme='h-[40px] w-[40px] m-3 bg-slate-50 rounded-full shadow-lg shadow-violet-500 
         flex justify-center items-center'>
            <a href={project.source_deploy_link} target='blank'>
                <siNetlify className="text-3xl font-bold text-violet-600"></siNetlify>

            </a>
         </div>

    <div className='text-2xl text-violet-600 font-extrabold'>
          {project.name}
    </div>
          <div className='text-center'>
            <span className='text-orange-500'>
                {project.description}
            </span>
          </div>
        </div>
    </div>

        </Tilt>
    )
    )}
 </div>
</div>
  )
}

export default Project

